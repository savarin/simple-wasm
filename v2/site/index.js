const js = import("./node_modules/hello/hello.js");
js.then(js => {
  js.greet("WebAssembly");
});
