class Animal {
    Especie: string = "";
    Cor: string = "";
    Movimento: string = "";
    SeMove () {
        if (this.Movimento == "Asa") {
            console.log ("O animal " + this.Especie + ", da cor " + this.Cor + ", voa!");
        }
        if (this.Movimento == "Nadadeira") {
            console.log ("O animal " + this.Especie + ", da cor " + this.Cor + ", nada!");
        }
    }
}

class Pessoas {
    Nome: string = "";
    Idade: number = 0;
    Profissao: string = "";
    Hobby: string = "";
    Descricao () {
        console.log (this.Nome + " tem " + this.Idade + ", é " + this.Profissao + " e ama " + this.Hobby);
    }
}

class Automovel {
    Qtd_Rodas: number = 0;
    Altura: number = 0;
    Peso: number = 0;
    Tipo_Automovel () {
        if (this.Qtd_Rodas == 2 || this.Qtd_Rodas == 4) {
            if(this.Qtd_Rodas == 2 &&this.Altura>= 1.8 && this.Altura <=2 && this.Peso >= 130 && this.Peso <=200) {
                console.log ("O veículo possui " + this.Qtd_Rodas + " rodas, " + this.Altura + " de altura e " + this.Peso + " de peso. Logo é uma moto!");
            }
            if (this.Qtd_Rodas == 4){
                if (this.Altura >= 1.5 && this.Altura <=2  && this.Peso > 900 && this.Peso <= 2000){
                    console.log ("O veículo possui " + this.Qtd_Rodas + " rodas, " + this.Altura + " de altura e " + this.Peso + " de peso. Logo é um carro!");
                }
                if (this.Altura > 2 && this.Altura <= 2.8  && this.Peso > 2000 && this.Peso <= 18000) {
                    console.log ("O veículo possui " + this.Qtd_Rodas + " rodas, " + this.Altura + " de altura e " + this.Peso + " de peso. Logo pode ser um ônibus ou caminhão");
                }
            } 
        }
    }
    }


var A1 = new Animal ();
A1.Especie = "Águia";
A1.Cor = "Azul";
A1.Movimento = "Asa";
A1.SeMove();

var P1 = new Pessoas ();
P1.Nome = "Pedro";
P1.Idade = 30;
P1.Profissao = "Médico";
P1.Hobby = "Cantar";
P1.Descricao();

var V1 = new Automovel ();
V1.Qtd_Rodas = 4;
V1.Altura = 1.8;
V1.Peso = 1500;
V1.Tipo_Automovel ();