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
        const min = (floorPrice === '' ? 0 : Number(floorPrice));
        const max = (ceilPrice === '' ? Infinity : Number(ceilPrice));
        return goodsItem.price >= min && goodsItem.price <= max;
    });
};