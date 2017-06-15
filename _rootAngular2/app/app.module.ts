import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { MyFormComponent } from './myForm.component';
import { CarsComponent } from './myApp/cars.component';

@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [AppComponent, MyFormComponent, CarsComponent ],
    bootstrap: [AppComponent, MyFormComponent, CarsComponent ]
})
export class AppModule { }
