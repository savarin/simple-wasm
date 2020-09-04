## Requirements

(wasmtime)[https://github.com/bytecodealliance/wasmtime]

## Commands

```
rustup target add wasm32-wasi      # add target to Rust toolchain
rustc add.rs --target wasm32-wasi  # compiles to .wasm
wasmtime add.wasm                  # runs with wasmtime
```
