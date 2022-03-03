import {Pessoas} from "./Pessoas";
export class Religiosos extends Pessoas {
    private Religiao: string;
    private Livro: string;
    private Entidade: string;

    constructor (nome: string, idade: number, prof: string, religiao: string, livro: string, entidade: string) {
        super (nome, idade, prof);
        this.Religiao = religiao;
        this.Livro = livro;
        this.Entidade = entidade;
    }

    Caract () {
        if (this.Religiao == "Cristã") {
            console.log ("Vai ao culto aos domingos");
        }
    }
}