import { Libro } from "./libro";

export class Socio {
    private nombre: string;
    private apellido: string;
    private dni: number;
    private librosRetirados: Libro[] = [];


    constructor(nombre:string,  apellido:string, dni:number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;



    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }


    public retirarLibro(libro: Libro):void {
        if(libro.estaDisponible()){
            libro.noDisponible;
            this.librosRetirados.push(libro);
            console.log(`libro retirado : ${libro.getTitulo}`)
        } else {
            console.log(`el libro ${libro.getTitulo}  no disponible`)
        }
    }

}