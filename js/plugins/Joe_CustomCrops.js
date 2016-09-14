/*:
* @plugindesc Allows you to create custom variables aside from the engine defaults.
* @author Cropomatic - soulxregalia.wordpress.com
*
* @param Custom Variable Max
* @desc How many variables do you want to be created for your game?
* @default 999
*

@help

JOE_CustomCrops
by: Cropomatic

What's with this plugin?

This plugin allows you to create extra variables that are not handled by the
default engine variables. This means these are variables you can manipulate
aside from the default variables you have by default. You can create as
many as you can.

It stores the variables in a list, starting from 0 on its counting.

To just access the value of a custom variable, do this on a script command:

this.cv(id)

where id is the id of the custom variable.

or do this on a plugin command:

cv val id

where id is the id of the custom variable.

Main Plugin Commands:

cv set index value

where index would be the number of the variable. Remember that counting starts
from 0, not 1.
where value is the value of the variable.

For example:

cv set 0 10

this will set Custom Variable 0's value as 10.

Other commands for other operations:

cv add index value
cv sub index value
cv mult index value
cv div index value
cv mod index value

where add = add custom variable with value
where sub = subtract custom variable with value
where mult = multiply custom variable with value
where div = divide custom variable with value
where mod = apply modulus on custom variable with value

If you want to check it via conditional branch, use the Conditional Branch and
use the script option from tab 4 and write:

this.isEqualTo(index, value)
this.isGreaterThanOrEqual(index, value)
this.isLesserThanOrEqual(index, value)
this.isGreater(index, value)
this.isLesser(index, value)
this.isNotEqual(index, value)

where index is the number of the custom variable
and value is the value you want the custom variable's value to be compared of.

For example:

this.isEqualTo(0, 10)

What you are doing here is that you're comparing the value of Custom Variable 0
to 10. Is custom variable 0's value equal to 10?

You can also do this for string (only works for isEqualTo command)

this.isEqualTo(0, 'Hi There')

This will check if the value is equal to 'Hi There'.

If you are going to place the custom variable's value as a string or a word,
use '' marks to it. Example:

cv set 0 'Tifa'

this would set Custom Variable 0's value as Tifa.

==================================================
TERMS OF USE
==================================================

Free to use for Commercial and Non Commercial Use.

==================================================
SPECIAL THANKS:
==================================================
Necromedes for the idea of this plugin.

==================================================
PATREON: https://www.patreon.com/Cropomatic
==================================================

*/

var Imported = Imported || {};
Imported.JOE_CustomCrops = true;

var Cropomatic = Cropomatic || {};
Cropomatic.CV = Cropomatic.CV || {};

var cvparams = PluginManager.parameters('JOE_CustomCrops');

var variableLimit = 100;

Cropomatic.CV.GameSystem_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Cropomatic.CV.GameSystem_initialize.call(this);
    this.cropVariables = [];
    this.createCustomCrops();
};

Game_System.prototype.createCustomCrops = function() {
    for (var i = 0; i < variableLimit; i++) {
        var variable = null;
        this.cropVariables.push(variable);
    }
}

Game_System.prototype.setCustomCrop = function(index, value) {
    this.cropVariables[index] = value;
}

Cropomatic.CV.GameInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Cropomatic.CV.GameInterpreter_pluginCommand.call(this, command, args);
    if (command === 'cv') {
        if (args[0] === 'val') {
            return $gameSystem.cropVariables[Number(args[1])];
        }
        if (args[0] === 'set') {
            var index = Number(args[1]);
            var value = eval(args[2]);
            $gameSystem.setCustomCrop(index, value);
        }
    }
};

Game_Interpreter.prototype.cv = function(index) {
    return $gameSystem.cropVariables[index];
}
