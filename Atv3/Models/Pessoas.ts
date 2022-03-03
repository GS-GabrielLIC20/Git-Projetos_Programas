export class Pessoas {
    private Nome: string;
    private Idade: number;
    private Profissao: string;
    constructor (nome: string, idade: number, prof: string) {
        this.Nome = nome;
        this.Idade = idade;
        this.Profissao = prof;
    }
    Descricao () {
        console.log (this.Nome + " tem " + this.Idade + ", é " + this.Profissao);
    }
}
