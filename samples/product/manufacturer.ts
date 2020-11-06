import { Product } from "./product";
import { ProductConfig } from "./product-config";
import { ManufacturerConfig } from "./manufacturer-config";



export class Manufacturer extends Product {
    manufacturerName: string;
    location: string;
    producedCount: number;
    constructor(productInfo: ProductConfig, manufacturerInfo: ManufacturerConfig) {
        super(productInfo);
        this.manufacturerName = manufacturerInfo.manufacturerName;
        this.location = manufacturerInfo.location;
        this.producedCount = manufacturerInfo.producedCount;
    }

    getAllManufacturerData(): string {
        return `Manufacturer name: ${this.manufacturerName}, 
        Product produced: ${this.producedCount} and 
        Product Name: ${this.productName} 
        Product Color: ${this.color} `;
    }
}