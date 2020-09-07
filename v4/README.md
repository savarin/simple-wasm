## Requirements

- [wasm-pack](https://github.com/rustwasm/wasm-pack)

## Commands

```
cd hello         # change directory to /hello
wasm-pack build  # build the package
cd pkg           # change director to /hello/pkg
npm link         # make package available

cd ../../site    # change directory to /site
npm link hello   # link to package
npm install      # install dependencies
npm run serve    # start a web server
```

Source: [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
