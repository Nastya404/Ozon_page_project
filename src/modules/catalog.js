import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { categoryFilter } from "./filters.js";

const catalog = () => {
    const catalogBtn = document.querySelector('.catalog-button > button');
    const catalogList = document.querySelector('.catalog');
    const catalogListItems = catalogList.querySelectorAll('li');

    let isOpen = false; 

    catalogBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        catalogList.style.display = (isOpen ? 'block' : 'none');
    });

    catalogListItems.forEach(element => {
        element.addEventListener('click', () => {
            const text = element.textContent;
            getData(text).then((data) => renderGoods(categoryFilter(data, text)));

        })
        
    })
}

export default catalog;