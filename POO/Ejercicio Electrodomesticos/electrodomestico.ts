
export abstract class Electrodomestico {
    protected encendido : boolean;
    protected marca : string; 
    protected eficiencia : string; 
    protected tipo : string;
    

    constructor (encendido : boolean, marca : string, eficiencia : string) {
        this.encendido = encendido;
        this.marca =  marca;
        this.eficiencia = eficiencia;
    }

    getMarca(){
        return this.marca;
    }

    public encender() : void {
        this.encendido = true;
        console.log(`La cosa ${this.tipo} marca ${this.marca}, ta prendida`); 
    }

    public apagar():void {
        this.encendido = false;
        console.log("La cosa ta apagada");
    }
} 


