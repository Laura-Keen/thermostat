'use strict';

class Thermostat {

  constructor() {
    this.isOn = false;
    this.temperature = 0;
    this.minTemp = 10;
    this.maxTemp = 32;
    this.powerSaverMode = true;
  }

  start() {
    this.isOn = true
    this.temperature = 20
  }

  getIsOn() {
    return this.isOn;
  }

  getTemperature() {
    return this.temperature;
  }

  increase(temp) {
    if (this.powerSaverMode === true && this.temperature + temp > 25) {
        this.temperature = 25;
    } else if (this.temperature + temp > 32) {
        this.temperature = 32;
    }
    else {
        this.temperature += temp;
    }
  }

  decrease(temp) {
    if (this.temperature - temp > this.minTemp) {
          this.temperature -= temp;
    } else {
      this.temperature = this.minTemp;
    }
  }

  powerSaver(status) {
    this.powerSaverMode = status;
  }

}
