
$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  $('#power-saving-status').text(thermostat.powerSaverMode);

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage())
  }

  $('#increase-temperature').click(function() {
    thermostat.increase(1);
    updateTemperature();
  })

  $('#decrease-temperature').click(function() {
    thermostat.decrease(1);
    updateTemperature();
  })

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaver').click(function() {
    thermostat.powerSaver();
    $('#power-saving-status').text(thermostat.powerSaverMode);
    updateTemperature();
  })
})