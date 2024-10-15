"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var camion_1 = require("./camion");
var moto_1 = require("./moto");
var registro_1 = require("./registro");
var registro = new registro_1.RegistroAutomotor("Transformers");
var vehiculo = new camion_1.Camion("VW", "Meteor 28.460", 2024, "ASDA123");
var vehiculo2 = new auto_1.Auto("Ford", "Focus", 2005, "ASD123");
var vehiculo3 = new moto_1.Moto("Honda", "Cb190", 2019, "54ASD45");
var vehiculo4 = new moto_1.Moto("Yamaha", "Fz150", 2013, "ASD45");
var vehiculo5 = new auto_1.Auto("Toyota", "Corolla", 2011, "36ASD");
registro.registrarVehiculo(vehiculo);
registro.registrarVehiculo(vehiculo2);
registro.registrarVehiculo(vehiculo3);
registro.registrarVehiculo(vehiculo4);
registro.registrarVehiculo(vehiculo5);
console.log("Vehiculos : ");
registro.imprimirVehiculos();
registro.eliminarVehiculo("54ASD45");
// Intentar modificar un vehículo que no existe
registro.modificarVehiculo("AS555", "Camioneta", "Fiat", "Toro", 2023); // Este vehículo no existe
// Modificar un vehículo existente
registro.modificarVehiculo("ASDA123", "Camión", "Volkswagen", "Meteor 28.460", 2025); // Este vehículo existe
console.log("Vehiculos despues de eliminar moto : ");
registro.imprimirVehiculos();
