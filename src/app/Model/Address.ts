export interface ApiAddress {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}

interface Cliente {
    fullName: string;
    rg: string;
    cpf: string;
    cnh: string;
    birthdate: string;
    whatsapp: string;
    email: string;
    motherName: string;
    fatherName: string;
    citizenship: string;
    maritalStatus: string;
    gender: string;
}

interface Address {
    cep: string;
    streetName: string;
    streetNumber: string;
    city: string;
    neighborhood: string;
    uf: string;
}

interface ClienteEnderecoRequest {
    cliente: Cliente;
    address: Address;
}