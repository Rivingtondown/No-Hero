//=============================================================================
// RuntimeExport.js
//=============================================================================

/*:
 * @plugindesc Allows to export specific events while the game is running.
 * @author EvilCat
 * @email soevilcat@mail.ru
 * @version 1.3
 
 * @param All Events Key
 * @desc Show JSON for all current events.
 * @default F12
 
 * @param Target by MMB
 * @desc Turn on to spy on event by Middle Mouse Button
 * @default on
 
 * @help
 * Use Middle Mouse Button to click event and get its JSON.
 * Use F12 to view all current events' JSON.
 * Creative Commons 4.0 Attribution license
 */

"use strict";

if (!EvilCat) throw new Error('Requires EvilCat Utils plugin!');
if (!EvilCat.Controls) throw new Error('Requires EvilCat Controls plugin!');

(function()
{
	var Window_ExportCommand=function()
	{
		Window_HorzCommand.apply(this, arguments);
	}
	EvilCat.extend(Window_ExportCommand, Window_HorzCommand);
	
	Window_ExportCommand.prototype.windowWidth=function()		{ return Graphics.boxWidth; };
	Window_ExportCommand.prototype.numVisibleRows=function()	{ return 1; }
	Window_ExportCommand.prototype.maxCols=function()			{ return 5; }
	
	Window_ExportCommand.prototype.initialize=function()
	{
		Window_HorzCommand.prototype.initialize.apply(this, arguments);
		this.lastIndex=null;
	}
	
	Window_ExportCommand.prototype.makeCommandList=function()
	{
		var isMapPresent=SceneManager.isInStack(Scene_Map);
		var events_count = isMapPresent ? $gameMap.events().length : 0;
		
		this.addCommand('Prev', 'Prev', events_count>1);
		this.addCommand('Copy Event', 'Copy',
			isMapPresent && SceneManager._scene.event ? true : false);
		this.addCommand('All Events', 'Copy All',
			isMapPresent && $gameMap.events().length>0 );
		this.addCommand('Copy Map', 'Copy Map',
			isMapPresent && $gameMap._mapId>0);
		this.addCommand('Next', 'Next', events_count>1);
	}
	
	Window_ExportCommand.prototype.update=function()
	{
		this._okHandled=false;
		Window_HorzCommand.prototype.update.apply(this, arguments);
		if ( !this._okHandled && this.lastIndex!==null && this.lastIndex!==this.index() && this.isCurrentItemEnabled()) this.callOkHandler();
		this.lastIndex=this.index();
	}
	
	Window_ExportCommand.prototype.callOkHandler=function()
	{
		this._okHandled=true;
		Window_HorzCommand.prototype.callOkHandler.apply(this, arguments);
		this.activate();
	}
	
	var Sprite_DummyCharacter=function(character, x, y)
	{
		Sprite_Character.call(this, character);
		this.x=x;
		this.y=y;
	}
	EvilCat.extend(Sprite_DummyCharacter, Sprite_Character);

	Sprite_DummyCharacter.prototype.updatePosition=function() { } // doesn't move
	
	var Scene_Export=function()
	{
		Scene_MenuBase.apply(this, arguments);
	}
	EvilCat.extend(Scene_Export, Scene_MenuBase);

	Scene_Export.prototype.prepare=function(event)
	{
		this.event=event;
	}
	
	Scene_Export.prototype.create=function()
	{
		Scene_MenuBase.prototype.create.apply(this, arguments);
		this.setBackgroundOpacity(100);
		
		this.event_div=document.createElement('div');
		this.event_div.className='json';
		this.event_div.style.cssText='width:400px; top: 80px; max-height:480px; left:20px; position:absolute; background-color:white; z-index:50; overflow:scroll; padding:4px; white-space:pre';
		this.fill(this.event || this.firstEvent());
		document.body.appendChild(this.event_div);
		
		this._commandWindow =this.createCommandWindow();
		this.prepareCommandWindow(this._commandWindow);
		this.addWindow(this._commandWindow);
		
		this.css=document.createElement('style');
		this.css.innerHTML='\
			div.json {\
				margin: 5px;\
				outline: 1px solid #ccc;\
				padding: 5px;\
			}\
			.json .string {\
				color: green;\
			}\
			.json .number {\
				color: darkorange;\
			}\
			.json .boolean {\
				color: blue;\
			}\
			.json .null {\
				color: magenta;\
			}\
			.json .key {\
				color: red;\
			}';
		document.body.appendChild(this.css);
	}
	
	Scene_Export.prototype.createCommandWindow=function()
	{
		return new Window_ExportCommand(0, 0);
	}
	
	Scene_Export.prototype.prepareCommandWindow=function(win)
	{
		win.setHandler('Prev',  this.commandPrev.bind(this));
		win.setHandler('Next',  this.commandNext.bind(this));
		win.setHandler('Copy',  this.commandCopy.bind(this));
		win.setHandler('Copy All',  this.commandCopyAll.bind(this));
		win.setHandler('Copy Map',  this.commandCopyMap.bind(this));
	}
	
	Scene_Export.prototype.start=function()
	{
		this._playCursor=SoundManager.playCursor;
		this._playOk=SoundManager.playOk;
		var sfx=AudioManager.playSe.bind(AudioManager, {name: 'Cursor1', volume: 90, pitch: 100, pan: 0});
		SoundManager.playCursor=sfx;
		SoundManager.playOk=sfx;
		
		document.body.style.userSelect = '';
		document.body.style.webkitUserSelect = '';
		document.body.style.msUserSelect = '';
		document.body.style.mozUserSelect = '';
		
		Scene_MenuBase.prototype.start.apply(this, arguments);
	}
	
	Scene_Export.prototype.stringify=function(obj)
	{
		if (obj===undefined) obj=this.event.event();
		if (!obj) return;
		return JSON.stringify(obj, undefined, 4);
	}
	
	Scene_Export.prototype.copy=function(to_copy)
	{
		var selection, range;
		selection = window.getSelection();
		range = document.createRange();
		
		var large=false;
		if (to_copy===undefined) large=this.event_div.innerHTML.length>this.maxCopySize();
		else
		{
			large=this.roughSizeOfObject(to_copy)>this.maxCopySize();
			if (large) this.event_div.innerHTML=this.stringify(to_copy);
			else this.event_div.innerHTML=this.JSONHighlight(this.stringify(to_copy));
		}
		range.selectNodeContents(this.event_div);
		selection.removeAllRanges();
		selection.addRange(range);
		if (!large)
		{
			document.execCommand('copy');
		
			if (to_copy!==undefined) setTimeout(this.fill.bind(this, this.event), 100);
			setTimeout(selection.removeAllRanges.bind(selection), 100);
			return true;
		}
		else
		{
			var event_info=this.getEventInfo();
			event_info.innerHTML="Data too large\nFocus on textarea, then\nPress Ctrl+C to copy manually";
			event_info.style.display='';
			return false;
		}
	}
	
	// function by tomwrong
	Scene_Export.prototype.roughSizeOfObject=function(object)
	{
		var objectList = [];
		var stack = [ object ];
		var bytes = 0;

		while ( stack.length ) {
			var value = stack.pop();

			if ( typeof value === 'boolean' ) {
				bytes += 4;
			}
			else if ( typeof value === 'string' ) {
				bytes += value.length * 2;
			}
			else if ( typeof value === 'number' ) {
				bytes += 8;
			}
			else if
			(
				typeof value === 'object'
				&& objectList.indexOf( value ) === -1
			)
			{
				objectList.push( value );

				for( var i in value ) {
					stack.push( value[ i ] );
				}
			}
		}
		return bytes;
	}
	
	Scene_Export.prototype.maxCopySize=function() { return 10*1024; /* 10 Kb */ }
	
	Scene_Export.prototype.commandPrev=function()
	{
		this.fill(this.prevEvent());
	}
	Scene_Export.prototype.commandNext=function()
	{
		this.fill(this.nextEvent());
	}
	Scene_Export.prototype.commandCopy=function()
	{
		if (!this.event) return;
		this.copy();
	}
	Scene_Export.prototype.commandCopyAll=function()
	{
		this.copy(this.allEvents());
	}
	Scene_Export.prototype.commandCopyMap=function()
	{
		this.copy($dataMap);
	}
	
	Scene_Export.prototype.firstEvent=function()
	{
		if (!SceneManager.isInStack(Scene_Map)) return;
		var events=$gameMap.events();
		for (var x=0; x<events.length; x++)
		{
			if (events[x]) return event;
		}
	}
	
	Scene_Export.prototype.nextEvent=function()
	{
		if (!$gameMap) return;
		var first, prev, events=$gameMap.events();
		for (var x=0; x<events.length; x++)
		{
			if (events[x] && !first) first=events[x];
			if (prev===this.event) return events[x];
			prev=events[x];
		}
		return first;
	}
	
	Scene_Export.prototype.prevEvent=function()
	{
		if (!$gameMap) return;
		var prev, events=$gameMap.events();
		for (var x=0; x<events.length; x++)
		{
			if (events[x]===this.event) return prev || events[events.length-1];
			prev=events[x];
		}
		return this.event;
	}
	
	Scene_Export.prototype.allEvents=function()
	{
		if (!$dataMap) return;
		return $dataMap.events;
		
		/*
		var result=[];
		for (var event in $gameMap.events())
		{
			if (!event) continue;
			result.push(event.event());
		}
		return result;
		*/
	}
	
	Scene_Export.prototype.fill=function(event)
	{
		this.event=event;
		if (!event)
		{
			this.event_div.innerHTML='No events found';
			if (this.event_sprite) this.event_sprite.hide();
			if (this.event_info) this.event_info.style.display='none';
			return;
		}
		
		if (!this.event_sprite)
		{
			this.event_sprite=new Sprite_DummyCharacter(event, 610, 200);
			this.event_info=this.getEventInfo();
			document.body.appendChild(this.event_info);
			this.addChild(this.event_sprite);
		}
		else if (this.event_sprite._character!==event)
		{
			this.event_sprite.show();
			this.event_sprite.setCharacter(event);
		}
		
		this.fillInfo();
		this.event_div.innerHTML=this.JSONHighlight(this.stringify());
	}
	
	Scene_Export.prototype.getEventInfo=function()
	{
		if (this.event_info) return this.event_info;
		
		var div=document.createElement('div');
		div.style.cssText='width:300px; top: 250px; max-height:250px; left:460px; position:absolute; background:transparent; color:white; z-index:50; padding:4px; white-space:pre; text-align:center';
		this.event_info=div;
		return div;
	}
	
	Scene_Export.prototype.fillInfo=function()
	{
		this.event_info.innerHTML='';
		if (!this.event) return;
		
		this.event_info.style.display='';
		var text='';
		if (!this.event.characterName()) text+='[No image]\n';
		text+='Name: '+(this.event.event().name || '-')+'\n'+
		'x '+this.event.x+', y '+this.event.y+'\n'+
		'Page #'+(this.event._pageIndex+1)+' of '+this.event.event().pages.length+'\n';
		
		this.selfSwitches().forEach((function(sw)
		{
			var key = [this.event._mapId, this.event._eventId, sw];
			if ($gameSelfSwitches.value(key)===true) text+='Switch '+sw+' is on\n';
		}).bind(this));
		
		var note=this.event.event().note;
		if (note) text+='Note: '+note;
		this.event_info.appendChild(document.createTextNode(text));
	}
	
	Scene_Export.prototype.selfSwitches=function()
	{
		return ['A', 'B', 'C', 'D'];
	}
	
	Scene_Export.prototype.update=function()
	{
		if (Input.isTriggered('escape')) this.popScene();
		else if (Input.isTriggered('pageup')) this.commandPrev();
		else if (Input.isTriggered('pagedown')) this.commandNext();
		
		var threshold=20;
		if (Math.abs(TouchInput.wheelY)>=threshold) this.event_div.scrollTop+=TouchInput.wheelY;
		
		Scene_MenuBase.prototype.update.apply(this, arguments);
	}
	
	Scene_Export.prototype.terminate=function()
	{
		SoundManager.playCursor=this._playCursor;
		SoundManager.playOk=this._playOk;
		Graphics._disableTextSelection();
		if (this.event_div && this.event_div.parentNode) this.event_div.parentNode.removeChild(this.event_div);
		if (this.event_info && this.event_info.parentNode) this.event_info.parentNode.removeChild(this.event_info);
		if (this.css && this.css.parentNode) this.css.parentNode.removeChild(this.css);
	}
	
	Scene_Export.prototype.JSONHighlight=function(json)
	{
		json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
			var cls = 'number';
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					cls = 'key';
				} else {
					cls = 'string';
				}
			} else if (/true|false/.test(match)) {
				cls = 'boolean';
			} else if (/null/.test(match)) {
				cls = 'null';
			}
			return '<span class="' + cls + '">' + match + '</span>';
		});
	}
	
	var RuntimeExport=EvilCat.RuntimeExport=function RuntimeExport()
	{
		EvilCat.Plugin.call(this);
		this.sceneClass=Scene_Export;
	}
	EvilCat.extend(RuntimeExport, EvilCat.Plugin);
		
	RuntimeExport.prototype.showAllEvents=function()
	{
		if (SceneManager._scene instanceof this.sceneClass) SceneManager.pop();
		else SceneManager.push(this.sceneClass);
	}
	
	RuntimeExport.prototype.handleMMB=function(mouseEvent)
	{
		if (!this.paramBool('Target by MMB', true)) return;
		if (SceneManager._scene instanceof this.sceneClass)
		{
			SceneManager.pop();
			return true;
		}
		if (!(SceneManager._scene instanceof Scene_Map)) return;
		
		var x = Graphics.pageToCanvasX(mouseEvent.pageX);
		var y = Graphics.pageToCanvasY(mouseEvent.pageY);
		x = $gameMap.canvasToMapX(x);
		y = $gameMap.canvasToMapY(y);
		
		var gameEvent=$gameMap.nearestEvent(x, y);
		if (gameEvent)
		{
			SceneManager.push(this.sceneClass);
			SceneManager.prepareNextScene(gameEvent);
			return true;
		}
	}
	
	RuntimeExport=EvilCat.RuntimeExport=new RuntimeExport();
	RuntimeExport.extendType('Key');
	
	var oldTouchMMB=TouchInput._onMiddleButtonDown;
	TouchInput._onMiddleButtonDown = function(event)
	{
		if (!RuntimeExport.handleMMB(event)) oldTouchMMB.apply(this, arguments);
	};
	
	var _SM_onKeyDown=SceneManager.onKeyDown;
	SceneManager.onKeyDown = function(event)
	{
		_SM_onKeyDown.apply(this, arguments);
		
		if (!event.ctrlKey && ! event.altKey && RuntimeExport.ALL_EVENTS_KEY.recognize(event)) RuntimeExport.showAllEvents();
	}
	
	RuntimeExport.ALL_EVENTS_KEY=RuntimeExport.paramKey('All Events Key', false) || EvilCat.KeyCode.parse('F12');
	
	RuntimeExport.Scene_Export=Scene_Export;
	RuntimeExport.Window_ExportCommand=Window_ExportCommand;
})();