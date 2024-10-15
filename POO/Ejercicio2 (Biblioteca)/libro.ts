export class Libro {
    
    private isbn: string;
    private titulo:string;
    private autor: string;
    private tematica: string;
    private disponible: boolean = true;

    constructor(isbn:string,  titulo:string, autor:string, tematica:string) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.tematica = tematica;

    }

    public getIsbn(): string {
        return this.isbn;
    }

    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getTematica(): string {
        return this.tematica;
    }

    public setTematica(tematica: string): void {
        this.tematica = tematica;
    }

    public estaDisponible(): boolean {
        return this.disponible;
    }
  
    public noDisponible(): boolean {
        return this.disponible = false;
    }
   


}