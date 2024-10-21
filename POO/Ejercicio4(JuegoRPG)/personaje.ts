export abstract class Personaje {
    private nombre: string;
    private nivel: number;
    private puntosDeVida: number;
    private habilidad: string;
    abstract defender() : void;
    abstract atacar(): void;
   
    
    constructor(nombre: string, nivel = 1,  puntosDeVida = 100, habilidad? : string) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.habilidad = "";
        

}


    getNombre(){
        return this.nombre;
    }

    getNivel(){
        return this.nivel;
    }

    getpuntosDeVida(){
        return this.puntosDeVida;
    }

    getHabilidad(){
        return this.habilidad;
    }
    
    public encontrarCaja(nuevaHabilidad : string) : void {
        this.nivel += 1;
        this.puntosDeVida += 100;
        this.habilidad = nuevaHabilidad;
        console.log(`${this.nombre} subio a nivel : ${this.nivel} y aprendio la habilidad : ${this.habilidad}`);
    }
    
    
}