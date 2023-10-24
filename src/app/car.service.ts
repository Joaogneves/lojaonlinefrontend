import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Car, CarOptionals, CarPicture } from './Model/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = environment.api;

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get<Car[]>(this.url + '/cars');
  }

  getCar(id: string) {
    return this.http.get<Car>(this.url + '/cars/' + id);
  }

  getImagesCar(id: string) {
    return this.http.get<CarPicture[]>(this.url + '/cars/images/' + id)
  }

  getCarWith(carName: string) {
    return this.http.get<Car[]>(this.url + '/cars/search?carName=' + carName);
  }

  getOpts(id:string) {
    return this.http.get<CarOptionals>(this.url + '/cars/optionals/' + id)
  }

}
