## Requirements

- [wasmtime](https://github.com/bytecodealliance/wasmtime)

## Commands

```
rustup target add wasm32-wasi      # add target to Rust toolchain
rustc add.rs --target wasm32-wasi  # compile to .wasm
wasmtime add.wasm                  # run with wasmtime
```
