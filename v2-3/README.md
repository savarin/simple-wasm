## Requirements


## Commands

```
rustup target add wasm32-unknown-unknown                          # add target to Rust toolchain
rustc add.rs --target=wasm32-unknown-unknown --crate-type=cdylib  # compile to .wasm
python -m http.server                                             # start a web server
```
