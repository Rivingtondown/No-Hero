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

  // var _Scene_Map_start = Scene_Map.prototype.start;
  // Scene_Map.prototype.start = function() {
  //   _Scene_Map_start.call(this);
  //   this._rvWindow = new RV_Window(0,0);
  //   this.addWindow(this._rvWindow);
  // }
  //
  // var _Scene_Map_update = Scene_Map.prototype.update;
  // Scene_Map.prototype.update = function() {
  //   _Scene_Map_update.call(this);
  //
  //
  // }
  //
  // function RV_Window() {
  //   this.initialize.apply(this, arguments)
  // }
  //
  // RV_Window.prototype = Object.create(Window_Base.prototype);
  // RV_Window.prototype.constructor = RV_Window;
  //
  // RV_Window.prototype.initialize = function(x, y) {
  //   Window_Base.prototype.initialize.call(this, x, y, this.windowWidth(), this.windowHeight());
  //
  //   this.refresh()
  // }

  Rivington.Parameters = PluginManager.parameters('Rivington_Tutorial');
  Rivington.Param = Rivington.Param || {};

  Rivington.Param.TutPos = Number(Rivington.Parameters['Tutorial Position']);
  Rivington.Param.TutBak = Number(Rivington.Parameters['Tutorial Background']);
  Rivington.Param.TutColor = Number(Rivington.Parameters['Tutorial Title Color']);

  Rivington.Tutorial.Tuts = [];
  Rivington.Tut = {
    "Title": "",
    "Msg": [],
    "Type": "Tutorial"
  };

  Rivington.Tutorial.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Rivington.Tutorial.Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'rvTutorial') Rivington.Tutorial.loadMsg('Tutorial', args);
        if (command === 'rvTip') Rivington.Tutorial.loadMsg('Tip', args);
    };

  Rivington.Tutorial.loadMsg = function(command, args) {
      Rivington.Tutorial.Tuts = [];
      $gameVariables.setValue(24,0);
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
      Rivington.Tut.Title = args.tutorial;
      Rivington.Tut.Type = args.type;
      for (var i=0; i<args.textArr.length; i++) {
        //if(!$gameMessage.isBusy()){//NOT SHOWING WHOLE MESSAGE
          // if (command == "Tip") {
          //   $gameMessage.setPositionType(0);
          // }
          // if (command == "Tutorial") {
          //   $gameMessage.setPositionType(1);
          // }
          // $gameMessage.setBackground(1);
          if (Rivington.Tut.Type == "Tutorial") {
            Rivington.Tut.Msg[i] = args.textArr[i];
          } else {
            $gameVariables.setValue(24,args.textArr[i]);
          }
          // $gameMessage.addText("\\n<\\c["+(command == "Tip" ? 2 : 6)+"]"+args.type+"\\c[0]: \\c["+Rivington.Param.TutColor+"]"+ args.tutorial + "\\c[0]>" + args.textArr[i]);
          // $gameMessage.newPage();
          // $gameMessage.clear;
          //args.textArr.splice(i,1);
        //}
      }

  };


})();
