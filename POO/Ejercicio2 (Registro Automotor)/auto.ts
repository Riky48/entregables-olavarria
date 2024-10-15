import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo  {

    constructor(marca: string, modelo: string, año: number, patente : string) {
        super("Auto", marca, modelo, año, patente);
    }




}