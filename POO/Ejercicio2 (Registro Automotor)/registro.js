"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre, listaVehiculos) {
        this.nombre = nombre;
        if (listaVehiculos != undefined) {
            this.listaVehiculos = listaVehiculos;
        }
        else {
            this.listaVehiculos = [];
        }
    }
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.registrarVehiculo = function (vehiculo) {
        this.listaVehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (patente) {
        this.listaVehiculos = this.listaVehiculos.filter(function (vehiculo) { return vehiculo.getPatente() !== patente; });
    };
    RegistroAutomotor.prototype.obtenerVehiculos = function () {
        return this.listaVehiculos;
    };
    //Parámetros:
    // patente: La patente del vehículo que se desea modificar.
    // tipo, marca, modelo, año. le ponemos el signo de pregunta para elegir que valor se quiere modificar
    //--------------
    // Se utiliza el método find para buscar el vehículo por su patente.
    // Si se encuentra el vehículo, se utilizan los setters para modificar solo las propiedades que se elijan
    RegistroAutomotor.prototype.modificarVehiculo = function (patente, nuevoTipo, nuevaMarca, nuevoModelo, nuevoAño) {
        // buscamos eel vehi culo por la patente
        var vehiculoEncontrado = this.listaVehiculos.find(function (vehiculo) { return vehiculo.getPatente() === patente; });
        // si llogramos encontrar el vehiculo modificame 
        if (vehiculoEncontrado) {
            if (nuevoTipo)
                vehiculoEncontrado.setTipo(nuevoTipo);
            if (nuevaMarca)
                vehiculoEncontrado.setMarca(nuevaMarca);
            if (nuevoModelo)
                vehiculoEncontrado.setModelo(nuevoModelo);
            if (nuevoAño)
                vehiculoEncontrado.setAño(nuevoAño);
            console.log("Veh\u00EDculo modificado: ".concat(vehiculoEncontrado.getPatente()));
        }
        else {
            console.log("Veh\u00EDculo con patente ".concat(patente, " no encontrado."));
        }
    };
    RegistroAutomotor.prototype.imprimirVehiculos = function () {
        var detalles = this.listaVehiculos.map(function (vehiculo) {
            return "".concat(vehiculo.getTipo(), " ").concat(vehiculo.getMarca(), " ").concat(vehiculo.getModelo(), " (").concat(vehiculo.getAño(), ") - PATENTE: ").concat(vehiculo.getPatente());
        }).join('\n');
        console.log(detalles);
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
