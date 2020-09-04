## Requirements

- [wasmtime](https://github.com/bytecodealliance/wasmtime)

## Commands

```
cd app                                                           # change directory to /app
wasm-pack build --target web --out-name wasm --out-dir ./static  # build the package

rustup -v install nightly                                        # install nightly Rust
cargo +nightly install miniserve                                 # install miniserve
miniserve ./static --index index.html                            # start a web server
```
