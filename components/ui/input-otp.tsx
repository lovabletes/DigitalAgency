"use client";

import * as React from "react";
import { MinusIcon } from "@/components/icons/icons";
import { classNames } from "@/utils/class-names";

// Create a context to share OTP state across components
const OTPContext = React.createContext<{
  value: string[];
  activeIndex: number;
  onChange: (value: string[]) => void;
  onFocus: (index: number) => void;
}>({
  value: [],
  activeIndex: -1,
  onChange: () => { },
  onFocus: () => { },
});

// Main OTP input component
function InputOTP({
  containerClassName,
  maxLength = 6, // Default OTP length
  onChange: onChangeProp,
  value: valueProp = "",
  ...props
}: React.ComponentProps<"div"> & {
  containerClassName?: string;
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
}) {
  const [value, setValue] = React.useState<string[]>(
    valueProp.split("").slice(0, maxLength) || Array(maxLength).fill("")
  );
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  // Update internal state when controlled value changes
  React.useEffect(() => {
    setValue(valueProp.split("").slice(0, maxLength) || Array(maxLength).fill(""));
  }, [valueProp, maxLength]);

  // Handle value changes
  const handleChange = (newValue: string[]) => {
    setValue(newValue);
    if (onChangeProp) {
      onChangeProp(newValue.join(""));
    }
  };

  // Handle focus on a specific slot
  const handleFocus = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <OTPContext.Provider value={{ value, activeIndex, onChange: handleChange, onFocus: handleFocus }}>
      <div
        data-slot="input-otp"
        className={classNames(
          "flex items-center gap-2 has-disabled:opacity-50",
          containerClassName
        )}
        {...props}
      >
        {props.children}
      </div>
    </OTPContext.Provider>
  );
}

// OTP Group component to wrap slots
function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={classNames("flex items-center", className)}
      {...props}
    />
  );
}

// OTP Slot component for individual input fields
function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const { value, activeIndex, onChange, onFocus } = React.useContext(OTPContext);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Handle input changes
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChar = e.target.value.slice(-1); // Get the last character
    if (newChar && !/^[a-zA-Z0-9]$/.test(newChar)) return; // Allow only alphanumeric

    const newValue = [...value];
    newValue[index] = newChar;
    onChange(newValue);

    // Move focus to next slot
    if (newChar && index < value.length - 1) {
      const nextInput = document.querySelector(
        `[data-slot="input-otp-slot"][data-index="${index + 1}"] input`
      ) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  // Handle keydown events (backspace, delete, navigation)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      const newValue = [...value];
      newValue[index] = "";
      onChange(newValue);

      if (index > 0) {
        const prevInput = document.querySelector(
          `[data-slot="input-otp-slot"][data-index="${index - 1}"] input`
        ) as HTMLInputElement;
        prevInput?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      const prevInput = document.querySelector(
        `[data-slot="input-otp-slot"][data-index="${index - 1}"] input`
      ) as HTMLInputElement;
      prevInput?.focus();
    } else if (e.key === "ArrowRight" && index < value.length - 1) {
      const nextInput = document.querySelector(
        `[data-slot="input-otp-slot"][data-index="${index + 1}"] input`
      ) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, value.length - index);
    const newValue = [...value];
    for (let i = 0; i < pastedData.length; i++) {
      if (/^[a-zA-Z0-9]$/.test(pastedData[i])) {
        newValue[index + i] = pastedData[i];
      }
    }
    onChange(newValue);

    // Move focus to the last filled slot
    const lastFilledIndex = Math.min(index + pastedData.length, value.length - 1);
    const nextInput = document.querySelector(
      `[data-slot="input-otp-slot"][data-index="${lastFilledIndex}"] input`
    ) as HTMLInputElement;
    nextInput?.focus();
  };

  // Auto-focus when active
  React.useEffect(() => {
    if (activeIndex === index && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeIndex, index]);

  return (
    <div
      data-slot="input-otp-slot"
      data-index={index}
      data-active={activeIndex === index}
      className={classNames(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      <input
        ref={inputRef}
        type="text"
        maxLength={1}
        value={value[index] || ""}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onFocus={() => onFocus(index)}
        className="absolute inset-0 bg-transparent text-center text-sm outline-none"
        aria-invalid={!!value[index] && !/^[a-zA-Z0-9]$/.test(value[index])}
      />
      {value[index] || (activeIndex === index && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      ))}
    </div>
  );
}

// OTP Separator component
function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };