async function add(a, b) {
    const response = await fetch('./add.wasm');
    const buffer = await response.arrayBuffer()
    const bytes = await WebAssembly.instantiate(buffer);
    const instance = bytes.instance;

    document.getElementById("container").textContent = instance.exports.add(a, b);
}

add(1, 2);
