"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registro_1 = require("./registro");
var vehiculo_1 = require("./vehiculo");
var registro = new registro_1.RegistroAutomotor("Transformers");
var vehiculo = new vehiculo_1.Vehiculo("Camion", "VW", "Meteor 28.460", 2024, "ASDA123");
var vehiculo2 = new vehiculo_1.Vehiculo("Auto", "Ford", "Focus", 2005, "ASD123");
var vehiculo3 = new vehiculo_1.Vehiculo("Moto", "Honda", "Cb190", 2019, "54ASD45");
var vehiculo4 = new vehiculo_1.Vehiculo("Moto", "Yamaha", "Fz150", 2013, "ASD45");
var vehiculo5 = new vehiculo_1.Vehiculo("Auto", "Toyota", "Corolla", 2011, "36ASD");
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
