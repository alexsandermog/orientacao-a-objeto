class Funcionario{
    private nome: string;
    private empresa: string;
    private funcao: string;
    private salario: number;
 
    constructor(nome: string, empresa: string, funcao: string, salario: number){
       this.nome = nome;
       this.empresa = empresa;
       this.funcao = funcao;
       this.salario = salario;
    }
    public getNome(): string{
       return this.nome;
    }
    public getEmpresa(): string{
       return this.empresa;
    }
    public getFuncao(): string{
       return this.funcao;
    }
    public getSalario(): number{
       return this.salario;
    }
 }
   const nome = prompt('Qual é seu nome: ');
   const empresa = prompt('Qual é  o nome da empresa que trabalha: ');
   const funcao = prompt('Qual a sua função na empresa: ');
   const salario = Number(prompt('Quanto é seu salário: '));
 
   const funcionario: Funcionario = new Funcionario(nome, empresa, funcao, salario);
 
   console.log('Dados do funcionário:\n');
   document.write('Dados do funcionário:','<br>');
 
   console.log(`Nome: ${funcionario.getNome()}`);
   document.write(`<br>Nome: ${funcionario.getNome()}`);
 
   console.log(`Empresa que trabalha: ${funcionario.getEmpresa()}`);
   document.write(`<br>Empresa que trabalha: ${funcionario.getEmpresa()}`);
 
   console.log(`Função na empresa: ${funcionario.getFuncao()}`);
   document.write(`<br>Função na empresa: ${funcionario.getFuncao()}`);
 
   console.log(`Salário: ${funcionario.getSalario()}`);
   document.write(`<br>Salário: ${funcionario.getSalario()}`);