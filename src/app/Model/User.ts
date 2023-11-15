export interface User {
    cep: string,
    rua?: string,
    cidade?: string,
    bairro?: string,
    estado?: string,
    complemento?: string,
    numero?: string
    fullname?: string,
    rg?: string,
    cpf?: string,
    cnh?: string,
    dataNascimento?: string,
    celular?: string,
    email?: string,
    nomeMae?: string,
    nomePai?: string,
    naturalidade?: string,
    estadoCivilSelecionado?: string,
    sexoSelecionado?: string,
    [key: string]: string | undefined;
}