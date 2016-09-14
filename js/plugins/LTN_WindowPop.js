//=============================================================================
// LTN_WindowPop.js
//=============================================================================
/*
===============================================================================
Changelog
===============================================================================
Version 1.0
Version 1.01      - Fixed & improved descriptions, & improved code.

Version 1.02      - Added the option to change the gain/lose String.
                  - Added Notetag colors for items in the database.
                  - Fixed gain gold bug when auto pop off.
                  - More code improvments

Version 1.03 --  - Added Map Display Name features
                - Fixed center alignment for text

Version 1.04  -- - Minor bug fix for plugin command icon display, not showing
                   correctly.
                  - Fixed a bug when a blank Window pop showing when Maps name
                  not available.
                   - Fixed an alignment bug for the custom pop plugin command.

Version 1.05  -- -Fixed Reg-Ex Bug.
                -Added more map display name options, you can now choose to use
                sound effects for the map name pop up and set the timer for how
                it stays open.
                -Added a timer setting for auto item pop, you can now set the
                 amount of time before window fades for item pop ups.
                - Added Collector Mode, allowing you to setup in-game variables
                which will keep track of the items your collecting.
                The window pop will now reflect how many items you have collected.
                "Obtained 3/10 Potion"

*/
/*:
* @plugindesc V.1.05 A window to show short custom messages during gameplay.
*
* @author LTN Games
* @param -- AutoPop Settings --
* @param Auto Item Pop
* @desc Turn this on to allow the window to popup for each gained/lost item/gold.
* @default On
*
* @param Auto Pop Timer
* @desc The amount of time before the window starts to fade out.
* @default 120
*
* @param Auto Pop Alignment
* @desc The alignment of the item name & icon. Left, or Center.
* @default Left
*
* @param Gain String
* @desc The string when gaining an item. Message Code(s) allowed
* @default \C[3]Found \C[0]x
*
* @param Lose String
* @desc The string when losing an item. Message Code(s) allowed
* @default \C[2]Lost \C[0]x
*
* @param Gold Icon
* @desc The icon to display everytime you gain gold. 0 = No Icon
* @default 208
*
* @param Window Pop SE
* @desc The sound efefct you would like to play on popup.
* @default Jump1
*
* @param SE Pitch
* @desc Pitch of the SE on popup.
* @default 100
*
* @param SE Volume
* @desc Volume of the SE on popup.
* @default 100
*
* @param -- Map Display Settings --
* @param Map Display Name
* @desc Turn this on to allow the Window Pop to take control of the Map Display Name
* @default On
*
* @param Map Display Timer
* @desc How long for the map display name to appear for. Defualt 200.
* @default 220
*
* @param Map Display SE
* @desc Choose to use the auto pop sound effect for the map display name or not.
* @default On
*
* @param -- Autopop Collector --
* @param Collection String
* @desc The string for when collecting items
* @default Obtained
*
* @param -- Window Settings --
* @param Window X Position
* @desc X Position on screen for the window pop.
* @default 0
*
* @param Window Y Position
* @desc Y Position on screen for the window pop.
* @default 0
*
* @param Window Width
* @desc The width of the window pop.
* @default 360
*
* @param Background Type
* @desc Choose the type of BG you want.'Image' or 'Gradient' without quotes.
* @default Gradient
*
* @param WindowBG Gradient 1
* @desc Change the color of the 1st gradient. RGBA
* @default rgba(0, 0, 0, 0.6)
*
* @param WindowBG Gradient 2
* @desc Change the color of the 2nd gradient. RGBA
* @default rgba(0, 0, 0, 0)
*
* @param  BG Image Filename
* @desc The filename of the bg image you want.Place in the folder System/
* @default wpop_bg
*
* @param  BG X Offset
* @desc The filename of the bg image you want.Place in the folder System/
* @default 0
*
* @param  BG Y Offset
* @desc The filename of the bg image you want.Place in the folder System/
* @default 0
* @help
*
  ==============================================================================
                                 TERMS OF USE
 ==============================================================================
Credit goes to: LTN Games

  Exclusive to rpgmakermv.co, please don't share anywhere else unless given
  strict permission by the author of the plugin.

  The plugin and all graphics included may be used in commerical and
  non-commerical products. Credit must be given!

  Please report all bugs to http://www.rpgmakermv.co/threads/window-pop.1432/

 ==============================================================================
                                INSTRUCTIONS
 ==============================================================================
  Change the setting in the plugin manager to adjust how the Window Pop appears
  on map.

  If Auto pop is enabled in the plugin manager, a window will pop up For  each
  item or gold gained or lost.
 ==============================================================================
                USING PLUGIN COMMANDS, SCRIPT CALLS, & Notetags
 ==============================================================================
 ----------===========----------------------
COLLECTION MODE
 ----------===========----------------------
 You can now use collection mode for window pop. The window will still popup
 for every item/gold gained but with a few extra plugin commands you can setup
 some in game variables and keep track of how many of each item has been gained.

 The window will now reflect this as well, so instead of displaying
  "Obtained x1 Potion"
  it will now display a max value and how much of each item is gained like so
  "Obtained 2/10 Potion(s)"
-----------------------------------
PLUGIN COMMANDS FOR COLLECTION MODE
------------------------------------
WPOPCMODE TRUE/FALSE
This command turns collection mode on / true and off / false

WPOPCSET ITEM VARIABLE MAXVALUE
This is where you setup all your items and match them with a variable & max value.
ITEM = Item ID, the number in the database.. eg: 1 = Potion in database

VARIABLE = The in game variable you want to set the item to.

Max Value = The max value for the item..  1/10  <-- 10 is the max value

WPOPCRESET ITEM
This will remove the item from the collection array and the next time you
collect an item it will no longer display in collection mode.

ITEM = The item ID in the database
----------------------------
EXAMPLES FOR COLLECTION MODE
-------------------------------
WPOPCMODE TRUE   -- Turn on collection mode

WPOPCSET 1 1 25   --- Set Item 1, to Variable 1 in game & the max amount to
                      collect is 25.
WPOPCSET 5 2 15   --- Set item 5, to Variable 2, & the max amount is 15

Now whenever I gain these items above, it will display the amount I have already
collected and  the amount I still need to collect.

I collected all of the items above and now I want to remove them and reset the
variable so I will do something like this.

WPOPCRESET 1
WPOPCRESET 5

The above WPOPCRESET commands will remove the items from the array and reset
the in game variable back to 0. In other words the items will now act as they
should before collection mode was turned on.

----------===========----------------------
MAP DISPLAY NAME CUSTOMIZATIONS
----------===========----------------------
  If enabled in the plugin manager, window pop will take control of the
  Map Display Name, so you can add message codes to make the name pop out!

  You can now use message codes for your maps display name!
  All you have to do is go into the maps setting from the editor
  and add your own message code to the Map Display Name text field.
  You can use the icon message code if you want to include icons.

----------===========----------------------
  THE ITEM NOTETAG:
----------===========----------------------
You can now use a notetag in the items section of the database to chnage the
colors of the items, when they auto pop up. This can be good for Item Rarity.
Notetag to use: <WPOP_Color: x> (x = the # of the color code you want to use)

-------------------------------------------
EXAMPLE NOTETAGS
 --------------------------------------------
<WPOP_Color: 1>  // Changes to white
<WPOP_Color: 2>  // Changed to color 2 in the color pallete of window.png

  To set a custom window pop, you can use either a plugin command or Script
 call.
----------===========----------------------
  THE PLUGIN COMMAND FOR CUSTOM POPUP:
----------===========----------------------
 Plugin Command: WPOP Duration Align Icon String

In the Icon slot put the icon index # - No icon = 0

In the Duration slot put a number to set how long before window fades out.

In the Align slot, put left, right or center, to align your string in the window.

In the string slot put the string you want to pop up.

 -------------------------------------------
  EXAMPLE COMMANDS
 ---------------------------------------------
Message codes work with window pop, I would recommend only sticking with The
codes that change color, show variables, actor name, etc. Some codes like text
size, and draw icon, may break the alignment of the message.

  Example: WPOP 120 Left 5 Welome To Oakville
           WPOP 120 Center 5 \C[3] Quest Log Updated
           WPOP 120 Center 2 \C[2] \N[1] \C[3]Is Poisoned!

----------===========----------------------
  THE SCRIPT CALL FOR CUSTOM POP UP:
----------===========----------------------

this.setWindowPop(Icon, 'String', Duration, 'Align')

Icon = The icon index number of the icon you want to display.
String = The string you want displayed in the pop up window. Remember quotes''
Duration = How long should the window stay before dissappearing.Recommended 150
Align = A string 'left', 'right', or 'center' that aligns the string in the window.

  EG: this.setWindowPop(5, 'Quest Log Updated', 150, 'left')

This will activate the window to show Icon 5, with the string Quest Log Updated!
  for 150 as the duration.

 ----------===========----------------------
  NOTES TO REMEBER:
----------===========----------------------
  In all events be sure to add a wait command between each gain item, gold, etc
  to add space in between the pop ups when gaining items. This ensures there is
  enough space between each popup for it to have smooth transitions.
*/
// =============================================================================
// Parameters
// =============================================================================

var LTN = LTN || {};
LTN.WindowPopper = LTN.WindowPopper || {};

(function(){
  'use strict';
  LTN.Param = LTN.Param || {};
  LTN.Parameters = PluginManager.parameters('LTN_WindowPop');
  LTN.Param.collectString = String(LTN.Parameters['Collection String']);
  LTN.Param.autoPop       = String(LTN.Parameters['Auto Item Pop']).toLowerCase();
  LTN._mapDisplayName     = String(LTN.Parameters['Map Display Name']).toLowerCase();
  LTN.Param.autoPopTimer  = Number(LTN.Parameters['Auto Pop Timer']);
  LTN.mapDisplayTimer     = Number(LTN.Parameters['Map Display Timer']);
  LTN.Param.mapDisplaySe  = String(LTN.Parameters['Map Display SE Switch']).toLowerCase();
  LTN.Param.gainString    = String(LTN.Parameters['Gain String']);
  LTN.Param.loseString    = String(LTN.Parameters['Lose String']);
  LTN.Param.popGoldIcon   = Number(LTN.Parameters['Gold Icon']);
  LTN.Param.autoPopAlign  = String(LTN.Parameters['Auto Pop Alignment']).toLowerCase();
  LTN.Param.popSe         = String(LTN.Parameters['Window Pop SE']);
  LTN.Param.popPitch      = Number(LTN.Parameters['SE Pitch']);
  LTN.Param.popVol        = Number(LTN.Parameters['SE Volume']);
  LTN.Param.windowX       = Number(LTN.Parameters['Window X Position']);
  LTN.Param.windowY       = Number(LTN.Parameters['Window Y Position']);
  LTN.Param.windowWidth   = Number(LTN.Parameters['Window Width']);
  LTN.Param.bgType        = String(LTN.Parameters['Background Type']).toLowerCase();
  LTN.Param.bgImage       = String(LTN.Parameters['BG Image Filename']);
  LTN.Param.bgOffsetX     = Number(LTN.Parameters['BG X Offset']);
  LTN.Param.bgOffsetY     = Number(LTN.Parameters['BG Y Offset']);
  LTN.Param.windowGradA   = String(LTN.Parameters['WindowBG Gradient 1']);
  LTN.Param.windowGradB   = String(LTN.Parameters['WindowBG Gradient 2']);
  // =============================================================================
  // Create Defualt Global Variables For Window Pop
  // =============================================================================
  var WPOP = WPOP || {};
  WPOP._queueList    = [];
  // Initialize Custom Pop Up Variables
  WPOP._popIcon      = 0;
  WPOP._popString    = '';
  WPOP._popTimer     = 0;
  WPOP._popAlign     ='Left';
  // Initialize Auto Pop Up Variables
  WPOP._itemId       = 0;
  WPOP._autoIconID   = 0;
  WPOP._autoItem     = '';
  WPOP._autoAmount   = 0;
  WPOP._autoSE       = '';
  // Initialize Auto Gold Pop Up Variables
  WPOP._autoGAmount  = 0;
  // A flag variable  to know which window is poppping up
  WPOP._currentType   = '';
  WPOP._itemType      = '';
  // Global variables for collector mode
  WPOP._collectMode   ='false';

  // =============================================================================
  // Game_System
  // =============================================================================
  LTN.WindowPop_oldGS_init = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function() {
    LTN.WindowPop_oldGS_init.call(this);
    this._itemNameArray   = [];
    this._itemVarArray    = [];
    this._itemMaxArray    = [];
  };

  Game_System.prototype.itemNameArray = function() {
    return this._itemNameArray;
  };
  Game_System.prototype.itemVarArray = function() {
    return this._itemVarArray;
  };
  Game_System.prototype.itemMaxVar = function() {
    return this._itemMaxArray;
  };

  // Push info from plugin command to arrays if not already a part of the array.
  Game_System.prototype.pushToCollectArrays = function(item, gameVar, maxVar) {
    this._itemMaxArray.push(maxVar);
    if(this._itemNameArray.indexOf(item)   <= -1) this._itemNameArray.push(item);
    if(this._itemVarArray.indexOf(gameVar) <= -1) this._itemVarArray.push(gameVar);

    // If Max Value array is larger than Item Name array remove last element
    if(this._itemNameArray.length !== this._itemMaxArray.length){
      this._itemMaxArray.splice(-1, 1);
    }
  };

  // For Plugin Command: Remove an Item(elements) from the array and reset variable
  Game_System.prototype.removeCollectElement = function(item) {
    var index = this._itemNameArray.indexOf(item);
    var arrVar = this._itemVarArray[index];
    if(index > -1){
      $gameVariables.setValue(arrVar, 0);
      this._itemNameArray.splice(index, 1);
      this._itemMaxArray.splice(index, 1);
      this._itemVarArray.splice(index, 1);
    }
  };
  // =============================================================================
  // Game Party: Assign Auto Pop Variables
  // =============================================================================
  //--------------------------------------
  // Alias Nethod: Gain Gold
  //------------------------------------------------------------------------------
  LTN.WindowPop_gameParty_GainGold = Game_Party.prototype.gainGold;
  //------------------------------------------------------------------------------
  Game_Party.prototype.gainGold = function(amount) {
    if (LTN.Param.autoPop === 'on') {
      WPOP._currentType   = 'Gold';
      WPOP._autoGAmount = amount ? amount : '';
      WPOP._popTimer    = LTN.Param.autoPopTimer ? LTN.Param.autoPopTimer : 200 ;
      WPOP._autoSE      = 'ON';
    }
    LTN.WindowPop_gameParty_GainGold.call(this, amount);
  };
  //--------------------------------------
  // Alias Nethod: gainItem
  //------------------------------------------------------------------------------
  LTN.WindowPop_oldGP_gainItem = Game_Party.prototype.gainItem;
  //------------------------------------------------------------------------------
  Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
    if (LTN.Param.autoPop === 'on') {
      var container =  this.itemContainer(item);
      if(container){
        WPOP._currentType  = 'Item';
        WPOP._popTimer    = LTN.Param.autoPopTimer ? LTN.Param.autoPopTimer : 200 ;
        WPOP._autoIconID = item ? item.iconIndex : 0;
        WPOP._autoItem   = item ? item.name : '';
        WPOP._autoAmount = amount ? amount : '';
        WPOP._itemId     = item ? item.id : 0;
        WPOP._itemType   = item? item : '';
        WPOP._autoSE     = 'ON';
        this.addArrayVar();
      }
    }
    $gameMap.requestRefresh();
    LTN.WindowPop_oldGP_gainItem.call(this, item, amount, includeEquip); //Call Original Method
  };

  // Add +1 to gamevariables from the array of variables for collection mode.
  Game_Party.prototype.addArrayVar = function() {
    if(WPOP._collectMode === 'true') {
      var curItemId     = String(WPOP._itemId);
      var curItemArrPos = $gameSystem.itemNameArray().indexOf(curItemId);
      var itemArray     = $gameSystem.itemVarArray();
      var arrVar        = itemArray[curItemArrPos];
      var oldValue      = $gameVariables.value(arrVar);
      $gameVariables.setValue(arrVar, oldValue + 1);
    }
  };

  //===========================================================================
  // Scene Map: Implement Window Pop Into Scene_Map
  //===========================================================================
  //----------------------------------------------
  // Aliased Nethod:  Create Window Pop in Scene_Map
  //------------------------------------------------------------------------------
  LTN.WindowPop_oldMapCreateDisplayObjects = Scene_Map.prototype.createDisplayObjects;
  //------------------------------------------------------------------------------
  Scene_Map.prototype.createDisplayObjects = function() {
    LTN.WindowPop_oldMapCreateDisplayObjects.call(this);
    this.createWindowPop();
  };

  //----------------------------------------------
  // New Method: Create Window Pop & add as child.
  //----------------------------------------------
  Scene_Map.prototype.createWindowPop = function() {
    this._WindowPop = new Window_Pop();
    this.addChild(this._WindowPop);
  };
  //------------------------------------------------------------------------------
  // Alised Method:  If using the Map Display name feature, overwrite to use WindowPop
  //------------------------------------------------------------------------------
  LTN.WindowPop_oldSceneMap_Start   = Scene_Map.prototype.start;
  //------------------------------------------------------------------------------
  Scene_Map.prototype.start = function() {
    if(LTN._mapDisplayName === 'on'){
      var mapName = $gameMap.displayName();
      Scene_Base.prototype.start.call(this);
      SceneManager.clearStack();
      if (this._transfer) {
        this.fadeInForTransfer();
        if(mapName) {
          WPOP._popTimer = LTN.mapDisplayTimer;
          WPOP._currentType  = 'Map';
        }
        $gameMap.autoplay();
      } else if (this.needsFadeIn()) {
        this.startFadeIn(this.fadeSpeed(), false);
      }
      this.menuCalling = false;
    } else {
      LTN.WindowPop_oldSceneMap_Start.call(this);
    }
  };
  //=============================================================================
  // New Window: Window Pop
  //=============================================================================
  function Window_Pop() {
    this.initialize.apply(this, arguments);
  }

  Window_Pop.prototype = Object.create(Window_Base.prototype);
  Window_Pop.prototype.constructor = Window_Pop;
  //-------=====---------
  //Initialize
  //-------=====---------
  Window_Pop.prototype.initialize = function(x, y) {
    var width          = LTN.Param.windowWidth;
    var height         = this.fittingHeight(5);
    var px             = LTN.Param.windowX;
    var py             = LTN.Param.windowY;
    Window_Base.prototype.initialize.call(this, px, py, width, height);
    this.opacity       = 0;
    this.clearWindowPop();
    this.refresh();
  };

  //-------=====---------
  //Update - Update Opacity + Contents If Timer is Active.
  //-------=====---------
  Window_Pop.prototype.update = function() {
    this.wpopUpdate();
    this.mapDisplayUpdate();

  };
  //-------=====---------
  //Update function for auto pop & custom pop
  //-------=====---------
  Window_Pop.prototype.wpopUpdate = function() {
    if (WPOP._popTimer > 0) {
      this.playSeOnPop();
      this.show();
      this.fadeInOpacity();
      this.refresh();
      WPOP._popTimer--;
    } else {
      this.fadeOutOpacity();
    }
  };
  //-------=====---------
  //Update function for map display name
  //-------=====---------
  Window_Pop.prototype.mapDisplayUpdate = function() {
    if (WPOP._popTimer > 0 && $gameMap.isNameDisplayEnabled()) {
      if(LTN.Param.mapDisplaySE === 'true') this.playSeOnPop();
      this.show();
      this.fadeInOpacity();
      this.refresh();
      WPOP._popTimer--;
    } else {
      this.fadeOutOpacity();
    }
  };
  //-------=====---------
  //Refresh
  //-------=====---------
  Window_Pop.prototype.refresh = function() {
    this.contents.clear();
    this.backgroundManager(LTN.Param.bgType);
    this.contentManager(WPOP._currentType);
  };

  //Draw Content according to type
  Window_Pop.prototype.contentManager = function(type) {
    var align    = LTN.Param.autoPopAlign;
    var goldIcon = LTN.Param.popGoldIcon;
    var itemNameArray = $gameSystem.itemNameArray();
    var curItemId   = String(WPOP._itemId);
    switch (type) {
      case 'Item':
      if(WPOP._collectMode === 'true' && itemNameArray.indexOf(curItemId) > -1){
        this.drawItemCollector(WPOP._autoIconID, WPOP._autoItem, align);
      } else {
        this.drawItemContents(WPOP._autoIconID, WPOP._autoItem, WPOP._autoAmount, align);
      }
      break;
      case 'Gold':
      this.drawGoldContents(goldIcon, WPOP._autoGAmount, align);
      break;
      case 'Custom':
      this.drawCustomContents(WPOP._popIcon, WPOP._popString, WPOP._popAlign);
      break;
      case 'Map':
      this.drawMapDisplay(align);
      break;
    }
  };

  Window_Pop.prototype.backgroundManager = function(type){
    var bgWidth = LTN.Param.windowWidth;
    //Check which BG to use.
    switch (type) {
      // Image choice
      case 'image':
      this.drawBackgroundImage();
      break;
      // Gradient Choice
      case 'gradient':
      this.drawBackgroundGradient(0, 0, bgWidth, this.lineHeight(2));
      break;
      // Defualt Choice
      default:
      this.drawBackgroundGradient(0, 0, bgWidth, this.lineHeight(2));
      break;
    }
  };

  //-------=====---------
  // Draw contents for Auto Item Pop
  //-------=====---------
  Window_Pop.prototype.drawMapDisplay = function(align) {
    var mapName = $gameMap.displayName();
    var x = this.alignPopText(mapName, LTN.Param.windowWidth, align);
    if ($gameMap.displayName()) {
      this.drawTextEx(mapName, x, 0);
    }
  };
  //-------=====---------
  // Draw contents for Auto Item Pop
  //-------=====---------
  Window_Pop.prototype.drawItemContents = function(icon, item, amount, align) {
    var gainString  = LTN.Param.gainString;
    var loseString  = LTN.Param.loseString;
    var increment   = this.checkIncrement(amount, gainString , loseString);
    var newAmount   = this.cleanString(String(amount));
    var coloredItem = this.addColorCodeTo(item);
    var itemString = '';
    itemString  = increment + newAmount + ' ' + coloredItem;
    var tx = this.alignPopText(itemString, LTN.Param.windowWidth, align);
    var ix = tx - 32;

    this.drawIcon(icon, ix, 2);
    this.drawTextEx(itemString, tx, 0);
  };
  //-------=====---------
  // Draw contents for Auto Item Pop Collection Mode
  //-------=====---------
  Window_Pop.prototype.drawItemCollector = function(icon, item, align){
    // String Variables
    var gainString   = LTN.Param.collectString;
    var coloredItem  = this.addColorCodeTo(item);
    var itemString   = '';
    // Array Variables
    var curItemId    = String(WPOP._itemId);
    var itemArray    = $gameSystem.itemNameArray();
    var itemVarArray = $gameSystem.itemVarArray();
    var maxValArray  = $gameSystem.itemMaxVar();
    var arrPos       = itemArray.indexOf(curItemId);
    var arrVar       = itemVarArray[arrPos];
    var arrMaxVal    = maxValArray[arrPos];

    // Create Display Variables From Arrays
    var collectCount = $gameVariables.value(arrVar);
    var collectMax   = arrMaxVal;
    // If item matches an array element then proceed
    if(itemArray.indexOf(curItemId) > -1) {
      itemString = gainString + ' ' + collectCount + '/'+ collectMax + ' ' + coloredItem + '(s)';
      var tx = this.alignPopText(itemString, LTN.Param.windowWidth, align);
      var ix = tx - 32;
      this.drawIcon(icon, ix, 2);
      this.drawTextEx(itemString, tx, 0);
    }
  };
  //-------=====---------
  // Draw contents for Auto Gold Pop
  //-------=====---------
  Window_Pop.prototype.drawGoldContents = function(icon, amount, align) {
    var gainString = LTN.Param.gainString;
    var loseString = LTN.Param.loseString;
    var increment  = this.checkIncrement(amount, gainString, loseString);
    var newAmount  = this.cleanString(String(amount));
    var goldString = increment +  newAmount + ' ' + TextManager.currencyUnit;
    var tx = this.alignPopText(goldString, LTN.Param.windowWidth, align);
    var ix = tx - 32;

    this.drawIcon(icon, ix, 2);
    this.drawTextEx(goldString , tx, 0);
    // }
  };
  //-------=====---------
  // Draw contents For Custom Call
  //-------=====---------
  Window_Pop.prototype.drawCustomContents = function(icon, string, align) {
    var tx = this.alignPopText(string, LTN.Param.windowWidth, align);
    var ix = tx - 32;
    this.drawTextEx(string, tx, 0);
    this.drawIcon(icon, ix, 2);
  };
  //-------=====---------
  // Draw Background
  //-------=====---------
  Window_Pop.prototype.drawBackgroundGradient = function(x, y, width, height) {
    var color1 = LTN.Param.windowGradA;
    var color2 = LTN.Param.windowGradB;
    this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
    this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
  };
  //-------=====---------
  // Draw Background Image
  //-------=====---------
  Window_Pop.prototype.drawBackgroundImage = function() {
    this._backSprite = ImageManager.loadSystem(LTN.Param.bgImage);
    this._backSprite1 = new Sprite(this._backSprite);
    this._backSprite1.x       = LTN.Param.bgOffsetX;
    this._backSprite1.y       = LTN.Param.bgOffsetY;
    this.addChildToBack(this._backSprite1);
    //
  };
  //-------=====---------
  //New Method: Window Pop Transparent
  //-------=====---------
  Window_Pop.prototype.hide = function() {
    this.visible = false;
  };
  //-------=====---------
  //New Method: Window Pop Visible
  //-------=====---------
  Window_Pop.prototype.show = function() {
    this.visible = true;
  };
  //-------=====---------
  // New Method: Update WindowPop Opacity
  //-------=====---------
  Window_Pop.prototype.fadeInOpacity = function() {
    this.contentsOpacity += 16;
  };
  //-------=====---------
  // New Method: Update WindowPop Opacity
  //-------=====---------
  Window_Pop.prototype.fadeOutOpacity = function() {
    if (this.contentsOpacity > 0) {
      this.contentsOpacity -= 16;
    } else {
      this.clearWindowPop();
    }
  };
  //-------=====---------
  // New Method: Clear Window Pop
  //-------=====---------
  Window_Pop.prototype.clearWindowPop = function() {
    WPOP._popIcon        = 0;
    WPOP._popString      = '';
    WPOP._popTimer       = 0;
    WPOP._autoIconID     = 0;
    WPOP._autoItem       = '';
    WPOP._autoAmount     = 0;
    WPOP._autoGAmount    = 0;
    WPOP._currentType      = '';
    this.contentsOpacity = 0;
    this._refreshActive = false;
    this.hide();
  };
  //-------=====---------
  // New Method: Play Pop Up Sound Effect
  //-------=====---------
  Window_Pop.prototype.playSeOnPop = function() {
    if (WPOP._autoSE === 'ON') {
      this.popSe();
      WPOP._autoSE = 'OFF';
    }
  };

  //-------=====---------
  // New Method: To Align Auto Pop string for drawTextEx methods x value.
  //-------=====---------
  Window_Pop.prototype.alignPopText = function(string, maxWidth, align) {
    var messageCodesWidth = this.adjustStringWidth(string);
    var textWidth          = this.textWidth(string);
    var stringWidth        =  textWidth - messageCodesWidth;
    var finalX = 0;
    switch (align) {
      case 'center':
      finalX = (maxWidth - stringWidth) / 2;
      break;
      case 'left':
      finalX = 32;
      break;
      case 'right':
      finalX =  maxWidth - stringWidth;
      break;
    }
    if(finalX < 32) finalX = 32;
    return finalX;
  };
  //-------=====---------
  // New Method: To adjust the alignment when message codes are present in string
  //-------=====---------
  Window_Pop.prototype.adjustStringWidth = function(string) {
    var widthToRemove = '';
    var toAdjust = string.match(/(\\[CNVG]\[\d*\])/g);
    if(!toAdjust) return 0;
    for (var i = 0 ; i < toAdjust.length ; i++) {
      widthToRemove += toAdjust[i];
    }
    var removedWidth = this.textWidth(widthToRemove);
    return removedWidth;
  };
  //-------=====---------
  // New Method: Clean the string, to remove the minus (-) symbol from item.amount
  //-------=====---------
  Window_Pop.prototype.cleanString = function(string) {
    var oldString = string;
    if(!oldString) return;
    var cleanString = oldString.replace(/(^-)/g,'');
    return cleanString;
  };
  //-------=====---------
  // Check the amount of of item being gained or lost, & change string accordingly
  //-------=====---------
  Window_Pop.prototype.checkIncrement = function(amount, gainString, loseString) {
    var increment = '';
    if(amount > 0){
      increment  = gainString;
    } else if(amount < 0) {
      increment  = loseString;
    }
    return increment;
  };
  //-------=====---------
  // Sort items, and set the item type.
  //-------=====---------
  Window_Pop.prototype.sortItemType = function(item) {
    var itemType = '';
    if (DataManager.isItem(item)) {
      itemType = 'item';
    } else if (DataManager.isWeapon(item)) {
      itemType = 'weapon';
    } else if (DataManager.isArmor(item)) {
      itemType = 'armor';
    } else {
      itemType = '';
    }
    return itemType;
  };
  //-------=====---------
  // Set the notetag according to type of item
  //-------=====---------
  Window_Pop.prototype.getTagByItemType = function(itemType, meta) {
    var notetag = '';
    itemType = this.sortItemType(WPOP._itemType);
    switch (itemType) {
      case 'armor':
      notetag = $dataArmors[WPOP._itemId].meta.WPOP_Color;
      break;
      case 'item':
      notetag = $dataItems[WPOP._itemId].meta.WPOP_Color;
      break;
      case 'weapon':
      notetag = $dataWeapons[WPOP._itemId].meta.WPOP_Color;
      break;
    }
    return notetag;
  };
  //-------=====---------
  // Add the color code from notetag to string
  //-------=====---------
  Window_Pop.prototype.addColorCodeTo = function(string) {
    var colorCode = this.getTagByItemType();
    var newString = '';
    if(colorCode){
      var colorCodeString = '\\C[' + colorCode + ']';
      newString = colorCodeString.replace(/\s/g, '') + string;
      return newString;
    } else {
      return string;
    }
  };
  //-------=====---------
  // New Method: popSe, Setup sound effect object
  //-------=====---------
  Window_Pop.prototype.popSe = function() {
    var popSe    = {};
    popSe.name   = LTN.Param.popSe;
    popSe.pitch  = LTN.Param.popPitch;
    popSe.volume = LTN.Param.popVol;
    popSe.pan    = 0;
    AudioManager.playSe(popSe);
  };

  // =============================================================================
  // New Method: Game_Interpreter.. Create Window Pop Script Call
  // =============================================================================
  Game_Interpreter.prototype.setWindowPop = function(icon, string, timer, align) {
    WPOP._popIcon       = icon ? icon : 0;
    WPOP._popString     = string ? string : '';
    WPOP._popTimer      = timer ? timer : 120;
    WPOP._popAlign      = align ? align : 'left';
    WPOP._currentType   = 'Custom';
    WPOP._autoSE        = 'ON';
  };
  // =============================================================================
  // Old Method: Game_Interpreter.. Create Plugin Command
  // =============================================================================
  LTN.WPOP_oldGPpluginCommand = Game_Interpreter.prototype.pluginCommand;
  //-------=====---------
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    LTN.WPOP_oldGPpluginCommand.call(this, command, args);
    var pluginString = '';
    switch (command) {
      case 'WPOP':
      // WPOP TIMER ALIGN ICON STRING
      var j = args.length;
      for (var i = 3; i < j; i++) {
        if (i < j){
          pluginString  += args[i] ? args[i] : '';
          pluginString  += " ";
        }
      }
      WPOP._currentType  = 'Custom';
      WPOP._popTimer    = args[0] ? Number(args[0]) : 0;
      WPOP._popAlign    = args[1] ? String(args[1]).toLowerCase() : 'left';
      WPOP._popIcon     = args[2] ? Number(args[2]) : 0;
      WPOP._popString = pluginString;
      WPOP._autoSE     = 'ON';
      break;

      case 'WPOPCMODE':
      // WPOPCMODE TRUE/FALSE
      WPOP._collectMode = args[0] ? String(args[0]).toLowerCase() : 'false';
      break;

      case 'WPOPCSET':
      // WPOPCSET Item Variable MaxValue
      $gameSystem.pushToCollectArrays(args[0], args[1], args[2]);
      break;

      case 'WPOPCRESET':
      // WPOPCRESET Item
      $gameSystem.removeCollectElement(args[0] ? args[0] : 0);
      break;
    }
  };
})();
// =============================================================================
// THE END, Based On A True Story!
// =============================================================================
