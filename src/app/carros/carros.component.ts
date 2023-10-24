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


  constructor(private carService: CarService, private router: ActivatedRoute) {
  }

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

  getOpts(id: string): void {
    this.opts$ = this.carService.getOpts(id).pipe(
      map(opts => {
        this.optionals = []; // Limpar a lista antes de adicionar os novos itens

        if (opts) {
          this.addOptional(opts.electricWindow, 'Vidro elétrico');
          this.addOptional(opts.eletricLocks, 'Trava elétrica');
          this.addOptional(opts.airConditioning, 'Ar-Condicionado');
          this.addOptional(opts.hidraulicSteering, 'Direção hidráulica');
          this.addOptional(opts.airbags, 'Airbags');
          this.addOptional(opts.multmedia, 'Multimidia');
          this.addOptional(opts.alarm, 'Alarme');
        }

        return opts;
      })
    );
  }

  private addOptional(condition: boolean, label: string): void {
    if (condition) {
      this.optionals.push(label);
    }
  }

}
