import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car, CarPicture } from '../Model/Car';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pesquisa: string = '';
  cars$ = new Observable<Car[]>();
  carSearch$ = new Observable<Car[]>();
  carPicture$ = new Observable<CarPicture[]>();
  constructor(private carService: CarService) {
  }
  
  
  ngOnInit(): void {
    this.getAllCars();
    console.log(this.cars$);
  }

  getAllCars() {
    this.cars$ = this.carService.getCars();
  }
  
  getCarWith(carName:string) {
    this.carSearch$ = this.carService.getCarWith(carName);
  }

}
