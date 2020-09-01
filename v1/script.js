async function append(document) {
    let items = document.querySelector('#task').value
        .split(",")
        .map(x => parseInt(x.trim(), 10))

    // Create new item for list
    const li = document.createElement('li');

    fetch('./add.wasm')
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes))
        .then(results => results.instance)
        .then(instance => 
            items.reduce((total, x) => instance.exports.add(total, x))
        )
        .then(result => {
            // Add new item to task list
            li.innerHTML = result.toString();
            document.querySelector('#tasks').append(li)
        })
        .catch(console.error);
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

        // Append result as list item
        append(document);

        // Clear input field and disable button again
        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        // Stop form from submitting
        return false;
    };
});
