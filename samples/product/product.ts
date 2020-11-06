import { ProductConfig } from "./product-config";


type colors = "RED" | "GREEN" | "BLACK" | "WHITE";

export class Product {
    productName: string;
    quantity: number;
    color: colors;
    warranty: string;
    cost: number;

    constructor(productData: ProductConfig) {
        this.productName = productData.productValue;
        this.cost = productData.costValue;
        this.quantity = productData.quantityValue;
        this.color = productData.colorValue;
        this.warranty = productData.warrantyValue;
    }

    getProductName(): string {
        return this.productName;
    }

    getAllData() {
        console.log('all values of your product');
        console.log(this.productName, this.quantity, this.color, this.warranty, this.cost);
    }

    getDetails(productData: ProductConfig) {
        console.log(productData);
    }
}