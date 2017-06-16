import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'cars-app',
  moduleId: module.id,
  templateUrl: 'cars.component.html'
})

export class CarsComponent {
    public Title: string = "This is my first angular application";

    public Cars: Array<Car> = [
        { Name: "Porsche", Model: "911" },
        { Name: "Audi", Model: "A5" },
        { Name: "BMW", Model: "420d" },
    ]

    CarsList: Array<Car>;
    newCar: Car = new Car();


    constructor()
    {
        this.resetCar();
        this.CarsList = new Array<Car>();
        this.Cars.forEach((car) => { // foreach statement  
            this.CarsList.push(car);
        }) 
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
            this.CarsList.push(carAdded);
            this.assignCars();

            // Reset new car:
            car.Name = "";
            car.Model = "";
        }
    }

    deleteCar(i: number)
    {
        if (confirm("Delete?") != null)
        {
            this.CarsList.splice(i, 1);
            this.assignCars();
        }            
    }


    assignCars()
    {
        this.Cars = new Array<Car>();
        if (this.CarsList.length > 0)
        {            
            this.CarsList.forEach((car) => { // foreach statement  
                this.Cars.push(car);
            }) 
        }
    }

    getCars(): Array<Car>
    {
        return this.CarsList;
    }

    getCarsCount(): number
    {
        return this.CarsList.length;
    }

    getClassMap(): Object
    {
        let cars = this.CarsList
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

    searchCar(searchText: string)
    {
        var selectedCars: Array<Car> = new Array<Car>();

        this.Cars.forEach((car) => { // foreach statement  
            if (this.composeCarTitle(car).startsWith(searchText))
            {
                selectedCars.push(car);
            }
        }) 

        this.CarsList = selectedCars;      
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
