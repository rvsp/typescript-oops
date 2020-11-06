import { Manufacturer } from "./manufacturer";


let manufacturer = new Manufacturer(
    {
        productValue: 'tiger',
        costValue: 52,
        quantityValue: 5,
        colorValue: 'RED',
        warrantyValue: '6Yr'
    },
    {
        manufacturerName: 'P and G',
        location: 'Chennai',
        producedCount: 1789
    });
manufacturer.getDetails({ productValue: 'tiger', costValue: 52, quantityValue: 5 });;
console.log(manufacturer.getAllManufacturerData());
