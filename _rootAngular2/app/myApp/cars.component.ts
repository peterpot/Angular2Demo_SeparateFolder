import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'cars-app',
  moduleId: module.id,
  templateUrl: 'cars.component.html'
})

export class CarsComponent {
    public Title: string = "This is my first angular application";

    public Cars: Car[] = [
        { Name: "Porsche", Model: "911" },
        { Name: "Audi", Model: "A5" },
        { Name: "BMW", Model: "420d" },
    ]

    public newCar: Car = new Car;

    constructor()
    {
        this.resetCar();
    }

    resetCar()
    {
        this.newCar.Name = "";
        this.newCar.Model = "";
    }

    addCar(car: Car)
    {
        // var carAdded: any = Object.assign({}, car); 
        var carAdded: Car = new Car();
        Object.assign(carAdded, car);
        if (carAdded.Name != "")
        {
            alert(carAdded.Name);
            this.Cars.push(carAdded);

            car.Name = "";
            car.Model = "";
        }
    }

    deleteCar(i: number)
    {
        if (confirm("Delete?") != null)
            this.Cars.splice(i, 1);
    }

    getCars(): Car[]
    {
        return this.Cars;
    }

    getCarsCount(): number
    {
        return this.Cars.length;
    }

    getClassMap(): Object
    {
        let cars = this.Cars
        return {
            " label ": true,
            " label-warning ": cars.length <= 3,
            " label-primary ": cars.length > 3
        };
    }

    selectedCarName: string;

    selectCar(car: Car)
    {
        this.selectedCarName = this.composeCarTitle(car);
    }

    getIsSelected(car: Car): boolean
    {
        return (this.selectedCarName == this.composeCarTitle(car));
    }

    composeCarTitle(car: Car): string
    {
        return car.Name + ' ' + car.Model;
    }
}
