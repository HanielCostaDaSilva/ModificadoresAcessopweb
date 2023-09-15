class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome + "- Jurídica", idade, dataNascimento);
        this.cnpj = cnpj;
    }
    getcnpj() {
        return this.cnpj;
    }
}
