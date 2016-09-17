"use strict";

var Imported = Imported || {};
Imported.ProfBuild = true;

var ProfBuild = ProfBuild || {};

/*:
* @plugindesc Helps with the creation of Foraging and Farming Event Creation.
* @author RivingtonDown
*
* @param ProfessionNames
* @desc String of Profession Names
* Default Homesteader Thief Aristocrat Magician Engineer Hunter
* @default Homesteader Thief Aristocrat Magician Engineer Hunter
*
* @param HomesteaderXP
* @desc The variable used to store Homesteader experience
* Default 0
* @default 0
*
* @param HomesteaderLVL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param HomesteaderSKL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param ThiefXP
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param ThiefLVL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param ThiefSKL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param AristocratXP
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param AristocratLVL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param AristocratSKL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param MagicianXP
* @desc The variable used to store Homesteader experience
* Default 0
* @default 0
*
* @param MagicianLVL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param MagicianSKL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param EngineerXP
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param EngineerLVL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param EngineerSKL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param HunterXP
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param HunterLVL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @param HunterSKL
* @desc The variable used to store Homesteader level
* Default 0
* @default 0
*
* @help
*
*/
(function() {
ProfBuild.parameters = PluginManager.parameters('ProfBuild');

ProfBuild.parameters.ProfessionNames = String(ProfBuild.parameters['ProfessionNames']);
ProfBuild.parameters.HomesteaderXP = Number(ProfBuild.parameters['HomesteaderXP'] || '0');
ProfBuild.parameters.HomesteaderLVL = Number(ProfBuild.parameters['HomesteaderLVL'] || '0');
ProfBuild.parameters.HomesteaderSKL = Number(ProfBuild.parameters['HomesteaderSKL'] || '0');
ProfBuild.parameters.ThiefXP = Number(ProfBuild.parameters['ThiefXP'] || '0');
ProfBuild.parameters.ThiefLVL = Number(ProfBuild.parameters['ThiefLVL'] || '0');
ProfBuild.parameters.ThiefSKL = Number(ProfBuild.parameters['ThiefSKL'] || '0');
ProfBuild.parameters.AristocratXP = Number(ProfBuild.parameters['AristocratXP'] || '0');
ProfBuild.parameters.AristocratLVL = Number(ProfBuild.parameters['AristocratLVL'] || '0');
ProfBuild.parameters.AristocratSKL = Number(ProfBuild.parameters['AristocratSKL'] || '0');
ProfBuild.parameters.MagicianXP = Number(ProfBuild.parameters['MagicianXP'] || '0');
ProfBuild.parameters.MagicianLVL = Number(ProfBuild.parameters['MagicianLVL'] || '0');
ProfBuild.parameters.MagicianSKL = Number(ProfBuild.parameters['MagicianSKL'] || '0');
ProfBuild.parameters.EngineerXP = Number(ProfBuild.parameters['EngineerXP'] || '0');
ProfBuild.parameters.EngineerLVL = Number(ProfBuild.parameters['EngineerLVL'] || '0');
ProfBuild.parameters.EngineerSKL = Number(ProfBuild.parameters['EngineerSKL'] || '0');
ProfBuild.parameters.HunterXP = Number(ProfBuild.parameters['HunterXP'] || '0');
ProfBuild.parameters.HunterLVL = Number(ProfBuild.parameters['HunterLVL'] || '0');
ProfBuild.parameters.HunterSKL = Number(ProfBuild.parameters['HunterSKL'] || '0');



function Profession(xpVar, lvlVar, sklVar, helpText) {
  this.xpVar = xpVar;
  this.lvlVar = lvlVar;
  this.sklVar = sklVar;
  this.helpText = helpText
}

var Homesteader = new Profession(ProfBuild.parameters.HomesteaderXP, ProfBuild.parameters.HomesteaderLVL, ProfBuild.parameters.HomesteaderSKL);
var Thief = new Profession(ProfBuild.parameters.ThiefXP, ProfBuild.parameters.ThiefLVL, ProfBuild.parameters.ThiefSKL);
var Aristocrat = new Profession(ProfBuild.parameters.AristocratXP, ProfBuild.parameters.AristocratLVL, ProfBuild.parameters.AristocratSKL);
var Magician = new Profession(ProfBuild.parameters.MagicianXP, ProfBuild.parameters.MagicianLVL, ProfBuild.parameters.MagicianSKL);
var Engineer = new Profession(ProfBuild.parameters.EngineerXP, ProfBuild.parameters.EngineerLVL, ProfBuild.parameters.EngineerSKL);
var Hunter = new Profession(ProfBuild.parameters.HunterXP, ProfBuild.parameters.HunterLVL, ProfBuild.parameters.HunterSKL);


ProfBuild.GameSystem_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
  ProfBuild.GameSystem_initialize.call(this);

  //Build Profession Name string variables
  var ProfessionNames = ProfBuild.parameters.ProfessionNames.split(" ");
  setTimeout(function(){
    for(var i = 0; i < 6; i++) {
      var thisGameVar = i+15;
      $gameVariables.setValue(thisGameVar, ProfessionNames[i]);
    }
  },1000)
};
Game_System.prototype.ProfHelp = function (helpType, profession) {
  if (helpType == "tutorial") {

  }
}
})();
