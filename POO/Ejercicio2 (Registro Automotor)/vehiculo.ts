export class Vehiculo {

     private tipo: string;
     private marca : string;
     private modelo : string;
     private año : number;
     private patente : string;

     constructor(tipo: string, marca:string,  modelo:string, año:number,  patente:string) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.patente = patente;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

   
    public setMarca(marca: string): void {
        this.marca = marca;
    }


    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }


    public setAño(año: number): void {
        this.año = año;
    }

    
    public setPatente(patente: string): void {
        this.patente = patente;
    }



    

    public getTipo(): string {
        return this.tipo;
    }

    public getMarca(): string {
        return  this.marca;

    }

    public getModelo(): string {
        return this.modelo;
    }

    public getAño(): number {
        return this.año;
    }

    public getPatente(): string {
        return this.patente;
    }
}

