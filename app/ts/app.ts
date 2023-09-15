let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

//======================================================

const pF1 =new  PessoaFisica("Haniel",22,new Date(1999,12,12),"934945842");
const pJ1 =new  PessoaJuridica("Limpezas Max",23,new Date(2000,2,3),"12345678901234");

console.log("Pessoa Física:");
console.log(`Nome: ${pF1.getNome()}`);
console.log(`Idade: ${pF1.getIdade()}`);
console.log(`Data de Nascimento: ${pF1.getDataNascimento().toLocaleDateString()}`);
console.log(`CPF: ${pF1.getcpf()}`);

console.log("Pessoa Jurídica:");
console.log(`Nome: ${pJ1.getNome()}`);
console.log(`Idade: ${pJ1.getIdade()}`);
console.log(`Data de Nascimento: ${pJ1.getDataNascimento().toLocaleDateString()}`);
console.log(`CNPJ: ${pJ1.getcnpj()}`);