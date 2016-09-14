/*:
* @plugindesc Helps with the creation of Foraging and Farming Event Creation.
* @author RivingtonDown
*

@help

Harvest_Manager
by: RivingtonDown

Item Note: Crafting Type, Crafting Level, Crafting Items

E.g.
Crop 1 5
Forage 1 1

*/

var Imported = Imported || {};
Imported.Harvest_Manager = true;

var Harvest = Harvest || {};
Harvest.HD = Harvest.HD || {};

var HarvestType = null;
var HarvestLvl = null;
var HarvestItem = null;
var HarvestEvent = null;
var HarvestYield = null;
var CraftXP = null;
var CraftLvl = null;
var CraftXPVar = null;
var CraftLvlVar = null;
var CraftType = null;
var mapID = null;
var eventID = null;

Harvest.HD.GameSystem_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Harvest.HD.GameSystem_initialize.call(this);
};

Game_System.prototype.createHarvestable = function(value, eventID, mapID) {
    HarvestType = value.shift();
    HarvestLvl = parseInt(value[0]);
    HarvestItem = parseInt(value[1]);
    console.log("Type: "+HarvestType+" Level: "+HarvestLvl+" Item: "+HarvestItem+" XP: "+$gameVariables.value(6));

    if (HarvestType == "Forage") {
      CraftType = "Foraging";
      CraftXPVar = 6;
      CraftXP = $gameVariables.value(6);
      CraftLvlVar = 7;
      CraftLvl = $gameVariables.value(7);
    }
    if (HarvestType == "Crop") {
      CraftType = "Farming";
      CraftXPVar = 9;
      CraftXP = $gameVariables.value(9);
      CraftLvlVar = 8;
      CraftLvl = $gameVariables.value(8);
    }

    if (HarvestType == "Forage" && HarvestLvl > CraftLvl) {
      $gameMessage.add(
       CraftType+" level too low \n"+
       "Required level: "+HarvestLvl+"\n"+
       "Current level: "+CraftLvl+"\n"
      );
      return;
    } else {
      calculateItems(CraftLvl,HarvestItem);
      calculateExp(HarvestLvl,CraftLvl);
      deleteHarvested();
    }

    function calculateExp(experience,level) {
      var toNextLvl = Math.pow((level+1), 2)*2; //XP to next craft level

      CraftXP = $gameVariables.value(CraftXPVar) + experience; //add XP
      $gameVariables.setValue(CraftXPVar,CraftXP); //set that XP to in-game variable

      if (CraftXP >= toNextLvl) { //if you can level up
        $gameVariables.setValue(CraftXPVar,toNextLvl - CraftXP); //carry overflow XP into next level
        CraftLvl = level + 1; //add level
        $gameVariables.setValue(CraftLvlVar,CraftLvl); //set that level to in-game variable
        $gameMessage.setPositionType(2); //set message to screen bottom
        AudioManager.playSe({name: "Saint5", volume: 100, pitch: 100, pan: 0, pos: 0}) //play craft level up sfx
        $gameMessage.add(CraftType + " Level Increased to "+$gameVariables.value(CraftLvlVar)); //show craft level up message
      }
    }
    function deleteHarvested(){
      if (HarvestType == "Forage") {
        $gameSelfSwitches.setValue([mapID, eventID, "A"], true);
      }
    }

    function calculateItems(level, item){
      var bonusSuccess = 0; //base chance for bonus success
      if (HarvestType == "Forage") { //if you are foraging
        HarvestYield = Math.floor(Math.random() * Math.min(4,level))+1; //calculate yield based on item level
        if (CraftLvl > HarvestLvl) { //if you have a higher forage level than the item
          var random = Math.random();
          bonusSuccess = (CraftLvl - HarvestLvl)*10;
          if (random < bonusSuccess) {
            $gameParty.gainItem($dataItems[3], 1); //gain bonus item
          }
        }
      }
      if (HarvestType == "Crop") { //if you are harvesting a crop
        if (CraftLvl - HarvestLvl == 0) {  //if craft level is only one and you try to harvest a level one crop
          HarvestYield = 1; //set the yield to one so it isn't zero
        } else {
          HarvestYield = Math.min(4,CraftLvl - HarvestLvl + 1); //otherwise yield is the level difference but four max
        }
      }
      $gameParty.gainItem($dataItems[HarvestItem], HarvestYield); //gain the items you were foraging or harvesting in the correct ammount
      console.log("Gained "+HarvestYield+" regular item with a "+bonusSuccess+"% bonus");
    }
}
Game_System.prototype.plowPlot = function(value, eventID, mapID) {
  HarvestType = value.shift();
  HarvestLvl = parseInt(value[0]);
  HarvestItem = parseInt(value[1]);
  CraftXP = $gameVariables.value(9);
  CraftLvl = $gameVariables.value(8);

  if (HarvestLvl > CraftLvl) {
    $gameMessage.add(
     "Farming level too low \n"+
     "Required level: "+HarvestLvl+"\n"+
     "Current level: "+CraftLvl+"\n"
    );
    $gameMessage.add("Clear plot?");
    $gameMessage.setChoices(['Yes', 'No'], 0, -1);
    $gameMessage.setChoiceCallback(function (choice) {
      if (choice == 0) {
        $gameSelfSwitches.setValue([mapID, eventID, "D"], true);
      } else {
        return;
      }
    });
  } else {
    $gameSelfSwitches.setValue([mapID, eventID, "A"], true);
    $gameVariables.setValue(10,$gameVariables.value(10)-1);
  }
}
