export class Animal {
    Vertebrado: boolean;
    Habtat: string;
    Nome: string;

    constructor (Vertebrado: boolean, habtat: string, Nome: string) {
        this.Vertebrado = Vertebrado;
        this.Habtat = habtat;
        this.Nome = Nome;
    }
    Caract () {
        if (this.Vertebrado === true) {
            console.log ("O animal possui coluna vertebral!");
        }
        else {
            console.log ("O animal  não possui coluna vertebral!");

        }
    }
}