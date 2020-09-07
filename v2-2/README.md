## Requirements


## Commands

```
rustup target add wasm32-unknown-unknown                          # add target to Rust toolchain
rustc add.rs --target=wasm32-unknown-unknown --crate-type=cdylib  # compile to .wasm
python -m http.server                                             # start a web server
```

For `cargo` builds, (1) add `crate-type = ["cdylib"]` to the `[lib]` section of
`Cargo.toml`, and (2) run `cargo build --target wasm32-unknown-unknown`.
