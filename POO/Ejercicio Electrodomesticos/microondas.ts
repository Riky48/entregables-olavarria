import { Electrodomestico } from "./electrodomestico";

export class Microondas extends Electrodomestico {
    
    private grill : boolean;
    private sensor : boolean;
    private potencia : number;
    private controlPorVoz : boolean;
    private wifi : boolean;
    

    constructor (grill : boolean, sensor : boolean, potencia : number, controlPorVoz : boolean, encendido: boolean, marca : string, eficiencia : string, wifi : boolean) {
        super(encendido, marca, eficiencia);
        this.grill = grill;
        this.sensor = sensor;
        this.potencia = potencia;
        this.wifi  = wifi;
        this.tipo = "Microondas";

    }

    public getGrill(){
        return this.grill;
    }

    public getSensor(){
        return this.sensor;
    }

    public getPotencia(){
        return this.potencia;
    }

    public getControlPorVoz() {
        return this.controlPorVoz;
    }

    public getWifi() {
        return this.wifi;
    }

    public getTipo() {
        return this.tipo;
    }

    public Actualizacion() {
        if (this.wifi) {
            console.log("El  microondas tiene conexión a internet");
            console.log("Equipo actualizado"); 

        } else {
            console.log("El equipo no puede actualizarse por carecer de conexion a internet");
        }
    }
}