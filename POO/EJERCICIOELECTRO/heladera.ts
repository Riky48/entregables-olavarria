import { Electrodomestico } from "./electrodomestico";

export class Heladera extends Electrodomestico {
   

    private litros : number;
    private noFrost : boolean;
    private potencia : number;

    

    constructor (litros : number, noFrost : boolean, potencia : number, encendido: boolean, marca : string, eficiencia : string) {
        super(encendido, marca, eficiencia);
        this.litros = litros;
        this.noFrost = noFrost;
        this.potencia = potencia;
        this.tipo = "Heladera";
    }

    public getLitros(){
        return this.litros;
    }

    public getNoFrost(){
        return this.noFrost;
    }

    public getPotencia(){
        return this.potencia;
    }

    public getTipo(){
        return this.tipo;
    }
}