type fuelType = 'petrol' | 'diesel' | 'gas';

interface CarConfiguration {
    color: string;
    noOfDoor: number;
    brand: string;
    engineCC: number;
}

class Engine {
    engineNo: number;
    piston: number;
    boreDiameter: number;
    engineCC: number;

    constructor(cc: number) {
        this.engineCC = cc;
    }

}

class Car extends Engine {

    //properties
    color: string;
    noOfDoor: number;
    brand: string;
    model: string;
    features: string;
    typeOfFuel: fuelType;
    seatingType: string;
    navigation: string;

    constructor(carData: CarConfiguration) {
        super(carData.engineCC);

        this.color = carData.color;
        this.noOfDoor = carData.noOfDoor;
        this.brand = carData.brand;
    }

    getData(clr: string, door: number, brandType: string, fuel?: string) {
        console.log(clr, door, brandType, fuel);
    }

}

let car = new Car({
    "color": 'white',
    "noOfDoor": 2,
    "brand": "BMW",
    "engineCC": 1000
});

car.getData('red', 4, 'alto', 'gas');

car.getData('red', 4, 'alto');

console.log(car.color);



// let val = <HTMLElement>document.getElementById('div');
// console.log(val.innerHTML);


// let txt = (<HTMLInputElement>document.getElementById('txt')).value;
// console.log(txt);
