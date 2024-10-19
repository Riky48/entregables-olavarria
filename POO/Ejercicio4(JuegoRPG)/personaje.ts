export abstract class Personaje {
    private nombre: string;
    private nivel: number;
    private puntosDeVida: number;
    abstract defender() : void;
    abstract atacar(): void;
   
    
    constructor(nombre: string, nivel = 1,  puntosDeVida = 100) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        

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

    

}