import postData from './postData.js';
import getData from './getData.js';



const second = () => {
    const cartBtn = document.getElementById('cart');

    cartBtn.addEventListener('click', () => {
        getData().then((data) => console.log(data));
    })
    
}

export default second;


