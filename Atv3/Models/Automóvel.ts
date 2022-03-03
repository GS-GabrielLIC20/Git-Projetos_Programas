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
