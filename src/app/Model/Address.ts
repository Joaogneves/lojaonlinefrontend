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
    birthdate: string; // ou Date, dependendo do formato que você deseja
    whatsapp: string;
    email: string;
    motherName: string;
    fatherName: string;
    citizenship: string;
    maritalStatus: string; // aqui você pode considerar usar um enum se tiver valores fixos
    gender: string; // ou enum
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