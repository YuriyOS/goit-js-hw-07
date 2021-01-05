let counterValue = 0;

const increment = value => {
    value += 1;
    return value;
}

const decrement = value => {
    value -= 1;
    return value;
}

const counterRef = document.getElementById('value');

const btnRefIncrement = document.querySelector('[data-action="increment"]');
btnRefIncrement.addEventListener('click', () => {
    counterValue = increment(counterValue);
    counterRef.textContent = counterValue;
});

const btnRefDecrement = document.querySelector('[data-action="decrement"]');

btnRefDecrement.addEventListener('click', () => {
    counterValue = decrement(counterValue);
    counterRef.textContent = counterValue;
})


