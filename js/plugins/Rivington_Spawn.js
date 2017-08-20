"use strict";

var Imported = Imported || {};
Imported.Rivington_Spawn = true;

var Rivington = Rivington || {};
Rivington.Spawn = Rivington.Spawn || {};
/*:
* @plugindesc Automated spawning extension for Rivington Harvest.
* @author RivingtonDown
*
* @param Region Spawning
* @desc Automate event spawning in designated regions. Requires Orange Custom Events.
* Default true
* @default true
*
* @param EventMap ID
* @desc ID of map to copy events from. Requires Orange Custom Events.
* Default 0
* @default 0
*
* @param Spawn Tracking Variable
* @desc Designated variable to keep track of map spawns.
* Default 0
* @default 0
*
@help

Rivington_Spawn
by: RivingtonDown

*/

(function () {
  Rivington.Parameters = PluginManager.parameters('Rivington_Spawn');
  Rivington.Param = Rivington.Param || {};

  Rivington.Param.hvSpawn = Boolean(Rivington.Parameters['Region Spawning']);
  Rivington.Param.hvEventMap = Number(Rivington.Parameters['EventMap ID']);
  Rivington.Param.hvSpawnVar = Number(Rivington.Parameters['Spawn Tracking Variable']);

  if (Galv.SPAWN.spawnMapId) {
    Rivington.Param.hvEventMap = Galv.SPAWN.spawnMapId;
  }

  var spawnedTile = false;
  var hvEvents = [];

  Rivington.Spawn.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (!Rivington.Spawn.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!Rivington.Spawn._loaded_RivingtonItemTags) {
      this.setDatabaseLengths();
      for (var n = 1; n < $dataItems.length; n++) {
        var obj = $dataItems[n];
        var notedata = obj.note.split(/[\r\n]+/);

        obj.infoEval = '';
        obj.hvEval = '';
        var evalMode = 'none';

        for (var i = 0; i < notedata.length; i++) {
          var line = notedata[i];
          if (line.match(/<(?:RIVINGTON HARVEST)>/i)) {
            evalMode = 'hv eval';
          } else if (line.match(/<\/(?:RIVINGTON HARVEST)>/i)) {
            evalMode = 'none';
          } else if (evalMode === 'hv eval') {
            if (obj.hvEval !== '') obj.hvEval += '\n';
            obj.hvEval = {
              'name': line.split(",")[0].split(":").length > 1 ? line.split(",")[0].split(":")[0] : obj.name.toLowerCase(),
              'itemId': obj.id,
              'spawnTime': line.split(",")[1].split("-").length > 1 ? line.split(",")[1].split("-")[1] : "morning",
              'eventId': line.split(",")[0].split(":").length > 1 ? line.split(",")[0].split(":")[1] : line.split(",")[0],
              'spawnRegion': line.split(",")[1].split("-").length > 1 ? line.split(",")[1].split("-")[0] : line.split(",")[1]
            };
            if (obj.hvEval.spawnTime == "morning" || obj.hvEval.spawnTime == "day") {
              obj.hvEval.spawnTime = [4, 7];
            }
            if (obj.hvEval.spawnTime == "night" || obj.hvEval.spawnTime == "midnight") {
              obj.hvEval.spawnTime = [5, 6];
            }
            hvEvents.push(obj.hvEval);
          }
        }
      }
      Rivington.Spawn._loaded_RivingtonItemTags = true;
    }

    return true;
  };

  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };

  Rivington.Spawn.Scene_Map_start = Scene_Map.prototype.start;
  Scene_Map.prototype.start = function () {
    Rivington.Spawn.Scene_Map_start.call(this);
    var hvSpawns = $gameVariables.value(Rivington.Param.hvSpawnVar);
    if (hvSpawns == 0) {
      hvSpawns = [];
    }
    var spawnMapQ = _.find(hvSpawns, function (o) {
      return o.mapId == $gameMap.mapId();
    }) || false;
    if (!spawnMapQ || hvSpawns.length < 1) {
      var hvSpecial = _.filter(hvEvents, function (hvS) {
        if ($dataMap.meta.forage) {
          spawnMapQ = true;
          var metaForage = $dataMap.meta.forage;
          metaForage = metaForage.trim().split(',');
          return metaForage.indexOf(hvS.name) != -1;
        } else {
          return false;
        }
      });
      if (hvSpecial.length > 0) {
        _.forEach(hvSpecial, function (o) {
          o.spawned = false;
        });
        var mapObj = {
          "hvEvents": hvSpecial,
          "mapId": $gameMap.mapId()
        };
        hvSpawns.push(mapObj);
      }
    }
    $gameVariables.setValue(Rivington.Param.hvSpawnVar, hvSpawns);

    if (Rivington.Param.hvSpawn && spawnMapQ) {
      Rivington.Spawn.spawnHarvest();
    }
  };

  Rivington.Spawn.spawnHarvest = function () {
    var hvSpawns = $gameVariables.value(Rivington.Param.hvSpawnVar);
    var thisMapId = $gameMap.mapId();
    var hvSpawnMap = _.find(hvSpawns, function (o) {
      return o.mapId == thisMapId;
    });

    _.forEach(hvSpawnMap.hvEvents, function (hvE) {
      if (!hvE.spawned) {
        if ($gameSwitches.value(hvE.spawnTime[0]) == true || $gameSwitches.value(hvE.spawnTime[1]) == true) {
          var spawnAmount = Math.min($gameMap.getRegionTileList(parseInt(hvE.spawnRegion)).length, 2);
          Galv.SPAWN.overlap = 'terrain';
          for (var i = 0; i < spawnAmount; i++) {
            Galv.SPAWN.event(parseInt(hvE.eventId), parseInt(hvE.spawnRegion), true);
          }
          console.log('spawned ' + hvE.name);
          hvE.spawned = true;
        }
      }
    });
    hvSpawns = _.filter(hvSpawns, function (l) {
      return l.mapId != thisMapId;
    });
    hvSpawns.push(hvSpawnMap);
    $gameVariables.setValue(Rivington.Param.hvSpawnVar, hvSpawns);
  };
})();
