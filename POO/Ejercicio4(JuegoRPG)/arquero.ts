import { Personaje } from "./personaje";

 export class Arquero extends Personaje {
    private agilidad;
    constructor(nombre: string, nivel : number = 1) {
        super(nombre, nivel);
        this.agilidad = 10;
    }

    public atacar(): void {
        
        console.log(`${this.getNombre()} dispara flechas triples con agilidad: ${this.agilidad} `);
   }
   public defender(): void {
       
       console.log(`${this.getNombre()} se esta defendiendo`);
   }


}