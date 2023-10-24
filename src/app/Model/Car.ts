export enum CarColor {
  BRANCO = 'BRANCO',
  PRETO = 'PRETO',
  PRATA = 'PRATA',
  CINZA = 'CINZA',
  AZUL = 'AZUL',
  VERMELHO = 'VERMELHO',
  AMARELO = 'AMARELO',
  VERDE = 'VERDE',
  LARANJA = 'LARANJA',
  MARROM = 'MARROM'
}

export enum FuelType {
  GASOLINA = 'GASOLINA',
  ETANOL = 'ETANOL',
  FLEX = 'FLEX'
}

export enum TransmissionType {
  AUTOMATICO = 'AUTOMATICO',
  MANUAL = 'MANUAL',
}


export interface Car {
  id?: string;
  carBrand?: string;
  name?: string;
  description?: string;
  carYear?: string;
  price?: string;
  isSold?: boolean;
  isDeleted?: boolean;
  picture?: string;
  fuel?: string;
  transmissionType?: string;
  carColor?: string;
  km?: string;
  pictures?: CarPicture[];
  optionals?: CarOptionals[];
}

export interface CarPicture {
  id: string;
  imgUrl: string;
}

export interface CarOptionals {
  id?: string;
  electricWindow: boolean;
  eletricLocks: boolean;
  airConditioning: boolean;
  hidraulicSteering: boolean;
  airbags: boolean;
  multmedia: boolean;
  alarm: boolean;
}