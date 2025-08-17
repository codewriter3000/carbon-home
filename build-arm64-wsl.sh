#!/bin/bash
# Cross-compilation script for ARM64 Linux using WSL

echo "Installing cross-compilation dependencies..."
sudo apt-get update
sudo apt-get install -y curl gcc-aarch64-linux-gnu pkg-config libssl-dev build-essential

# Install Rust if not already installed
if ! command -v cargo &> /dev/null; then
    echo "Installing Rust..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source ~/.cargo/env
    # Export PATH for current session
    export PATH="$HOME/.cargo/bin:$PATH"
fi

# Add ARM64 target
rustup target add aarch64-unknown-linux-gnu

# Set up cross-compilation environment
export CC_aarch64_unknown_linux_gnu=aarch64-linux-gnu-gcc
export CXX_aarch64_unknown_linux_gnu=aarch64-linux-gnu-g++
export AR_aarch64_unknown_linux_gnu=aarch64-linux-gnu-ar
export CARGO_TARGET_AARCH64_UNKNOWN_LINUX_GNU_LINKER=aarch64-linux-gnu-gcc

# Install Node.js and Bun if not available
if ! command -v bun &> /dev/null; then
    echo "Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    source ~/.bashrc
    # Export PATH for current session
    export PATH="$HOME/.bun/bin:$PATH"
fi

echo "Building frontend..."
bun install
bun run build

echo "Building Tauri app for ARM64 Linux..."
cargo tauri build --target aarch64-unknown-linux-gnu

echo "Build completed! Check src-tauri/target/aarch64-unknown-linux-gnu/release/bundle/ for your ARM64 Linux executables."
