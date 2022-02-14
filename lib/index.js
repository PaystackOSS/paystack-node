"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resources = require("./apis");
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
module.exports = Paystack;
