"use strict";

var Imported = Imported || {};
Imported.Rivington_World = true;

var Rivington = Rivington || {};
Rivington.World = Rivington.World || {};
/*:
* @plugindesc World Details.
* @author RivingtonDown
*
* @param World Name
* @desc Name of the World
* Default World Name
* @default World Name
*
* @param Evil Name
* @desc Name of the Overlord
* Default Evil Name
* @default Evil Name
*
* @param Kingdom Name
* @desc Name of the Kingdom
* Default Kingdom Name
* @default Kingdom Name
*
* @param Ingredients
* @desc List of Ingredients
* Default 1-25
* @default 1-25
*
* @param Meals
* @desc List of Meals
* Default 26-40
* @default 26-40
*
@help

Rivington_World
by: RivingtonDown

*/

(function () {
  Rivington.Parameters = PluginManager.parameters('Rivington_World');
  Rivington.Param = Rivington.Param || {};

  Rivington.Param.worldName = Rivington.Parameters['World Name'];
  Rivington.Param.evilName = Rivington.Parameters['Evil Name'];
  Rivington.Param.kingdomName = Rivington.Parameters['Kingdom Name'];
  Rivington.Param.ingredients = Rivington.Parameters['Ingredients'];
  Rivington.Param.meals = Rivington.Parameters['Meals'];

  Rivington.World.Ingredients = [];
  var startIngredients = Number(Rivington.Param.ingredients.split("-")[0]);
  var EndIngredients = Number(Rivington.Param.ingredients.split("-")[1]);
  for (var i = startIngredients; i<=EndIngredients; i++) {
    Rivington.World.Ingredients.push(i);
  }

  Rivington.World.Meals = [];
  var startMeals = Number(Rivington.Param.meals.split("-")[0]);
  var EndMeals = Number(Rivington.Param.meals.split("-")[1]);
  for (var m = startMeals; m<=EndMeals; m++) {
    Rivington.World.Meals.push(m);
  }

  Rivington.World.Recipes = [];

  Rivington.World.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function () {
    if (!Rivington.World.DataManager_isDatabaseLoaded.call(this)) return false;
      for(var r=Rivington.World.Meals[0]; r<=Rivington.World.Meals.length; r++) {
        console.log($dataItems[r].id);
      }
    return true;
  };

  Rivington.World.combine = function(a) {
      var fn = function(n, src, got, all) {
          if (n == 0) {
              if (got.length > 0) {
                  all[all.length] = got;
              }
              return;
          }
          for (var j = 0; j < src.length; j++) {
              fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
          }
          return;
      }
      var all = [];
      for (var i = 3; i < 4; i++) {
          fn(i, a, [], all);
      }
      all.push(a);
      return all;
  }

  Rivington.World.testCombine = function(a) {
    var combinedIng = Rivington.World.combine(a);
    for (var z = 0; z<combinedIng.length; z++) {
      combinedIng[z] = "["+combinedIng[z][0]+","+combinedIng[z][1]+","+combinedIng[z][2]+"]";
    }
    if (combinedIng.indexOf("["+String($gameVariables.value(49))+"]") != -1) {
      return true;
    } else {
      return false;
    }
  }

})();
