const inputRef = document.querySelector('#name-input');

inputRef.addEventListener('input', (e) => {
    const outputRef = document.getElementById('name-output');

    outputRef.textContent = (e.target.value === '') ? 'незнакомец' : e.target.value;

});

