var ProdutoEletro = /** @class */ (function () {
    function ProdutoEletro(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    // Retornando o nome
    ProdutoEletro.prototype.getNome = function () {
        return this.nome;
    };
    // Retornando o preço
    ProdutoEletro.prototype.getPreco = function () {
        return this.preco;
    };
    return ProdutoEletro;
}());
var nome = prompt('Digite o nome do produto: ');
var preco = Number(prompt('Digite o preço do produto: '));
var produto = new ProdutoEletro(nome, preco);
console.log('Dados do produto:\n');
document.write('Dados do produto:','<br>');
console.log("Produto: ".concat(produto.getNome()));
document.write("Produto: ".concat(produto.getNome()));
console.log("Pre\u00E7o: R$ ".concat(produto.getPreco()));
document.write("<br>Pre\u00E7o: R$ ".concat(produto.getPreco()));
