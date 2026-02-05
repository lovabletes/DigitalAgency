"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { classNames } from "@/utils/class-names";

// Form context to manage form state
type FormContextValue = {
  values: Record<string, unknown>;
  errors: Record<string, string | undefined>;
  touched: Record<string, boolean>;
  setFieldValue: (name: string, value: unknown) => void;
  setFieldError: (name: string, error: string | undefined) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
};

const FormContext = React.createContext<FormContextValue>({
  values: {},
  errors: {},
  touched: {},
  setFieldValue: () => { },
  setFieldError: () => { },
  setFieldTouched: () => { },
});

// Form provider component
function Form({
  children,
  onSubmit,
  initialValues = {},
}: Readonly<{
  children: React.ReactNode;
  onSubmit?: (values: Record<string, unknown>) => void;
  initialValues?: Record<string, unknown>;
}>) {
  const [values, setValues] = React.useState<Record<string, unknown>>(initialValues);
  const [errors, setErrors] = React.useState<Record<string, string | undefined>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  const setFieldValue = React.useCallback((name: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = React.useCallback((name: string, error: string | undefined) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const setFieldTouched = React.useCallback((name: string, touched: boolean) => {
    setTouched((prev) => ({ ...prev, [name]: touched }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(values);
    }
  };

  const contextValue = React.useMemo(() => ({
    values,
    errors,
    touched,
    setFieldValue,
    setFieldError,
    setFieldTouched
  }), [values, errors, touched, setFieldValue, setFieldError, setFieldTouched]);

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
}

// Form field context to store field name
type FormFieldContextValue = {
  name: string;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

// Form field component to manage individual fields
function FormField({
  name,
  children,
  validate,
}: Readonly<{
  name: string;
  children: React.ReactNode;
  validate?: (value: unknown) => string | undefined;
}>) {
  const form = React.useContext(FormContext);
  const { setFieldError } = form;

  // Run validation when value changes
  React.useEffect(() => {
    if (validate) {
      const currentValue = form.values[name];
      const error = validate(currentValue);
      setFieldError(name, error);
    }
  }, [name, validate, setFieldError, form.values]);

  const contextValue = React.useMemo(() => ({ name }), [name]);

  return (
    <FormFieldContext.Provider value={contextValue}>
      {children}
    </FormFieldContext.Provider>
  );
}

// Hook to access field state
function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const formContext = React.useContext(FormContext);
  const id = React.useId();

  if (!fieldContext?.name) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { name } = fieldContext;
  const { values, errors, touched, setFieldValue, setFieldError, setFieldTouched } =
    formContext;

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    value: values[name] ?? "",
    error: errors[name],
    touched: touched[name] || false,
    setValue: (value: unknown) => setFieldValue(name, value),
    setError: (error: string | undefined) => setFieldError(name, error),
    setTouched: (touched: boolean) => setFieldTouched(name, touched),
  };
}

// Form item context to store unique ID
type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

// Form item component to group field elements
function FormItem({ className, ...props }: Readonly<React.ComponentProps<"div">>) {
  const id = React.useId();
  const contextValue = React.useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={contextValue}>
      <div
        data-slot="form-item"
        className={classNames("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

// Form label component
function FormLabel({ className, ...props }: Readonly<React.ComponentProps<typeof Label>>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={classNames("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

// Form control component (replaces Slot)
function FormControl({
  children,
  ...props
}: Readonly<React.ComponentProps<"div"> & { children: React.ReactNode }>) {
  const { error, formItemId, formDescriptionId, formMessageId, value, setValue, setTouched } =
    useFormField();

  // Handle input changes for controlled inputs
  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setTouched(true);
  }, [setValue, setTouched]);

  // Clone children to inject props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const typeName = child.type as string | undefined;
    if (typeName === 'input') {
      const el = child as React.ReactElement<React.InputHTMLAttributes<HTMLInputElement>>;
      const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => handleChange(e);
      const onBlur: React.FocusEventHandler<HTMLInputElement> = () => setTouched(true);
      return React.cloneElement(el, {
        id: formItemId,
        value: (value as string) ?? "",
        onChange,
        onBlur,
        "aria-describedby": error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId,
        "aria-invalid": !!error,
      });
    }
    if (typeName === 'textarea') {
      const el = child as React.ReactElement<React.TextareaHTMLAttributes<HTMLTextAreaElement>>;
      const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => handleChange(e);
      const onBlur: React.FocusEventHandler<HTMLTextAreaElement> = () => setTouched(true);
      return React.cloneElement(el, {
        id: formItemId,
        value: (value as string) ?? "",
        onChange,
        onBlur,
        "aria-describedby": error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId,
        "aria-invalid": !!error,
      });
    }
    // For other/custom components, return as-is to avoid prop mismatches
    return child;
  });

  return (
    <div data-slot="form-control" {...props}>
      {enhancedChildren}
    </div>
  );
}

// Form description component
function FormDescription({ className, ...props }: Readonly<React.ComponentProps<"p">>) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={classNames("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

// Form message component for errors
function FormMessage({ className, children, ...props }: Readonly<React.ComponentProps<"p">>) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={classNames("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};