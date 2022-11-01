import * as Resources from './apis'

export class Paystack {
  [index: string]: any

  constructor(apiKey: string) {
    this.extend(apiKey)
  }

  private extend(apiKey: string) {
    for (const resource in Resources) {
      if (Resources.hasOwnProperty(resource)) {
        this[this.toCamelCase(resource)] = new Resources[resource][resource](apiKey);
      }
    }
  }

  private toCamelCase(resource: string): string {
    const _resource = this.cleanResourceKey(resource)
    _resource.toLowerCase()
              .replace(/\W+(.)/g, (_, chr) => chr.toUpperCase());

    return _resource
  }

  private cleanResourceKey(resource: string): string {
    if(!resource) return null
    return resource.toLowerCase().replace("api", "")
  }

}

module.exports = Paystack;
module.exports.default = Paystack;