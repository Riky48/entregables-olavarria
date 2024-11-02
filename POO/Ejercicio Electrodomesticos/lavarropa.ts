import { Electrodomestico } from "./electrodomestico";

export class Lavarropa extends Electrodomestico {
    
    private capacidad : number;
    private tipoCarga : string;
    private RPM : number;

    constructor (capacidad : number, tipoCarga : string, RPM : number, encendido: boolean, marca : string, eficiencia : string) {
        super(encendido, marca, eficiencia);
        this.capacidad = capacidad;
        this.tipoCarga = tipoCarga;
        this.RPM = RPM;
        this.tipo = "Lavarropas";
    }

    public getCapacidad(){
        return this.capacidad;
    }

    public getTipoCarga(){
        return this.tipoCarga;
    }

    public getRPM(){
        return this.RPM;
    }
    
    public getTipo(){
        return this.tipo;
    }


}