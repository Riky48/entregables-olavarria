import { Vehiculo } from "./vehiculo";

export class RegistroAutomotor {
    private nombre: string;
    private listaVehiculos : Vehiculo[];



    constructor(nombre: string, listaVehiculos?: Vehiculo[]) {
        this.nombre = nombre;

        if (listaVehiculos != undefined) {
            this.listaVehiculos = listaVehiculos;
        } else {
            this.listaVehiculos = [];
        }
    }

    public getNombre(): string{
        return this.nombre;
    }

    public registrarVehiculo(vehiculo: Vehiculo): void {
        this.listaVehiculos.push(vehiculo);
    }

    public eliminarVehiculo(patente: string) {
        this.listaVehiculos = this.listaVehiculos.filter(vehiculo => vehiculo.getPatente() !== patente);
      }

    public obtenerVehiculos(): Vehiculo[] {
        return this.listaVehiculos;
            

    }

    //Parámetros:

// patente: La patente del vehículo que se desea modificar.

// tipo, marca, modelo, año. le ponemos el signo de pregunta para elegir que valor se quiere modificar

//--------------

// Se utiliza el método find para buscar el vehículo por su patente.
// Si se encuentra el vehículo, se utilizan los setters para modificar solo las propiedades que se elijan

modificarVehiculo(patente: string, nuevoTipo?: string, nuevaMarca?: string, nuevoModelo?: string, nuevoAño?: number): void {
    // buscamos eel vehi culo por la patente
    const vehiculoEncontrado = this.listaVehiculos.find(vehiculo => vehiculo.getPatente() === patente);

    // si llogramos encontrar el vehiculo modificame 
    if (vehiculoEncontrado) {
        if (nuevoTipo) vehiculoEncontrado.setTipo(nuevoTipo);
        if (nuevaMarca) vehiculoEncontrado.setMarca(nuevaMarca);
        if (nuevoModelo) vehiculoEncontrado.setModelo(nuevoModelo);
        if (nuevoAño) vehiculoEncontrado.setAño(nuevoAño);

        console.log(`Vehículo modificado: ${vehiculoEncontrado.getPatente()}`);
    } else {
        console.log(`Vehículo con patente ${patente} no encontrado.`);
    }
}



    public imprimirVehiculos(): void {
        const detalles = this.listaVehiculos.map(vehiculo => {
            return `${vehiculo.getTipo()} ${vehiculo.getMarca()} ${vehiculo.getModelo()} (${vehiculo.getAño()}) - PATENTE: ${vehiculo.getPatente()}`;
        }).join('\n');
        console.log(detalles);
        
    
}}
