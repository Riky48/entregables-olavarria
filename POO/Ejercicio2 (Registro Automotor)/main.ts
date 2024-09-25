import { RegistroAutomotor } from "./registro";
import { Vehiculo } from "./vehiculo";

const registro = new RegistroAutomotor("Transformers");

const vehiculo = new Vehiculo("Camion", "VW", "Meteor 28.460", 2024 , "ASDA123");
const vehiculo2 = new Vehiculo("Auto", "Ford", "Focus", 2005 ,"ASD123");
const vehiculo3 = new Vehiculo("Moto", "Honda", "Cb190", 2019 ,"54ASD45");
const vehiculo4 = new Vehiculo("Moto", "Yamaha", "Fz150", 2013 ,"ASD45");
const vehiculo5 = new Vehiculo("Auto", "Toyota", "Corolla", 2011 ,"36ASD");
    
registro.registrarVehiculo(vehiculo);
registro.registrarVehiculo(vehiculo2);
registro.registrarVehiculo(vehiculo3);
registro.registrarVehiculo(vehiculo4);
registro.registrarVehiculo(vehiculo5);

console.log("Vehiculos : ") 
registro.imprimirVehiculos();

registro.eliminarVehiculo("54ASD45");

// Intentar modificar un vehículo que no existe
registro.modificarVehiculo("AS555", "Camioneta", "Fiat", "Toro", 2023); // Este vehículo no existe

// Modificar un vehículo existente
registro.modificarVehiculo("ASDA123", "Camión", "Volkswagen", "Meteor 28.460", 2025); // Este vehículo existe

console.log("Vehiculos despues de eliminar moto : ")
registro.imprimirVehiculos();
