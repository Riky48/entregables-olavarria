import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo  {

    constructor(marca: string, modelo: string, año: number, patente : string) {
        super("Moto", marca, modelo, año, patente);
    }




}