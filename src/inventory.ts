import { Product } from "./products";

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [ {product: "motor", price: 10.00, quantity: 10}, {product: "sensor", price: 12.50, quantity: 2}, {product: "LED", price: 1.00, quantity: 20}];

function calcInventoryValue(inventory:InventoryItem[]) {
    let total = 0;
    
}

console.log(calcInventoryValue(inventory));
export {calcInventoryValue, InventoryItem};