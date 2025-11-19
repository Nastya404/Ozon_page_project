import { checkboxFilter, priceFilter } from "./filters.js";
import getData from "./getData.js";
import renderGoods from "./renderGoods.js";

const priceRange = () => {
    const floorPrice = document.getElementById('min');
    const ceilPrice = document.getElementById('max');
    const checkBoxInput = document.getElementById('discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');

    let allGoods = [];
    getData().then(data => allGoods = data);

    const applyFilters = () => {
        const minVal = floorPrice.value;
        const maxVal = ceilPrice.value;
        const isChecked = checkBoxInput.checked;

        (checkBoxInput.checked) ? checkboxSpan.classList.add('checked') : checkboxSpan.classList.remove('checked');

        const filteredByCheckbox = checkboxFilter(allGoods, isChecked);
        const finalGoods = priceFilter(filteredByCheckbox, minVal, maxVal);

        renderGoods(finalGoods); 
       };

        checkBoxInput.addEventListener('change', applyFilters);   
        floorPrice.addEventListener('input', applyFilters);
        ceilPrice.addEventListener('input', applyFilters); 
};


export default priceRange;