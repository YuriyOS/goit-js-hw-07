const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', e => {
    const fontValue = e.target.value;
    spanRef.style.fontSize = `${fontValue}px`;

})