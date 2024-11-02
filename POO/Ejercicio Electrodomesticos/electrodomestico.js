"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(encendido, marca, eficiencia) {
        this.encendido = encendido;
        this.marca = marca;
        this.eficiencia = eficiencia;
    }
    Electrodomestico.prototype.getMarca = function () {
        return this.marca;
    };
    Electrodomestico.prototype.encender = function () {
        this.encendido = true;
        console.log("La cosa ".concat(this.tipo, " marca ").concat(this.marca, ", ta prendida"));
    };
    Electrodomestico.prototype.apagar = function () {
        this.encendido = false;
        console.log("La cosa ta apagada");
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
