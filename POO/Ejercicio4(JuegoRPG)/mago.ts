import { Personaje } from "./personaje";

 export class Mago extends Personaje {
    private magia : number;
    constructor(nombre: string, nivel : number = 1) {
        super(nombre, nivel);
        this.magia = 15;

    }

    public atacar(): void {
        
        console.log(`${this.getNombre} lanza un hechizo de magia ${this.magia} `);
   }
   public defender(): void {
       
       console.log(`${this.getNombre} se esta defendiendo`);
   }


}