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
exports.Mago = void 0;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel) {
        if (nivel === void 0) { nivel = 1; }
        var _this = _super.call(this, nombre, nivel) || this;
        _this.magia = 15;
        return _this;
    }
    Mago.prototype.atacar = function () {
        console.log("".concat(this.getNombre(), " lanza un hechizo de magia ").concat(this.magia, " "));
    };
    Mago.prototype.defender = function () {
        console.log("".concat(this.getNombre(), " se esta defendiendo"));
    };
    return Mago;
}(personaje_1.Personaje));
exports.Mago = Mago;
