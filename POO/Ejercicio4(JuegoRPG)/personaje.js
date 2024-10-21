"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntosDeVida, habilidad) {
        if (nivel === void 0) { nivel = 1; }
        if (puntosDeVida === void 0) { puntosDeVida = 100; }
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.habilidad = "";
    }
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.getpuntosDeVida = function () {
        return this.puntosDeVida;
    };
    Personaje.prototype.getHabilidad = function () {
        return this.habilidad;
    };
    Personaje.prototype.encontrarCaja = function (nuevaHabilidad) {
        this.nivel += 1;
        this.puntosDeVida += 100;
        this.habilidad = nuevaHabilidad;
        console.log("".concat(this.nombre, " subio a nivel : ").concat(this.nivel, " y aprendio la habilidad : ").concat(this.habilidad));
    };
    return Personaje;
}());
exports.Personaje = Personaje;
