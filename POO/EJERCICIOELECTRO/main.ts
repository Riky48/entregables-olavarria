
import { Lavarropa } from "./lavarropa";
import { Heladera } from "./heladera";
import { Microondas } from "./microondas";


let lavarropa1  = new Lavarropa(8, "superior", 3000, false, "drean", "A");
let refrigerator47  = new Heladera(20, true, 500, false, "samsung",  "A");
let microondas1 = new Microondas(true, true, 1000, false, false, "LG",  "B", true);

lavarropa1.encender();
lavarropa1.apagar();

refrigerator47.encender();
microondas1.encender();
microondas1.Actualizacion();

