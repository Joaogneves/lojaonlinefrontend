import { Observable } from 'rxjs';
import { CadastroService } from './../cadastro.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../Model/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  estadoCivil: string[] = ["Solteiro", "Casado", "Divorciado", "Viuvo", "Outros"];
  sexo: string[] = ["Masculino", "Feminino"];
  state: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
  validCep: boolean = false;

  user: User = {
    cep: '',
    rua: undefined,
    cidade: undefined,
    bairro: undefined,
    estado: '--Selecione--',
    complemento: '',
    numero: undefined,
    fullname: undefined,
    rg: undefined,
    cpf: undefined,
    cnh: undefined,
    dataNascimento: undefined,
    celular: undefined,
    email: undefined,
    nomeMae: undefined,
    nomePai: undefined,
    estadoCivilSelecionado: '--Selecione--',
    sexoSelecionado: '--Selecione--',
    naturalidade: undefined,
  }

  @ViewChild('cepInput') inputElement!: ElementRef;


  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    //this.getCep();
  }

  getCep() {
    if (this.user.cep.length > 6) {
      this.user.cep = this.user.cep.replace(/[.-]/g, '');
      this.service.getCep(this.user.cep).subscribe(
        res => {
          try {
            if (res.logradouro != undefined) {
              this.user.rua = res.logradouro
              this.user.cidade = res.localidade
              this.user.bairro = res.bairro
              this.user.estado = res.uf
              this.validCep = false
            } else {
              this.user.rua = ''
              this.user.cidade = ''
              this.user.bairro = ''
              this.user.estado = ''
              this.validCep = true
              this.user.cep = ''
              this.inputElement.nativeElement.focus();
            }
          } catch {
            console.log("err")
          }
        }
      );
    }

  }
  submitForm(form: NgForm) {
    const userKeys = Object.keys(this.user);
    if (userKeys.every(key => this.user[key] !== undefined)) {
      form.value.rg = form.value.rg.replace(/[.-]/g, '');
      form.value.cpf = form.value.cpf.replace(/[.-]/g, '');
      form.value.tel = form.value.tel.replace(/[()]/g, '');
      const data = {
        cliente: {
          fullName: form.value.fullName,
          rg: form.value.rg,
          cpf: form.value.cpf,
          cnh: form.value.cnh,
          birthdate: form.value.birth,
          whatsapp: form.value.tel,
          email: form.value.email,
          motherName: form.value.motherName,
          fatherName: form.value.fatherName,
          citizenship: form.value.naturalidade,
          maritalStatus: form.value.estadoCivil,
          gender: form.value.sexo,
          isServed: false
        },
        address: {
          cep: form.value.cep,
          streetName: form.value.address,
          streetNumber: form.value.houseNumber,
          city: form.value.city,
          complement: form.value.complement,
          neighborhood: form.value.bairro,
          uf: form.value.uf,
        },
      };
      this.service.saveCliente(data).subscribe(
        res => {
          alert("Aguarde contato de um de nossos vendedores");
          location.href = '/';
        }
      );
    } else {
      alert("Preencha todos os campos")
    }
  }
}