## Requirements

- [wasmtime](https://github.com/bytecodealliance/wasmtime)

## Commands

```
cd add                                      # change directory to /add
rustup target add wasm32-wasi               # add target to Rust toolchain
cargo build --target=wasm32-wasi            # build package

cd ..                                       # change directory
cp add/target/wasm32-wasi/debug/add.wasm .  # copy add.wasm 
wasmtime add.wasm                           # run with wasmtime
```
