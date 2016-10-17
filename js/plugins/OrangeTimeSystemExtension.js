var TimeSystemExtensions = {};

(function($){
  $.registerCommand = function(variableId, switchId, hours) {
    var time = OrangeTimeSystem.getDateTime();
    time.hour += hours;
    OrangeTimeSystem.validateDateTimeValues(time);

    var timestamp = OrangeTimeSystem.convertConfigToTimestamp(time);

    time.callback = 'S' + switchId + ',TRUE';
    OrangeTimeSystem.registerAfterTimeEvent(time);

    $gameVariables.setValue(variableId, timestamp);
  };

  $.getTimeLeft = function(variableId) {
    var currentTimestamp = OrangeTimeSystem.convertConfigToTimestamp(OrangeTimeSystem.getDateTime());

    return timestamp - currentTimestamp;
  };

  $.splitTimeDifference = function(variableId, daysVariable, hoursVariable, minutesVariable, secondsVariable) {
    var timestamp = $.getTimeLeft(variableId);
    var data = OrangeTimeSystem.convertTimestampToConfig(timestamp);

    if (daysVariable > 0) {
      $gameVariables.setValue(daysVariable, data.day);
    }
    if (hoursVariable > 0) {
      $gameVariables.setValue(hoursVariable, data.hour);
    }
    if (minutesVariable > 0) {
      $gameVariables.setValue(minutesVariable, data.minute);
    }
    if (secondsVariable > 0) {
      $gameVariables.setValue(secondsVariable, data.seconds);
    }

    return timestamp;
  };
})(TimeSystemExtensions);
