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
exports.Lavarropa = void 0;
var electrodomestico_1 = require("./electrodomestico");
var Lavarropa = /** @class */ (function (_super) {
    __extends(Lavarropa, _super);
    function Lavarropa(capacidad, tipoCarga, RPM, encendido, marca, eficiencia) {
        var _this = _super.call(this, encendido, marca, eficiencia) || this;
        _this.capacidad = capacidad;
        _this.tipoCarga = tipoCarga;
        _this.RPM = RPM;
        _this.tipo = "Lavarropas";
        return _this;
    }
    Lavarropa.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    Lavarropa.prototype.getTipoCarga = function () {
        return this.tipoCarga;
    };
    Lavarropa.prototype.getRPM = function () {
        return this.RPM;
    };
    Lavarropa.prototype.getTipo = function () {
        return this.tipo;
    };
    return Lavarropa;
}(electrodomestico_1.Electrodomestico));
exports.Lavarropa = Lavarropa;
