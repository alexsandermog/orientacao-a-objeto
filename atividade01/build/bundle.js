var Cliente = /** @class */ (function () {
    function Cliente(nome, cpf, nascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
    }
    return Cliente;
}());
var nome;
var cpf;
var nascimento;
nome = prompt('Digite seu nome: ');
cpf = prompt('Digite seu cpf: ');
nascimento = prompt('Digite sua data de nascimento: ');
var cliente = new Cliente(nome, cpf, nascimento);
console.log('Dados do Cliente:\n\n');
document.write('Dados do Cliente:<br>');
console.log("Nome: ",(nome));
document.write("<br>Nome: ",(nome));
console.log("CPF: ",(cpf));
document.write("<br>CPF: ",(cpf));
console.log("Data de Nascimento: ",(nascimento));
document.write("<br>Data de Nascimento: ",(nascimento));
