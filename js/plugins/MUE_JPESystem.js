/*:
@plugindesc |V1.1.0.0| This is ment to replace Yanfly's Job Points system with my own custom system with more options
@author MutationIndustries(MuteDay)

@param ---Text Options---
@default -----------------------

@param  JP Text
@desc This Tells the game how to Display the JP ingame(Default JP)
@default JP

@param JP Gained In Battle Text
@desc This determains how JP gained in battle is displayed at end of battle
%1=actor %2=Amount %3=JP text %4=JP Icon(Default %1 gains %2%3%4!)
@default %1 gains %2%3%4!

@param JP Option Sepparator String
@desc This is the string the game will use when drawing options(default JP System Options)
@default JP System Options

@param JP Icon Menu Text 
@desc this tells the game to display a Certian string in options Menu(Default JP Icon In Menu?)
@default JP Icon In Menu?

@param Menu JP Format
@desc How the JP text format in the menu appears.
%1 - Value     %2 - Amount     %3 - Icon(default %1\c[4]%2\c[0]%3)
@default %1\c[4]%2\c[0]%3

@param ---Values---
@default ----------------------

@param Default Subclass Gain
@desc This is the default value used when using the trickle system(default 0)
@default 0

@param Default Tickle 
@desc This is the percentage that is used for the trickle system(default 0)
@default 0

@param Max JP 
@desc This is the maximum JP an actor can have per class.(default 9999)
@default 9999

@param ---Forumulas---
@default ------------------------

@param JP Per Action
@desc This is the eval of the amount of Job Points that are gained per actions(default 10+(Math.random()+1)*10)
@default 10+(Math.random()+1)*10

@param JP Per Level
@desc This is the eval of the amount of Job Points that are gained per LevelUp(default 50 + Math.randomInt(10))
@default 50 + Math.randomInt(10)

@param JP Per Enemy
@desc This is the eval of the amount of Job Points that are gained per Enemy Killed(default 50 + Math.randomInt(10))
@default 50 + Math.randomInt(10)

@param ---Display---
@default -----------------------

@param JP Icon
@desc This is the icon that is displayed (default 87)
@default 87

@param --Enable & Disable
@default ----------------------

@param User Icon Display 
@desc This tells the game weither or not to Allow user to turn off the JP Icon(default false)
@default false

@param Display JP Icon
@desc This allows you to tell game to or not to draw the JP Icon (default true)
@default true

@param Display JP at Menu
@desc tells the game wither or not to draw the JP points on the menu(default true)
@default true

@param Show Battle Gain
@desc This Tells the game If it should show JP Gain at end of battle(default false)
@default false

@help
==================================================
Inportant
==================================================
Always check the Website http://mutationengine.altervista.org/PluginsList.html
For updates, the forum links will not be updated

When released This will work with any plugins that have been updated or built to
use this one, please do not mix this up with Yanfly's Features Unfortunantly the way
this Version is Built it will not be compatable, I may update to reflect the changes
But I will not Support Yanfly's Victory Aftermath.

==================================================
Info
==================================================
This Plugin By its self will not add any major features into the game.
But when the extra features are released for it or that are ment to
be used alot side this plugin it will add a massive ammout of extras

Currently you have a few options 
Gain JP on level up
Gain JP on Action
Gain JP on Enemy Kill

If any of the options are set to anything but 0, the actors main class will gain
that amount of Job Points. And when the class change Feature is released for my
engine this will be when you change classes you will gain JP for that class,
this also includes two new features that where not built into yanfly's Job Point system
that can be turned off

Trickle System- this allows all actors that are in the party and are not the main character gain
a Percentage of the amount gained by actor 
Subclass Trickle- This allows the subclass to gain JP is there is a subclass this works along side
the Trickle System :)


Some Extra features will be unlocked once I Release the MUE_PluginOptions Plugin
==================================================
Required Plugins
==================================================
MUE_MainCore: http://mutationengine.altervista.org/maincore.html
Optinal:
MUE_PluginOptions: (Not Currently Released)

==================================================
Plugin Params
==================================================

---Text Options---
JP Text: This Tells the game how to Display the JP ingame(Default JP)
JP Gained In Battle Text: This determains how JP gained in battle is displayed at end of battle
%1=actor %2=Amount %3=JP text %4=JP Icon(Default %1 gains %2%3%4!)
JP Option Sepparator String: This is the string the game will use when drawing options(default JP System Options)
JP Icon Menu Text: this tells the game to display a Certian string in options Menu(Default JP Icon In Menu?)
Menu JP Format: How the JP text format in the menu appears.
%1 - Value     %2 - Amount     %3 - Icon(default %1\c[4]%2\c[0]%3)

---Variables------
Default Subclass Gain: This is the default value used when using the trickle system(default 0)
Default Tickle: This is the percentage that is used for the trickle system(default 0)
Max JP: This is the maximum JP an actor can have per class.(default 9999)

---Forulas--------
JP Per Action: This is the eval of the amount of Job Points that are gained per actions(default 10+(Math.random()+1)*10)
JP Per Level: This is the eval of the amount of Job Points that are gained per LevelUp(default 50 + Math.randomInt(10))
JP Per Enemy: This is the eval of the amount of Job Points that are gained per Enemy Killed(default 50 + Math.randomInt(10))

---Display--------
JP Icon: This is the icon that is displayed(default 87)

---Enable And Disable---
User Icon Display: This tells the game weither or not to Allow user to turn off the JP Icon(default false)
Display JP Icon: This allows you to tell game to or not to draw the JP Icon (default true)
Display JP at Menu: tells the game wither or not to draw the JP points on the menu(default true)
Show Battle Gain: This Tells the game If it should show JP Gain at end of battle(default false)

==================================================
Updates History
==================================================
1.0:
Initial Release

==================================================
Note Tag Data
==================================================
(Please Note that all notetags are case sensitive)
Enemy Notetags:
<JP: x>
When the enemy is defeated, the party members present will gain x JP each.

Class, Weapon, Armor, and State Notetag
<JPRate: x>
This changes the rate of JP gained by (float value IE: 1.0=100%) all have a 
default of 1.0 which is 100% if you wish it to do half the amout put 0.5
and for double put 2.0

Skill and Item Notetags:
<TargetJP: x>
This makes it so that the target actor affected by this skill or item will
gain x amount of JP.

<gainJP: x>
This makes it so that the actor using this skill or item will gain x
amount of JP instead of the default amount of JP found in the parameters.

Actor Notetags:
<StartingJP: x>
Sets the actor's starting JP value to be x for the actor's initial class.

<Class[classID]SJP: Amount>
Replace [classID] (Yes brackets and all and no space) with the class id
Replace Amount with the amount you wish that character to have at the start
Sets the actors Starting JP for [classID] to be Amount

<JPRate: x>
This changes the rate of JP gained by (float value IE: 1.0=100%) all have a 
default of 1.0 which is 100% if you wish it to do half the amout put 0.5
and for double put 2.0

==================================================
Plugin Commands
==================================================
gainJP actorId JP
gainJP actorId JP classId
Replace 'actorId' with the ID of the actor you wish to change the JP of.
Replace 'JP' with the amount of JP you wish to alter. If you are using
'classId', replace it with the ID of the actor's class you wish to alter.
This command will let the actor gain JP.

loseJP actorId JP
loseJP actorId JP classId
Replace 'actorId' with the ID of the actor you wish to change the JP of.
Replace 'JP' with the amount of JP you wish to alter. If you are using
'classId', replace it with the ID of the actor's class you wish to alter.
This command will cause the actor to lose JP.

setJP actorId JP
setJP actorId JP classId
Replace 'actorId' with the ID of the actor you wish to change the JP of.
Replace 'JP' with the amount of JP you wish to alter. If you are using
'classId', replace it with the ID of the actor's class you wish to alter.
This command will set the actor's JP to a particular value.

==================================================
Script Calls
==================================================
Use the Plugin Commands Instead of Script calls

==================================================
Extra Data
==================================================

==================================================
ScreenShots
==================================================

==================================================

Notes: If you like any of the mutation engine plugins
consider supporting me, your support will allow me to
 build you more of what you want
==================================================

==================================================
Credits and Inportant info
==================================================
Credits:
Myself
The rpg maker team for creating mv


Info:
Feel free to use this for any type of project some limits apply
1) Do not claim the work as your own
2) Do not post anywhere without my constent
3) Do not Make edits and then post anywhere
==================================================
*/
//#region Import and Namepace setup
var Imported=Imported||{};
var MUE=MUE||{};
MUE.JP=MUE.JP||{};
Imported.MUE_JPESystem=true;
//#endregion
(function($){
    //#region Namespace Variables 
    var paras=PluginManager.parameters('MUE_JPESystem');
    $.UserIcon=eval(String(paras['User Icon Display']||"false"));
    $.IconShow=eval(String(paras['Display JP Icon']||"true"));
    $.JPIcon=Number(paras['JP Icon']||"87");
    $.EnDeathJP=String(paras['JP Per Enemy']||"50 + Math.randomInt(10)");
    $.LevelUpJP=String(paras['JP Per Level']||"100 + Math.randomInt(100)");
    $.ActionJP=String(paras['JP Per Action']||"10 + Math.randomInt(10)");
    $.SubTricRate=Number(paras['Default Subclass Gain']||"0");
    $.MaxJP=Number(paras['Max JP']||"9999");
    $.JPText=String(paras['JP Text']||"JP");
    $.JPGainText=String(paras['JP Gained In Battle Text']||"%1 gains %2%3%4!");
    $.JPTric=String(paras['Default Tickle']||"0");
    $.ShowBattleGain=eval(paras['Show Battle Gain']||"true");
    $.JPMenuFormat=String(paras['Menu JP Format']||"%1\c[4]%2\c[0]%3");
    $.JPOptSepString=String(paras['JP Option Sepparator String']||"JP System Options");
    $.JPIconShowOptString=String(paras['JP Icon Menu Text']||"JP Icon In Menu?");
    $.isNotesLoaded=false;
    //#endregion

    //#region Notetag Reading
    var MUE_JP_MUE_onDatabaseFinishedLoading=MUE.onDatabaseFinishedLoading;
    MUE.onDatabaseFinishedLoading=function() {
        MUE_JP_MUE_onDatabaseFinishedLoading.call(this);
            proccessEnemyNotes($dataEnemies);
            proccessActorNotes($dataActors);
            proccessItemSkillNotes($dataSkills);
            proccessItemSkillNotes($dataItems);
            proccessRestNotes($dataClasses);
            proccessRestNotes($dataWeapons);
            proccessRestNotes($dataArmors);
            proccessRestNotes($dataStates);
    };
    proccessEnemyNotes=function(group) {
        for(var n=1;n<group.length;n++) {
            var obj=group[n];
            obj.JP=obj.meta['JP']||$.EnDeathJP;
        }
    };

    proccessActorNotes=function(group) {
        for(var n=1;n<group.length;n++) {
            var obj=group[n];
            obj.JPRate=obj.meta.JPRate||1.0;
            obj.StartingJP=[];
            obj.StartingJP.push(null);
            for(var x=0;x<$dataClasses.length;x++)
            {
                var temp=eval(String("obj.meta.Class"+x+"SJP"))||0;
                if (isNaN(temp))
                    temp=0;
                obj.StartingJP[x]=Number(temp);
            }
            obj.StartingJP[obj.classId]+=obj.meta.StartingJP||0;
        }
    };
    proccessItemSkillNotes=function(group) {
        for(var n=1;n<group.length;n++) {
            var obj=group[n];
            obj.gainJP=obj.meta.gainJP||$.ActionJP;
            obj.targetgainJP=Number(obj.meta.TargainJP||0);
        }
    };
    proccessRestNotes=function(group) {
        for(var n=1;n<group.length;n++) {
            var obj=group[n];
            obj.JPRate=Number(obj.meta.JPRate||1.0);
        }
    };
    //#endregion

    //#region BattleManager
    var MUE_JP_BattleManager_makeRewards=BattleManager.makeRewards;
    BattleManager.makeRewards=function() {
        MUE_JP_BattleManager_makeRewards.call(this);
        this.gainJP();
    };

    BattleManager.gainJP=function() {
        var JP=$gameTroop.JPTotal();
        if(isNaN(JP))
            JP=0;
        $gameMessage.newPage();
        $gameParty.members().forEach(function(actor) {
            actor.gainBattleJP(JP);
        });
    };

    var MUE_JP_BM_displayRewards=BattleManager.displayRewards;
    BattleManager.displayRewards=function() {
        MUE_JP_BM_displayRewards.call(this);
        this.displayJPGain();
    };

    BattleManager.displayJPGain=function() {
        if($.ShowBattleGain) {
            var JP=$gameTroop.JPTotal();
            if(isNaN(JP))
                JP=0;
            $gameMessage.newPage();
            $gameParty.members().forEach(function(actor) {
                var fmt=$.JPGainText;
                JP=JP+actor._BattleJP;
                var text=fmt.format(actor.name(),actor.BattleJP(),
                    $.JPText,'\\i['+$.JPIcon+']');
                actor.gainJP(JP);
                $gameMessage.add('\\.'+text);
            });
        }
        else
            return;
    };
    //#endregion

    //#region GameBattler
    var MUE_JP_GBat_UseItem=Game_Battler.prototype.useItem;
    Game_Battler.prototype.useItem=function(item) {
        MUE_JP_GBat_UseItem.call(this,item);
        if(!$gameParty.inBattle()) return;
        if(this.isActor()) this.gainBattleJP(eval(item.gainJP),this.currentClass().id);
    };
    var MUE_JP_GBat_onBattleStart=Game_Battler.prototype.onBattleStart;
    Game_Battler.prototype.onBattleStart=function() {
        MUE_JP_GBat_onBattleStart.call(this);
        this._BattleJP=0;
    };
    var MUE_JP_GBat_onBattleEnd=Game_Battler.prototype.onBattleEnd;
    Game_Battler.prototype.onBattleEnd=function() {
        MUE_JP_GBat_onBattleEnd.call(this);
        this._BattleJP=0;
    };
    //#endregion

    //#region Game_Actor
    var MUE_JP_GAct_setup=Game_Actor.prototype.setup;
    Game_Actor.prototype.setup=function(actorId) {
        MUE_JP_GAct_setup.call(this,actorId);
        this.initJP();
        this._BattleJP=0;
    };
    Game_Actor.prototype.JP=function(classID) {
        if(classID==undefined) classID=this.currentClass().id;
        return this._JP[classID];
    };
    Game_Actor.prototype.initJP=function() {
        var act=this.actor();
        this._JP=[];
        this._JP.push(null);
        for(var i=0;i<$dataClasses.length;i++) {
            this._JP.push(null);
            if(act.StartingJP) {
                var JP=act.StartingJP[i]||0;
                this.setJP(JP,i);
            }
            else
            {
                this.setJP(0,i);
            }
        }
    };
    Game_Actor.prototype.setJP=function(value,classID) {
        value=parseInt(value);
        if(isNaN(value)) value=0;
        if(classID==undefined) classID=this.currentClass().id;
        if(classID==0) return;
        this._JP[classID]=Math.max(0,value);
        if($.MaxJP>0)
            this._JP[classID]=Math.min($.MaxJP,value);
    };
    Game_Actor.prototype.JPRate=function() {
        var rate=1.0;
        rate*=this.actor().JPRate;
        rate*=this.currentClass().JPRate;
        var equips=this.equips();
        for(var i=0;i<equips.length;i++) {
            var item=equips[i];
            if(item) rate*=item.JPRate;
        }
        var states=this.states();
        for(var i=0;i<states.length;i++) {
            var state=states[i];
            if(state) rate*=state.JPRate;
        }
        return rate;
    };
    Game_Actor.prototype.gainBattleJP=function(value,classID){
        value=parseInt(value);
        if(isNaN(value)) value=0;
        if(classID==undefined) classID=this.currentClass().id;
        if($gameParty.inBattle()) this._BattleJP+=value;
        if(isNaN(this._BattleJP))
            this._BattleJP=0;
    }

    Game_Actor.prototype.gainJP=function(value,classID,NoTrick) {
        value=parseInt(value);
        if(isNaN(value))
            value=0;
        if(classID==undefined)
            classID=this.currentClass().id;
        value=Math.floor(value*this.JPRate());
        this.setJP(this.JP(classID)+value,classID);
        if(NoTrick==true) return;
        this.JPTrickle(value,classID);
        this.subTickle(value);
    };
    Game_Actor.prototype.BattleJP=function() {
        this._BattleJP=this._BattleJP||0;
        return this._BattleJP;
    };
    Game_Actor.prototype.loseJP=function(value,classId) {
        classId=classId||this.currentClass().id;
        this.setJP(this.JP(classId)-value,classId);
    };
    var MUE_JP_GAct_changeClass=Game_Actor.prototype.changeClass;
    Game_Actor.prototype.changeClass=function(classID,keepEXP) {
        this._preventJPLevelUpGain=true;
        MUE_JP_GAct_changeClass.call(this,classID,keepEXP);
        this._preventJPLevelUpGain=false;
    };
    var MUE_JP_GAct_levelUp=Game_Actor.prototype.levelUp;
    Game_Actor.prototype.levelUp=function() {
        MUE_JP_GAct_levelUp.call(this);
        if(this._preventJPLevelUpGain) return;
        var value=eval($.LevelUpJP);
        this.gainJP(value,this.currentClass().id,true);
    };
    Game_Actor.prototype.JPTrickle=function(value,classID) {
        var trick=(value*($.JPTric/100));
        if(!classID) {
            classID=this.currentClass.id;
        }
        $gameParty.members().forEach(function(actor) {
            if(actor!=this)
                if(isNaN(trick)) trick=0;
            //if(classID==undefined) classID=actor.currentClass().id;
            trick=Math.floor(trick*actor.JPRate());
            actor.setJP(actor.JP(classID)+trick,classID);
        });
    };
    Game_Actor.prototype.subTickle=function(value) {
        if(this.subClass) {
            var trick=(value*($.SubTricRate/100));
            this.setJP(actor.JP(actor.subClass().id)+Math.floor(trick),actor.subClass().id);
        }
    };
    //#endregion

    //#region Game_Enemy
    Game_Enemy.prototype.JP=function() {
        return eval(this.enemy().JP);
    };

    //#endregion

    //#region Game_Action
    var MUE_JP_GAction_ApplyItemUserEffect=Game_Action.prototype.applyItemUserEffect;
    Game_Action.prototype.applyItemUserEffect=function(target) {
        MUE_JP_GAction_ApplyItemUserEffect.call(this,target);
        this.applyItemJPEffect(target);
    }
    Game_Action.prototype.applyItemJPEffect=function(target) {
        var item=this.item();
        if(!item) return;
        if(target.isActor())
            target.gainBattleJP(item.targetgainJP||0);
    };
    var MUE_JP_GAction_hasItemAnyValidEffects=Game_Action.prototype.hasItemAnyValidEffects;
    Game_Action.prototype.hasItemAnyValidEffects=function(target) {
        var item=this.item();
        if(!item) return;
        if(target.isActor()&&item.targetgainJP!==0) return true;
        return MUE_JP_GAction_hasItemAnyValidEffects.call(this,target);
    };
    //#endregion

    //#region Game_Troop
    Game_Troop.prototype.JPTotal=function() {
        return this.deadMembers().reduce(function(r,enemy) {
            return r+enemy.JP();
        },0);
    };
    //#endregion

    //#region Game_Interperter
    var MUE_JP_GInter_PlugCommand=Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand=function(command,args) {
        MUE_JP_GInter_PlugCommand.call(this,command,args);
        if(command==='gainJP') this.modifyJP('gain',args);
        if(command==='loseJP') this.modifyJP('lose',args);
        if(command==='setJP') this.modifyJP('set',args);
    };

    Game_Interpreter.prototype.modifyJP=function(type,args) {
        if(!args) return;
        var actorId=parseInt(args[0]);
        var actor=$gameActors.actor(actorId);
        var JPValue=args[1]||0;
        JPValue=parseInt(JPValue);
        var classId=args[2]||0;
        classId=parseInt(classId);
        if(JPValue<=0) return;
        if(classId<=0) classId=actor.currentClass().id;
        if(type==='gain') {
            actor.gainJP(JPValue,classId);
        } else if(type==='lose') {
            actor.loseJP(JPValue,classId);
        } else if(type==='set') {
            actor.setJP(JPValue,classId);
        }
    };
    //#endregion

    //#region Window_Base
    var MUE_JP_WinBase_dAClass=Window_Base.prototype.drawActorSimpleStatus;
    Window_Base.prototype.drawActorSimpleStatus=function(actor,wx,wy,ww) {
        //this._drawMenuJP=eval($.IconShow);
        MUE_JP_WinBase_dAClass.call(this,actor,wx,wy,ww);
        //this._drawMenuJP=undefined;
    };

    var MUE_JP_WinBase_drawActorClass=Window_Base.prototype.drawActorClass;
    Window_Base.prototype.drawActorClass=function(actor,wx,wy,ww) {
        ww=ww||168;
        MUE_JP_WinBase_drawActorClass.call(this,actor,wx,wy,ww);
        //if(!this._drawMenuJP) return;
        var classId=actor.currentClass().id;
        this.drawActorJP(actor,classId,wx,wy,ww,'right');
    };

    Window_Base.prototype.drawActorJP=function(actor,id,wx,wy,ww,align) {
        var JP=actor.JP(id);
        var icon='\\i['+$.JPIcon+']';
        if(!$.IconShow) icon="";
        var fmt=$.JPMenuFormat;
        var text=fmt.format(JP,$.JPText,icon);
        if(align==='left') {
            wx=0;
        } else if(align==='center') {
            wx+=(ww-this.textWidthEx(text))/2;
        } else {
            wx+=ww-this.textWidthEx(text);
        }
        this.drawTextEx(text,wx,wy);
    };

    Window_Base.prototype.textWidthEx=function(text) {
        return this.drawTextEx(text,0,this.contents.height);
    };
    //#endregion

    //#region End of File Runs
    if(Imported.MUE_PluginToOptions&&$.UserIcon) {
        MUE.OptCMD=MUE.OptCMD||{};
        $.getIconShowText=function() {
            return $.IconShow?'Enabled':'Disabled';
        };
        $.changeOption=function() {
            if(!this.IconShow)
                $.IconShow=true;
            else
                $.IconShow=false;
        };
        MUE.OptCMD.addCMD('JPSep','MUE.JP.JPOptSepString',"",undefined,"false");
        MUE.OptCMD.addCMD('JPShow','MUE.JP.JPIconShowOptString',"",undefined,undefined);
        MUE.OptCMD.setOptionLink('MUE.JP.getIconShowText()','MUE.JP.IconShow','MUE.JP.changeOption()','MUE.JP.changeOption()','JPShow');
        MUE.OptCMD.setOptionLink('this.getSepValue();','this.getSepValue();','this.getSepValue();','this.getSepValue();','JPSep');
        MUE.OptCMD.registerValueForSave('JPShow',"Bool");
    }
    //#endregion
})(MUE.JP)