import { Personaje } from "./personaje";

 export class Luchador extends Personaje {
    private fuerza : number;
    
    constructor(nombre: string, nivel : number = 1) {
        super(nombre, nivel)
        this.fuerza = 7;
    }

    public atacar(): void {
        
         console.log(`${this.getNombre()} esta atacando con fuerza: ${this.fuerza} `);
    }
    public defender(): void {
        
        console.log(`${this.getNombre()} se esta defendiendo`);
    }

    encontrarCaja(nuevaHabilidad: string): void {
        super.encontrarCaja(nuevaHabilidad); // Llama al método de la clase padre
        this.fuerza += 7;
        console.log(`${this.getNombre()} ha aumentado su fuerza a ${this.fuerza}`);
    }
}