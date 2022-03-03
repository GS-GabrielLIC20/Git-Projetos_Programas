import {Pessoas} from "./Models/Pessoas";
import {Religiosos} from "./Models/Religiosos";
import {Tipo_Animal} from "./Models/Espécie";
var R1 = new Religiosos ("Auanny", 18, "Estudante", "Cristã", "Bíblia", "Deus");
R1.Caract();

var E1 = new Tipo_Animal (true, "Terrestre", "Mulher", "Mamífero", "Vivíparos", 9);
E1.Tempo_Gest();