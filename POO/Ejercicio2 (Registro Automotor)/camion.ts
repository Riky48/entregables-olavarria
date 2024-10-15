import { Vehiculo } from "./vehiculo";

export class Camion extends Vehiculo  {

    constructor(marca: string, modelo: string, año: number, patente : string) {
        super("Camion", marca, modelo, año, patente);
    }




}