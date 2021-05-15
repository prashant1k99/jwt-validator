class BaseConfigs {
  constructor(config) {
    this.config = config;
  }

  get isValid() {
    return true
  }
}

module.exports = BaseConfigs