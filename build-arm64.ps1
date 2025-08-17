# PowerShell script to build for ARM64 Linux using WSL
# Prerequisites: WSL2 with Ubuntu/Debian installed

Write-Host "Building carbon-home for ARM64 Linux..." -ForegroundColor Green

# Check if WSL is available
try {
    wsl --version | Out-Null
} catch {
    Write-Host "WSL not found. Please install WSL2 first." -ForegroundColor Red
    exit 1
}

# Copy files to WSL and run build
Write-Host "Starting cross-compilation in WSL..." -ForegroundColor Yellow
wsl bash build-arm64-wsl.sh

Write-Host "Build completed!" -ForegroundColor Green
Write-Host "ARM64 Linux executables are in: src-tauri/target/aarch64-unknown-linux-gnu/release/bundle/"
