# minimal

Minimal examples for compiling and running WebAssembly.

## TL;DR

- v1 - .wat to .wasm
- v2 - Rust to .wasm using rustc
- v3 - Rust to .wasm using cargo
- v4 - Rust/JavaScript interop via wasm
- v5 - full stack Rust via wasm

## Sources

Examples adapted from:

- [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
- [CS50](https://cs50.harvard.edu/web)
- [wasmtime](https://github.com/bytecodealliance/wasmtime)
- [yew](https://github.com/yewstack/yew)
- [fdb](https://github.com/fdb/webassembly-with-rust)

Recommended background material [here](https://payments.posthaven.com/rc-w4d4-the-only-intro-youll-need),
credits to [Lin Clark](https://github.com/linclark).

## FAQ

**What is WebAssembly?**

WebAssembly is a way of taking code written in programming languages other than
JavaScript and running that code in the browser.

**What is a .wasm file?**

A .wasm file is a WebAssembly binary. In the examples, we create a .wasm file
either by converting from a .wat file (v1-1 to v1-3), or by compiling from Rust
(v2-1 to v3-3).

**How do you run a .wasm file?**

A .wasm file can be run either in the browser by loading in JavaScript (v\*-2
and v\*-3), or in wasmtime, an independent runtime (v\*-1).

**What is a .wat file?**

A .wat file is a human-readable form of a WebAssembly binary.

**Why Rust?**

Rust provides low-level control and has a small runtime (leading to small
binaries), as well as excellent tooling for compiling down to WebAssembly.
