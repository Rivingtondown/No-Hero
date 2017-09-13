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
* Default Gaia
* @default Gaia
*
* @param Evil Name
* @desc Name of the Overlord
* Default Konaku
* @default Konaku
*
* @param Kingdom Name
* @desc Name of the Kingdom
* Default Anorath
* @default Anorath
*
* @param ---Recipes---
* @default
*
* @param Vegetables
* @parent ---Recipes---
* @desc List of Ingredients
* @type item[]
* @default ["1","2","3","4","5","6","7","8","9","10"]
*
* @param Fruit
* @parent ---Recipes---
* @desc List of Ingredients
* @type item[]
* @default ["11","12","13"]
*
* @param Meals
* @parent ---Recipes---
* @text Meals
* @type struct<Meals>[]
* @default
*
*/
/*~struct~Meals:
 * @param Meal
 * @type item
 * @default "29"
 *
 * @param Recipes
 * @type struct<Recipes>[]
 * @default
 *
*/
/*~struct~Recipes:
 * @param Ingredients
 * @type item[]
 * @default ["4","5","6"]
 *
*/
/*
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
  Rivington.Param.Ingredients = Rivington.Parameters['Ingredients'];
  Rivington.Param.Meals = JSON.parse(Rivington.Parameters['Meals']);
  for(var m=0;m<Rivington.Param.Meals.length;m++) {
    Rivington.Param.Meals[m] = JSON.parse(Rivington.Param.Meals[m]);
  }
  //Rivington.Param.Meals.Meal = JSON.parse(Rivington.Param.Meals[0]);
  //Rivington.Param.Meals.Meal.Recipes = Rivington.Param.Meals.Meal["Ingredients"].substring(2,Rivington.Param.meals["Items"].length - 2).split("\",\"").map(Number);

  // Rivington.World.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  // DataManager.isDatabaseLoaded = function () {
  //   if (!Rivington.World.DataManager_isDatabaseLoaded.call(this)) return false;
  //     Rivington.World.Meals = JSON.parse(Rivington.Param.meals);
  //     console.log(Rivington.World.Meals["Items"])
  //     // for(var r=Number(Rivington.World.Meals.Items[0]); r<=Rivington.World.Meals.Items.length; r++) {
  //     //   console.log($dataItems[r].id);
  //     // }
  //   return true;
  // };

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

  Rivington.World.hasIngredient = function(a,b) {
    this.array = a;
    for(var i=0;i<array.length;i++){
      return this.array[i].split(",").contains(String(b))
    }
  }

  Rivington.World.simpleMix = function(a,b,c) {
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
