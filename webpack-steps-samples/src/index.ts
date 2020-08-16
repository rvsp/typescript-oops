import { Car } from "./car";
import { doorsArray } from "./html-data";

(<HTMLElement>document.getElementById('btn')).addEventListener('click', () => {
    let carBrand = (<HTMLFormElement>document.getElementById('name')).value;
    let carDoors = (<HTMLFormElement>document.getElementById('doors')).value;
    let carEngineNo = (<HTMLFormElement>document.getElementById('engine-no')).value;
    let carEngineCC = (<HTMLFormElement>document.getElementById('engine-cc')).value;
    let carAirConditioned = (<HTMLFormElement>document.getElementById('air')).value;
    let carColor = (<HTMLFormElement>document.getElementById('color')).value;

    let car = new Car({ carBrand, carColor, carDoors, carEngineCC, carEngineNo, carAirConditioned });
    car.getData();

    (<HTMLFormElement>document.getElementById('form')).reset();
});

let dr = (<HTMLSelectElement>document.getElementById('doors'));
for (let index = 0; index < doorsArray.length; index++) {
    let option = document.createElement('option');
    option.value = doorsArray[index];
    option.innerText = doorsArray[index];
    dr.appendChild(option);
}


// enum drArray {
//     TWO,
//     THREE,
//     FOUR,
//     FIVE,
// }
// console.log(drArray[0]);
// console.log(drArray['TWO']);