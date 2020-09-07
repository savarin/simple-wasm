## Requirements


## Commands

```
cd add                                                         # change directory to /add
cargo build --target=wasm32-unknown-unknown                    # build package

cd ..                                                          # change directory
cp add/target/wasm32-wasm32-unknown-unknown/debug/add.wasm .   # copy add.wasm
python -m http.server                                          # start a webserver
```
