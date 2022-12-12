interface Product {
    name: string;
    price: number;
}

let products: Product[] = [{name: "tampons", price: 7}, {name: "eggs", price: 3}, {name: "strawberries", price: 5}];

function calcAverageProductPrice(products: Product[]) {
    let sum: number = 0;
    if (products.length > 0) {
        for(let average of products) {
            sum = average.price + sum;
        }
        return sum/ products.length;
    }
    else {
        return 0;
    }
}

console.log(calcAverageProductPrice(products));
export {calcAverageProductPrice, Product};