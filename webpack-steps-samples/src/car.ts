import { Engine } from "./engine";
import { CarConfiguration } from "./car-config";

type fuelType = 'petrol' | 'diesel' | 'gas';

export class Car extends Engine {
    color: string;
    noOfDoor: string;
    brand: string;
    airCondition: string;

    constructor(carData: CarConfiguration) {
        super(carData.carEngineNo, carData.carEngineCC);
        this.color = carData.carColor;
        this.brand = carData.carBrand;
        this.noOfDoor = carData.carDoors;
        this.airCondition = carData.carAirConditioned;
    }

    getData() {
        console.log(`your car brand ${this.brand}`);
        console.log(`your car color ${this.color}`);
        console.log(`your car has total number doors is ${this.noOfDoor}`);
        console.log(`your car engine number ${this.engineNo}`);
        console.log(`your car engine CC ${this.engineCC}`);
    }

}
