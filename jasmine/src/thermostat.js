'use strict';

class Thermostat {

  constructor() {
    this.isOn = false;
    this.temperature = 0;

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
    this.temperature -= temp;
  }

}
