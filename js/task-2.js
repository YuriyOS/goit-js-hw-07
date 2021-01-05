const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

createIngredient = ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;
    return ingredientRef;
}

const ingredientsList = ingredients.map(ingredient =>
    createIngredient(ingredient)
)

document.querySelector('.js-ingredients').append(...ingredientsList);

console.log(ingredientsList);