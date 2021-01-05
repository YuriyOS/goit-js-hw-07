const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', (e) => {
    const inputLength = e.target.value.length;
    const dataLength = e.target.getAttribute('data-length');

    inputRef.className = inputLength === Number(dataLength) ? 'valid' : 'invalid';
});