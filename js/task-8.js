const inputRef = document.querySelector('.js-input');
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.getElementById('boxes');

const createBoxes = amount => {

    let boxWidth = 30;
    let boxHeight = 30;

    for (let i = 0; i < amount; i += 1) {
        const boxRef = document.createElement('div');
        boxRef.style.width = `${boxWidth}px`;
        boxRef.style.height = `${boxHeight}px`;
        boxesRef.appendChild(boxRef);
        boxWidth += 10;
        boxHeight += 10;

        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)

        boxRef.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
};

const destroyBoxes = () => {
    let inputRefValue = inputRef.value;

    while (inputRefValue > 0) {
        const boxesChildRef = document.querySelector('#boxes div');
        if (boxesChildRef) {
            boxesRef.removeChild(boxesChildRef);
        }
        inputRefValue -= 1;
    }
}

btnRenderRef.addEventListener('click', e => {
    const renderValue = inputRef.value;
    createBoxes(renderValue);
});

btnDestroyRef.addEventListener('click', e => {
    destroyBoxes();
    inputRef.value = '';
})