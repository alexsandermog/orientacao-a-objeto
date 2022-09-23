class ProdutoEletronico{
    private nome: string;
    private preco: number;
 
    constructor(nome: string, preco: number){
       this.nome = nome;
       this.preco = preco;
    }
 
    public getNome(): string{
       return this.nome;
    }
    public getPreco(): number{
       return this.preco;
    }
 }
 const nome: string = prompt('Digite o nome do produto: ');
 const preco: number = Number(prompt('Digite o preço do produto: '));
 const produto: ProdutoEletronico = new ProdutoEletronico(nome, preco);
 
 console.log('Dados do produto:\n')
 document.write('Dados do produto:','<br>')

 console.log(`Produto: ${produto.getNome()}`);
 document.write(`Produto: ${produto.getNome()}`);
 
 console.log(`Preço: R$ ${produto.getPreco()}`);
 document.write(`<br>Preço: R$ ${produto.getPreco()}`);