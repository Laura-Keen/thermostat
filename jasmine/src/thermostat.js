'use strict';

class Thermostat {

  constructor() {
    this.isOn = false;
    this.temperature = 0;
    this.min_temp = 10;
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
    this.temperature += temp;
  }

  decrease(temp) {
    if (this.temperature - temp > this.min_temp) {
          this.temperature -= temp;
    } else {
      this.temperature = this.min_temp;
    }
  }

}
