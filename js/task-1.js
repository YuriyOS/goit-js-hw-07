document.addEventListener("DOMContentLoaded", () => {

    const categories = document.querySelectorAll('.item')
    const categoryLength = categories.length;

    categories.forEach(el => {
        const categoryName = el.querySelector('h2').textContent;

        const subCategoryLength = el.querySelectorAll('li').length;
        console.log(`Категория: ${categoryName}`);
        console.log(`Количество элементов: ${subCategoryLength}`)
    })

    console.log(`В списке ${categoryLength} категории.`)
});
