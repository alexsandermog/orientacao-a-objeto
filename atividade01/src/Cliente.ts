class Cliente{
    public nome: string;
    public cpf: string;
    public nascimento: string;

    constructor(nome: string, cpf: string, nascimento: string){
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
    }
}
let nome:string 
let cpf:string
let nascimento:string

nome = prompt('Informe seu nome: ');
cpf = prompt('Informe seu cpf: ');
nascimento = prompt('Informe sua data de nascimento: ');

let cliente = new Cliente(nome, cpf, nascimento);

console.log('Dados do Cliente:\n\n');
document.write('Dados do Cliente:\n\n')
console.log(`Nome: ${nome}`);
document.write(`Nome: ${nome}`);
console.log(`CPF: ${cpf}`);
document.write(`CPF: ${cpf}`);
console.log(`Data de Nascimento: ${nascimento}`);
document.write(`Data de Nascimento: ${nascimento}`);