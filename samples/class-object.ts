type fuelType = 'petrol' | 'diesel' | 'gas';

interface CarConfiguration {
    color: string;
    noOfDoor: number;
    brand: string;
}

class Car {

    //properties
    color: string;
    noOfDoor: number;
    brand: string;
    model: string;
    features: string;
    typeOfFuel: fuelType;
    seatingType: string;
    navigation: string;

    // constructor(carData: { carColor: string, door: number, brand: string; }) {
    //     this.color = carData.carColor;
    //     this.noOfDoor = carData.door;
    //     this.brand = carData.brand;
    // }
    constructor(carData: CarConfiguration) {
        this.color = carData.color;
        this.noOfDoor = carData.noOfDoor;
        this.brand = carData.brand;
    }

    getData(clr: string, door: number, brandType: string ='Benz', fuel?: string) {

    }

}

let car = new Car({
    "color": 'white',
    "noOfDoor": 2,
    "brand": "BMW"
});

car.getData('red', 4, 'alto', 'gas');

car.getData('red', 4, 'alto');

console.log(car.color);
