async function add(a, b) {
    const response = await fetch('./add.wasm');
    const bytes = WebAssembly.instantiate(response.arrayBuffer()); // or await WebAssembly.instantiate(bytes) if it's async
    const instance = bytes.instance;
    document.getElementById("container").textContent = instance.exports.add(a, b)
}

add(1, 2);