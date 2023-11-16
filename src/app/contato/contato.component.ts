import { Observable } from 'rxjs';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
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
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

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


  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    //this.getCep();
  }

  getCep() {
    if (this.user.cep.length > 6) {
      this.user.cep = this.user.cep.replace(/[.-]/g, '');
      this.service.getCep(this.user.cep).subscribe(
        res => {
          console.log(res)
          this.user.rua = res.logradouro
          this.user.cidade = res.localidade
          this.user.bairro = res.bairro
          this.user.estado = res.uf
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


/*
address:"Avenida Doutor Edson Baccarin"
bairro:"Jardim Roberto Selmi Dei"
birth:"1995-12-13"
cep:"14806305"
city:"Araraquara"
cnh:"123456789"
complemento:""
cpf:"43637814838"
email:"joao@email.com"
estado-civil:"Solteiro"
father-name:"Antonio"
fullname:"João Gabriel"
houseNumber:"124"
mother-name:"Adriana"
naturalidade:"Araraquara"
rg:"407069331"
sexo:"Masculino"
tel:"16993002126"
 */