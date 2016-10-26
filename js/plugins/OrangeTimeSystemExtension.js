var TimeSystemExtensions = {};

(function($){
  var timestamp;
  $.registerCommand = function(variableId, hours) {
    var time = OrangeTimeSystem.getDateTime();
    time.hour += hours;
    OrangeTimeSystem.validateDateTimeValues(time);

    var timestamp = OrangeTimeSystem.convertConfigToTimestamp(time);

    $gameVariables.setValue(variableId, timestamp);
  };

  $.getTimeLeft = function(variableId) {
    var currentTimestamp = OrangeTimeSystem.convertConfigToTimestamp(OrangeTimeSystem.getDateTime());
    var timestamp = $gameVariables.value(variableId);
    return timestamp - currentTimestamp;
  };

  $.splitTimeDifference = function(variableId, daysVariable, hoursVariable) {
    var timestamp = $.getTimeLeft(variableId);
    var data = OrangeTimeSystem.convertTimestampToConfig(timestamp);

    if (daysVariable > 0) {
      $gameVariables.setValue(daysVariable, data.day > 0 ? data.day - 1 : 0 );
    }
    if (hoursVariable > 0) {
      $gameVariables.setValue(hoursVariable, data.hour);
    }

    return timestamp;
  };
})(TimeSystemExtensions);
