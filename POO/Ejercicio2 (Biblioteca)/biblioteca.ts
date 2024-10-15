import { Libro } from "./libro";
import { Socio } from "./socio";


export class Biblioteca {

    private libros: Libro[];
    private socios:  Socio[];
    private nombre: string;

    constructor(nombre:string,  libros: Libro[], socios: Socio[]) {
        this.nombre = nombre;
        this.libros = libros;
        this.socios = socios;

    }

    public getLibros(): Libro[] {
        return this.libros;
    }

    public setLibros(libros: Libro[]): void {
        this.libros = libros;
    }

    public getSocios(): Socio[] {
        return this.socios;
    }

    public setSocios(socios: Socio[]): void {
        this.socios = socios;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

   public registrarSocio(socio: Socio):void{
    this.socios.push(socio);
   }

   public registrarLibro(libro: Libro):void{
    this.libros.push(libro);
   }
    
   

} 