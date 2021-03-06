'use strict';

class Thermostat {

  constructor() {
    this.isOn = false;
    this.temperature = 20;
    this.minTemp = 10;
    this.maxTemp = 32;
    this.powerSaverMode = 'On';
    this.energyUse = "Medium";
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

  reset() {
    this.temperature = 20;
  }

  increase(temp) {
    if (this.powerSaverMode === 'On' && this.temperature + temp > 25) {
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

  powerSaver() {
    if (this.powerSaverMode === 'On') {
      this.powerSaverMode = 'Off';
    } else {
      this.powerSaverMode = 'On';
    }

  }

  energyUsage() {
    if (this.temperature > 25) {
      this.energyUse = "High"
    } else if (this.temperature < 19) {
      this.energyUse = "Low"
    }
    return this.energyUse
  }

}
