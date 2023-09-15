class PessoaJuridica extends Pessoa{
    private cnpj :string;

    constructor(nome: string, idade: number, dataNascimento: Date,cnpj :string){
        super(nome+  "- Jurídica", idade, dataNascimento);
        this.cnpj = cnpj;
    }

    getcnpj():string { 
        return this.cnpj
    }
    
}