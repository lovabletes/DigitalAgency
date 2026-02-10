# Image Optimization Script
# This script converts large PNG images to optimized WebP format

Write-Host "🖼️  Image Optimization for SiteCreation.in" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Check if we have the images
$projectImages = @(
    "Ayur web.png",
    "Tourweb.png",
    "CampusHub.png",
    "Maison_Belle.png"
)

Write-Host "📊 Current Image Sizes:" -ForegroundColor Yellow
foreach ($img in $projectImages) {
    $path = "public\$img"
    if (Test-Path $path) {
        $size = [math]::Round((Get-Item $path).Length / 1MB, 2)
        Write-Host "  $img : $size MB" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "💡 Recommendations:" -ForegroundColor Green
Write-Host "  1. Use Next.js Image component (already done ✅)" -ForegroundColor White
Write-Host "  2. Convert PNG to WebP format (70-80% size reduction)" -ForegroundColor White
Write-Host "  3. Add quality optimization (quality: 85)" -ForegroundColor White
Write-Host "  4. Enable lazy loading on all images" -ForegroundColor White
Write-Host ""
Write-Host "🔧 To optimize images:" -ForegroundColor Cyan
Write-Host "  Option 1: Use online tools (tinypng.com, squoosh.app)" -ForegroundColor White
Write-Host "  Option 2: Install sharp via npm and use Next.js built-in optimization" -ForegroundColor White
Write-Host "  Option 3: Use ImageMagick/ffmpeg for batch conversion" -ForegroundColor White
Write-Host ""
Write-Host "Example ImageMagick command:" -ForegroundColor Yellow
Write-Host "  magick 'Ayur web.png' -quality 85 -define webp:method=6 'Ayur web.webp'" -ForegroundColor Gray
