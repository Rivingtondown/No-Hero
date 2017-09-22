"use strict";

var Imported = Imported || {};
Imported.Rivington_World = true;

var Rivington = Rivington || {};
var RIV = RIV || {};
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
* @param ---Crafting---
* @default
*
*
* @param Resources
* @parent ---Crafting---
* @text Resources
* @type struct<Resources>
* @default
*
* @param Tools
* @parent ---Crafting---
* @text List of Tools
* @type items[]
* @default ["92","93","94","95","96","97","98","99","100"]
*
*/
/*~struct~Resources:
*
* @param ---Cooking---
* @default
*
* @param Vegetables
* @parent ---Cooking---
* @desc List of Vegetables
* @type item[]
* @default ["1","2","3","4","5","6","7","8","9"]
*
* @param Fruit
* @parent ---Cooking---
* @desc List of Fruit
* @type item[]
* @default ["10","11","12"]
*
* @param Animal Product
* @parent ---Cooking---
* @desc List of Animal Products
* @type item[]
* @default ["13","14","15"]
*
* @param Grain
* @parent ---Cooking---
* @desc List of Grains
* @type item[]
* @default ["16","17"]
*
* @param Meat
* @parent ---Cooking---
* @desc List of Meats
* @type item[]
* @default ["18","19","20","21"]
*
* @param Liquid
* @parent ---Cooking---
* @desc List of Liquids
* @type item[]
* @default ["22","23"]
*
* @param Additives
* @parent ---Cooking---
* @desc List of Additives
* @type item[]
* @default ["24","25"]
*
* @param ---Blacksmithing---
* @default
*
* @param Ores
* @parent ---Blacksmithing---
* @desc List of Ores
* @type item[]
* @default ["51","52","53"]
*
* @param Bars
* @parent ---Blacksmithing---
* @desc List of Bars
* @type item[]
* @default ["54","55","56"]
*
* @param Nuggets
* @parent ---Blacksmithing---
* @desc List of Nuggets
* @type item[]
* @default ["57","58","59"]
*
* @param Gems
* @parent ---Blacksmithing---
* @desc List of Nuggets
* @type item[]
* @default ["62","63","64","65"]
*
*/
/*
* @help
*
* ============================================================================
* Notetags
* ============================================================================
*
* Item Notetags:
* <Recipe: [a,b,c]>
* Give the item one or more recipes. Each array should contain the item ids of
* the items required to craft this recipe, set a value to 0 to force an empty
* slot but there must be three ids. Multiple arrays may be used to create more
* than one recipe, separate these arrays with a space.
*
* <RecipeYield: x>
* Optionally, also provide a RecipeYield to increase the amount of items crafted
* with each recipe.
*
* Rivington_World
* by: RivingtonDown
*
*/

(function () {
  Rivington.Parameters = PluginManager.parameters('Rivington_World');
  Rivington.Param = Rivington.Param || {};

  Rivington.Param.worldName = Rivington.Parameters['World Name'];
  Rivington.Param.evilName = Rivington.Parameters['Evil Name'];
  Rivington.Param.kingdomName = Rivington.Parameters['Kingdom Name'];
  RIV.Resources = JSON.parse(Rivington.Parameters['Resources']);
  RIV.Resources.Tools = Rivington.Parameters['Tools'];
  _.forEach(RIV.Resources,function(value,key){
    if(value.match(/\[(\S*)\]/)) {
      RIV.Resources[key] = RIV.Util.mapIntArray(value);
    }
    if (value === "" || value === null) {
      delete RIV.Resources[key];
    }
  })

  Rivington.World.findRecipes = function() {
    var recipeArray = []; var recipeIndex = 0;
    for(var i=0;i<$dataItems.length;i++){
      if($dataItems[i] && $dataItems[i].meta.Recipe) {
        recipeArray.push({
          "recipes" : $dataItems[i].meta.Recipe.trim().split(" ").splice(1),
          "category" : $dataItems[i].meta.Recipe.trim().split(" ")[0],
          "id" : i
        });
        recipeArray[recipeIndex].yield = $dataItems[i].meta.RecipeYield ? parseInt($dataItems[i].meta.RecipeYield.trim()) : 1;
        recipeIndex++
      }
    }
    return recipeArray;
  };

  Rivington.World.buildRecipe = function(gameVar) {
    var fullRecipeData = Rivington.World.findRecipes();
    _.forEach(fullRecipeData,function(recipeData){
      _.forEach(o.recipes,function(recipeArr){
        if(recipeArr === String("["+$gameVariables.value(49)+"]")) {
          var returnTool = RIV.Util.ArrSharedValue(RIV.Resources.Tools,recipeArr);
          if(returnTool > 0) {
              $gameParty.gainItem($dataItems[returnTool],1);
          }
          $gameVariables.setValue(gameVar,recipeData.id);
          $gameVariables.setValue(50,recipeData.yield);
        }
      });
    });
  }

  Rivington.World.simpleMix = function(a,b,c) {
    var combinedIng = RIV.Util.ArrContainsAll(a);
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
