const colors = ['Red', 'Blue', 'Orange', 'Pink'];

console.log(colors.sort()); 

const products = [
    { name: 'Pant', price: 300},
    { name: 'Hat', price: 100},
    { name: 'Shoes', price: 200 }
]

products.sort((firstProduct, secondProduct) => {
    if(firstProduct.name < secondProduct.name)
        return -1;
     else
        return 1;
});

products.sort((firstProduct, secondProduct) => {
    if(firstProduct.price < secondProduct.price)
        return -1;
    else
        return 1;
});