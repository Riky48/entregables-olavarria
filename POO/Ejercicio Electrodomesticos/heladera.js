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
exports.Heladera = void 0;
var electrodomestico_1 = require("./electrodomestico");
var Heladera = /** @class */ (function (_super) {
    __extends(Heladera, _super);
    function Heladera(litros, noFrost, potencia, encendido, marca, eficiencia) {
        var _this = _super.call(this, encendido, marca, eficiencia) || this;
        _this.litros = litros;
        _this.noFrost = noFrost;
        _this.potencia = potencia;
        _this.tipo = "Heladera";
        return _this;
    }
    Heladera.prototype.getLitros = function () {
        return this.litros;
    };
    Heladera.prototype.getNoFrost = function () {
        return this.noFrost;
    };
    Heladera.prototype.getPotencia = function () {
        return this.potencia;
    };
    Heladera.prototype.getTipo = function () {
        return this.tipo;
    };
    return Heladera;
}(electrodomestico_1.Electrodomestico));
exports.Heladera = Heladera;
