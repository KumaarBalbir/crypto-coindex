const ConfigStore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new ConfigStore(pkg.name);
  }
  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error(
        "No API key found --Get a key at https://docs.coinapi.io"
      );
    }
    return key;
  }
  deleteKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error(
        "No API key found --Get a key at https://docs.coinapi.io"
      );
    }
    this.conf.delete("apiKey");
  }
}

module.exports = KeyManager;
