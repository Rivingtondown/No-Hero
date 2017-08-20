"use strict";

var Imported = Imported || {};
Imported.Rivington_Tutorial = true;

var Rivington = Rivington || {};
Rivington.Tutorial = Rivington.Tutorial || {};
/*:
* @plugindesc Tutorial.
* @author RivingtonDown
*
* @param Tutorial Background
* @desc Background style of tutorial message box
* Default 2
* @default 2
*
* @param Tutorial Title Color
* @desc Color of the tutorial message title
* Default 3
* @default 3
*
@help

Rivington_Tutorial
by: RivingtonDown

*/

(function () {
  Rivington.Parameters = PluginManager.parameters('Rivington_Tutorial');
  Rivington.Param = Rivington.Param || {};

  Rivington.Param.TutPos = Number(Rivington.Parameters['Tutorial Position']);
  Rivington.Param.TutBak = Number(Rivington.Parameters['Tutorial Background']);
  Rivington.Param.TutColor = Number(Rivington.Parameters['Tutorial Title Color']);

  Rivington.Tutorial.Tuts = [];

  Rivington.Tutorial.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Rivington.Tutorial.Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'rvTutorial') Rivington.Tutorial.loadMsg('Tutorial', args);
        if (command === 'rvTip') Rivington.Tutorial.loadMsg('Tip', args);
    };

  Rivington.Tutorial.loadMsg = function(command, args) {
      Rivington.Tutorial.Tuts = [];
      var tutorialVar = null;
      var commandEv = "Rivington "+command;

      if ($dataCommonEvents) {
          for (var i = 0; i < $dataCommonEvents.length; i++) {
              if ($dataCommonEvents[i] instanceof Object && $dataCommonEvents[i].name == commandEv) {
                  tutorialVar = $dataCommonEvents[i].list;
                  break;
              }
          }
          if (tutorialVar != null) {
            var tutNum = 0;
            for (var o = 0; o < tutorialVar.length; o++) {
              if (tutorialVar[o] && tutorialVar[o].code == 108) {
                Rivington.Tutorial.Tuts[tutNum] = {
                  "tutorial": tutorialVar[o].parameters.join(' '),
                  "textArr": [],
                  "type": command
                }
                var nextI = o+2;
                for(nextI; (tutorialVar[nextI] && tutorialVar[nextI].code != 108); nextI++) {
                  if (tutorialVar[nextI] && tutorialVar[nextI].code == 401) {
                    Rivington.Tutorial.Tuts[tutNum].textArr.push(tutorialVar[nextI].parameters[0]);
                  }
                }
                tutNum+=1;
              }
            }
          }
      }
      //Which Tutorial
      var currentTutorial = args.join(' ');
      for (var t=0; t<Rivington.Tutorial.Tuts.length; t++) {
        if (Rivington.Tutorial.Tuts[t].tutorial == currentTutorial) {
          this.showMsg(command, Rivington.Tutorial.Tuts[t]);
        }

      }


  };

  Rivington.Tutorial.showMsg = function(command,args) {
    for (var i=0; i<args.textArr.length; i++) {
      if (command == "Tip") {
        $gameMessage.setPositionType(0);
      }
      if (command == "Tutorial") {
        $gameMessage.setPositionType(1);
      }
      $gameMessage.setBackground(1);
      $gameMessage.addText("\\n<\\c["+(command == "Tip" ? 2 : 6)+"]"+args.type+"\\c[0]: \\c["+Rivington.Param.TutColor+"]"+ args.tutorial + "\\c[0]>" + args.textArr[i]);
      $gameMessage.newPage();
      $gameMessage.clear;
    }

  };


})();
