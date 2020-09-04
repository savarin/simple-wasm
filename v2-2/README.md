## Requirements


## Commands

```
rustup target add wasm32-unknown-unknown                          # add target to Rust toolchain
rustc add.rs --target=wasm32-unknown-unknown --crate-type=cdylib  # compiles to .wasm
python -m http.server                                             # runs with wasmtime
```
