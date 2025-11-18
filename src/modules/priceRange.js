import { priceFilter } from "./filters.js";
import getData from "./getData.js";
import renderGoods from "./renderGoods.js";

const priceRange = () => {
    const floorPrice = document.getElementById('min');
    const ceilPrice = document.getElementById('max');
    let allGoods = [];
    getData().then(data => allGoods = data);

    
    const handleInput = () => {
    const minVal = floorPrice.value;
    const maxVal = ceilPrice.value;
    const filteredArray = priceFilter(allGoods, minVal, maxVal);
    renderGoods(filteredArray);
    };

    floorPrice.addEventListener('input', handleInput);
    ceilPrice.addEventListener('input', handleInput);
};


export default priceRange;