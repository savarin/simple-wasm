## Requirements

- [wabt](https://github.com/WebAssembly/wabt)
- [wasmtime](https://github.com/bytecodealliance/wasmtime)

Include to ./bash_profile: `export PATH="~/<path>/wabt/bin:$PATH"`.

## Commands

```
wat2wasm add.wat   # compile to .wasm
wasmtime add.wasm  # run with wasmtime
```
