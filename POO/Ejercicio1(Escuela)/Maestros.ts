import { Alumno } from "./Alumnos";

export class Profesor {
    private nombre: string;
    private alumnos: Alumno[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.alumnos = [];
    }

    añadirAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    getNombre(): string {
        return this.nombre;
    }
}