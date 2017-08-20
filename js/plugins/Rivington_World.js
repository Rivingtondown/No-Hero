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
@help

Rivington_World
by: RivingtonDown

*/

(function () {
  Rivington.Parameters = PluginManager.parameters('Rivington_World');
  Rivington.Param = Rivington.Param || {};

  Rivington.Param.worldName = Rivington.Parameters['World Name'];
  Rivington.Param.evilName = Rivington.Parameters['Evil Name'];
})();
