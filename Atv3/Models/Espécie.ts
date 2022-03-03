import { Animal } from "./Animais";
export class Tipo_Animal extends Animal  {
    private Classificacao: string;
    private Reproducao: string;
    private T_Gestação_Meses: number;

    constructor (vertebrado: boolean, habtat: string, nome: string, classificacao: string, reprod: string, TG_meses: number) {
        super (vertebrado, habtat, nome);
        this.Classificacao = classificacao;
        this.Reproducao = reprod;
        this.T_Gestação_Meses = TG_meses;
    }

    Tempo_Gest () {
        console.log ("O tempo de gestação do animal", this.Nome, "é", this.T_Gestação_Meses);
    }
}