"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microondas = void 0;
var electrodomestico_1 = require("./electrodomestico");
var Microondas = /** @class */ (function (_super) {
    __extends(Microondas, _super);
    function Microondas(grill, sensor, potencia, controlPorVoz, encendido, marca, eficiencia, wifi) {
        var _this = _super.call(this, encendido, marca, eficiencia) || this;
        _this.grill = grill;
        _this.sensor = sensor;
        _this.potencia = potencia;
        _this.wifi = wifi;
        _this.tipo = "Microondas";
        return _this;
    }
    Microondas.prototype.getGrill = function () {
        return this.grill;
    };
    Microondas.prototype.getSensor = function () {
        return this.sensor;
    };
    Microondas.prototype.getPotencia = function () {
        return this.potencia;
    };
    Microondas.prototype.getControlPorVoz = function () {
        return this.controlPorVoz;
    };
    Microondas.prototype.getWifi = function () {
        return this.wifi;
    };
    Microondas.prototype.getTipo = function () {
        return this.tipo;
    };
    Microondas.prototype.Actualizacion = function () {
        if (this.wifi) {
            console.log("El  microondas tiene conexión a internet");
            console.log("Equipo actualizado");
        }
        else {
            console.log("El equipo no puede actualizarse por carecer de conexion a internet");
        }
    };
    return Microondas;
}(electrodomestico_1.Electrodomestico));
exports.Microondas = Microondas;
