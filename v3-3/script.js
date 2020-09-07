
async function append(items) {
    const response = await fetch('./add.wasm');
    const buffer = await response.arrayBuffer()
    const bytes = await WebAssembly.instantiate(buffer);
    const instance = bytes.instance;

    // Reduce list of numbers to total
    result = items.reduce((total, x) => instance.exports.add(total, x))

    // Create new item for list
    const li = document.createElement('li');
    li.innerHTML = result.toString();

    // Add to task list
    document.querySelector('#tasks').append(li);
}


document.addEventListener('DOMContentLoaded', () => {

    // By default, submit button is disabled
    document.querySelector('#submit').disabled = true;

    // Enable button only if there is text in the input field
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length > 0)
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
    };

    document.querySelector('form').onsubmit = () => {

        // Parse numbers in input field and convert from strings to ints
        let items = document.querySelector('#task').value
            .split(",")
            .map(x => parseInt(x.trim(), 10))

        // Append sum of inputs as list item
        append(items);

        // Clear input field and disable button again
        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        // Stop form from submitting
        return false;
    };
});
