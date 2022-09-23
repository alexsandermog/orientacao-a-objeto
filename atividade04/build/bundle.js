var Funcionario = /** @class */ (function () {
    function Funcionario(nome, empresa, funcao, salario) {
        this.nome = nome;
        this.empresa = empresa;
        this.funcao = funcao;
        this.salario = salario;
    }
    // Retorna nome
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    // Retorna empresa
    Funcionario.prototype.getEmpresa = function () {
        return this.empresa;
    };
    // Retorna função
    Funcionario.prototype.getFuncao = function () {
        return this.funcao;
    };
    // Retorna o salário
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    return Funcionario;
}());
var nome = prompt('Digite seu nome: ');
var empresa = prompt('Digite o nome da empresa que trabalha: ');
var funcao = prompt('Digite sua função na empresa: ');
var salario = Number(prompt('Digite seu salário: '));
var funcionario = new Funcionario(nome, empresa, funcao, salario);
console.log('Dados do funcionário:\n');
document.write('Dados do funcionário:', '<br>');
console.log("Nome: ".concat(funcionario.getNome()));
document.write("<br>Nome: ".concat(funcionario.getNome()));
console.log("Empresa que trabalha: ".concat(funcionario.getEmpresa()));
document.write("<br>Empresa que trabalha: ".concat(funcionario.getEmpresa()));
console.log("Fun\u00E7\u00E3o na empresa: ".concat(funcionario.getFuncao()));
document.write("<br>Fun\u00E7\u00E3o na empresa: ".concat(funcionario.getFuncao()));
console.log("Sal\u00E1rio: ".concat(funcionario.getSalario()));
document.write("<br>Sal\u00E1rio: ".concat(funcionario.getSalario()));
