import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ApiAddress } from './Model/Address';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private url = environment.cepApi
  private end = environment.cepApiEnd
  private apiUrl = environment.api
  constructor(private http: HttpClient) { }

  getCep(cep: string) {
    return this.http.get<ApiAddress>(`${this.url}${cep}${this.end}`);
  }

  saveCliente(data: any) {
    return this.http.post<any>(`${this.apiUrl}/clientes`, data);
  }
}
