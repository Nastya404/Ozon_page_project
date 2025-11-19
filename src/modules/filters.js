export const searchFilter = (goods, value) => {
    return goods.filter(goodsItem =>{
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
};

export const categoryFilter = (goods, value) => {
    return goods.filter(goodsItem =>{
        return goodsItem.category === value;
    });
};

export const priceFilter = (goods, floorPrice, ceilPrice) => {
    return goods.filter(goodsItem =>{
        if(floorPrice === '' && ceilPrice === '') return goodsItem;
        else{
        const min = (floorPrice === '' ? 0 : Number(floorPrice));
        const max = (ceilPrice === '' ? Infinity : Number(ceilPrice));
        return goodsItem.price >= min && goodsItem.price <= max;
        }  
    });
};

export const checkboxFilter = (goods, value) => {
    if(value){
        return goods.filter(goodsItem =>{
            return goodsItem.sale === true;
        });
    }
    else return goods;
};