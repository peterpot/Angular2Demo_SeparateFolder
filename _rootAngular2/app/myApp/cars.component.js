"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var car_model_1 = require("./car.model");
var CarsComponent = (function () {
    function CarsComponent() {
        var _this = this;
        this.Title = "This is my first angular application";
        this.Cars = [
            { Name: "Porsche", Model: "911" },
            { Name: "Audi", Model: "A5" },
            { Name: "BMW", Model: "420d" },
        ];
        this.newCar = new car_model_1.Car();
        this.resetCar();
        this.CarsList = new Array();
        this.Cars.forEach(function (car) {
            _this.CarsList.push(car);
        });
    }
    CarsComponent.prototype.resetCar = function () {
        this.newCar.Name = "";
        this.newCar.Model = "";
    };
    CarsComponent.prototype.addCar = function (car) {
        // var carAdded: any = Object.assign({}, car); 
        var carAdded = new car_model_1.Car();
        Object.assign(carAdded, car);
        if (carAdded.Name != "") {
            alert(carAdded.Name);
            this.CarsList.push(carAdded);
            this.assignCars();
            // Reset new car:
            car.Name = "";
            car.Model = "";
        }
    };
    CarsComponent.prototype.deleteCar = function (i) {
        if (confirm("Delete?") != null) {
            this.CarsList.splice(i, 1);
            this.assignCars();
        }
    };
    CarsComponent.prototype.assignCars = function () {
        var _this = this;
        this.Cars = new Array();
        if (this.CarsList.length > 0) {
            this.CarsList.forEach(function (car) {
                _this.Cars.push(car);
            });
        }
    };
    CarsComponent.prototype.getCars = function () {
        return this.CarsList;
    };
    CarsComponent.prototype.getCarsCount = function () {
        return this.CarsList.length;
    };
    CarsComponent.prototype.getClassMap = function () {
        var cars = this.CarsList;
        return {
            " label ": true,
            " label-warning ": cars.length <= 3,
            " label-primary ": cars.length > 3
        };
    };
    CarsComponent.prototype.selectCar = function (car) {
        this.selectedCarName = this.composeCarTitle(car);
    };
    CarsComponent.prototype.searchCar = function (searchText) {
        var _this = this;
        var selectedCars = new Array();
        this.Cars.forEach(function (car) {
            if (_this.composeCarTitle(car).startsWith(searchText)) {
                selectedCars.push(car);
            }
        });
        this.CarsList = selectedCars;
    };
    CarsComponent.prototype.getIsSelected = function (car) {
        return (this.selectedCarName == this.composeCarTitle(car));
    };
    CarsComponent.prototype.composeCarTitle = function (car) {
        return car.Name + ' ' + car.Model;
    };
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: 'cars-app',
        moduleId: module.id,
        templateUrl: 'cars.component.html'
    }),
    __metadata("design:paramtypes", [])
], CarsComponent);
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=cars.component.js.map