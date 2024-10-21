import { Personaje } from "./personaje";
import { Arquero } from "./arquero";
import { Mago } from "./mago";
import { Luchador } from "./luchador";


const mago1 = new Mago("Beluz");

const arquero1 = new Arquero ("Legolas")

const luchador1 = new  Luchador("Vader"); 

mago1.atacar();
mago1.defender();

arquero1.atacar();
arquero1.defender();

luchador1.atacar();
luchador1.defender();

luchador1.encontrarCaja("Golpe de Hierro");

