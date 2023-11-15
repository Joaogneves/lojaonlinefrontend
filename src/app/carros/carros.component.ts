import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Observable, map } from 'rxjs';
import { Car, CarOptionals, CarPicture } from '../Model/Car';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  car$ = new Observable<Car>();
  carPicture$ = new Observable<CarPicture[]>();
  opts$ = new Observable<CarOptionals>();

  electricWindow: string = '';
  eletricLocks: string = '';
  airConditioning: string = '';
  hidraulicSteering: string = '';
  airbags: string = '';
  multmedia: string = '';
  alarm: string = '';

  optionals: string[] = [];

  constructor(private carService: CarService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      params => {
        let id = params.get('id');
        this.getCar(id!);
        this.getCarImages(id!);
        this.getOpts(id!)
      })
  }

  getCar(id: string) {
    this.car$ = this.carService.getCar(id);
  }

  getCarImages(id: string) {
    this.carPicture$ = this.carService.getImagesCar(id);
    console.log(this.carPicture$)
  }

  getOpts(id: string) {
    this.carService.getOpts(id).subscribe(
      res => {
        this.addOptional(res.electricWindow, 'Vidro elétrico');
        this.addOptional(res.eletricLocks, 'Trava elétrica');
        this.addOptional(res.airConditioning, 'Ar-Condicionado');
        this.addOptional(res.hidraulicSteering, 'Direção hidráulica');
        this.addOptional(res.airbags, 'Airbags');
        this.addOptional(res.multmedia, 'Multimidia');
        this.addOptional(res.alarm, 'Alarme');
        console.log(this.optionals)
        }
    )
  }

  private addOptional(condition: boolean, label: string){
    if (condition) {
      this.optionals.push(label);
    }
  }

}
