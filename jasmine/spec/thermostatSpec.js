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

  describe ('power saver', function() {
    it('if on, max temp is 25 degrees', function() {
      thermostat.powerSaver(true);
      thermostat.increase(10);
      expect(thermostat.getTemperature()).toEqual(25);
    })

    it('if off, max temp is 32 degrees', function() {
      thermostat.powerSaver(false);
      thermostat.increase(20);
      expect(thermostat.getTemperature()).toEqual(32);
    })
  })

  })
})
