'use strict';

describe ('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    thermostat.start();
  })

  describe ('starts the thermostat', function() {

    it('checks if thermostat is on', function() {
      expect(thermostat.getIsOn()).toBe(true);
    })

    it('checks that thermostat is at 20 degrees', function() {
      expect(thermostat.getTemperature()).toEqual(20);
    })

    it('has a minimum temperature of 10 degrees', function(){
      thermostat.decrease(15);
      expect(thermostat.getTemperature()).toEqual(10);
    })
  })

  describe ('changes temperature', function() {
    it('should increase the temperature', function() {
      thermostat.increase(5);
      expect(thermostat.getTemperature()).toEqual(25);
    })

    it('should decrease the temperature', function() {
      thermostat.decrease(5);
      expect(thermostat.getTemperature()).toEqual(15)
    })

    it('should reset the temperature to 20 degrees', function() {
      thermostat.increase(10);
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })

  describe ('power saver', function() {
    it('is on by default', function() {
      expect(thermostat.powerSaverMode).toEqual('On');
      thermostat.powerSaver();
      expect(thermostat.powerSaverMode).toEqual('Off');
    })
  
    it('if on, max temp is 25 degrees', function() {
      thermostat.increase(10);
      expect(thermostat.getTemperature()).toEqual(25);
    })

    it('if off, max temp is 32 degrees', function() {
      thermostat.powerSaver('Off');
      thermostat.increase(20);
      expect(thermostat.getTemperature()).toEqual(32);
    })
  })

  describe('energy usage', function() {
    it('reports high usage when temperature is 25 or higher', function() {
      thermostat.powerSaver('Off');
      thermostat.increase(30);
      expect(thermostat.energyUsage()).toEqual("High");
    })

    it('reports medium usage when the temperature is between 19 and 25', function() {
      expect(thermostat.energyUsage()).toEqual("Medium");
    })

    it('reports low usage when temperature is 18 or lower', function() {
      thermostat.decrease(2);
      expect(thermostat.energyUsage()).toEqual("Low");
    })
  })

  
})
