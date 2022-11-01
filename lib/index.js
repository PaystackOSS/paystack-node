"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paystack = void 0;
const Resources = __importStar(require("./apis"));
class Paystack {
    constructor(apiKey) {
        this.extend(apiKey);
    }
    extend(apiKey) {
        for (const resource in Resources) {
            if (Resources.hasOwnProperty(resource)) {
                this[this.toCamelCase(resource)] = new Resources[resource][resource](apiKey);
            }
        }
    }
    toCamelCase(resource) {
        const _resource = this.cleanResourceKey(resource);
        _resource.toLowerCase()
            .replace(/\W+(.)/g, (_, chr) => chr.toUpperCase());
        return _resource;
    }
    cleanResourceKey(resource) {
        if (!resource)
            return null;
        return resource.toLowerCase().replace("api", "");
    }
}
exports.Paystack = Paystack;
module.exports = Paystack;
module.exports.default = Paystack;
