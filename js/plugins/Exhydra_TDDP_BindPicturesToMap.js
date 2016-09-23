// ╒══════════════════════════════════════════════════════════════════════════════════╕
// █▐▐  TDDP | Bind Pictures to Map - Extra Options
// ╞══════════════════════════════════════════════════════════════════════════════════╡
/*:
 *  @plugindesc [1.0] Additional options for TDDP's Bind Pictures to Map plugin.
 *  @author Exhydra
 *
 *  @param Layer 1 Name
 *  @desc The name of the layer.
 *  @default 
 *
 *  @param Layer 1 Parent
 *  @desc The parent of the layer. Value can be 'tilemap', 'basesprite', or 'spriteset'.
 *  @default 
 *
 *  @param Layer 1 Z-Position
 *  @desc The z-position of the layer. Used with a 'tilemap' parent.
 *  @default 
 *
 *  @param Layer 1 Order
 *  @desc The order of the layer. Used with 'basesprite' or 'spriteset' parents.
 *  @default 
 *
 *  @param Layer 2 Name
 *  @desc The name of the layer.
 *  @default 
 *
 *  @param Layer 2 Parent
 *  @desc The parent of the layer. Value can be 'tilemap', 'basesprite', or 'spriteset'.
 *  @default 
 *
 *  @param Layer 2 Z-Position
 *  @desc The z-position of the layer. Used with a 'tilemap' parent.
 *  @default 
 *
 *  @param Layer 2 Order
 *  @desc The z-position of the layer. Used with 'basesprite' or 'spriteset' parents.
 *  @default 
 *
 *  @param Layer 3 Name
 *  @desc The name of the layer.
 *  @default 
 *
 *  @param Layer 3 Parent
 *  @desc The parent of the layer. Value can be 'tilemap', 'basesprite', or 'spriteset'.
 *  @default 
 *
 *  @param Layer 3 Z-Position
 *  @desc The z-position of the layer. Used with a 'tilemap' parent.
 *  @default 
 *
 *  @param Layer 3 Order
 *  @desc The order of the layer. Used with 'basesprite' or 'spriteset' parents.
 *  @default 
 *
 *  @param Layer 4 Name
 *  @desc The name of the layer.
 *  @default 
 *
 *  @param Layer 4 Parent
 *  @desc The parent of the layer. Value can be 'tilemap', 'basesprite', or 'spriteset'.
 *  @default 
 *
 *  @param Layer 4 Z-Position
 *  @desc The z-position of the layer. Used with a 'tilemap' parent.
 *  @default 
 *
 *  @param Layer 4 Order
 *  @desc The order of the layer. Used with 'basesprite' or 'spriteset' parents.
 *  @default 
 *
 *  @param Layer 5 Name
 *  @desc The name of the layer.
 *  @default 
 *
 *  @param Layer 5 Parent
 *  @desc The parent of the layer. Value can be 'tilemap', 'basesprite', or 'spriteset'.
 *  @default 
 *
 *  @param Layer 5 Z-Position
 *  @desc The z-position of the layer. Used with a 'tilemap' parent.
 *  @default 
 *
 *  @param Layer 5 Order
 *  @desc The order of the layer. Used with 'basesprite' or 'spriteset' parents.
 *  @default 
 *
 *  @param ─────────
 *  @desc
 *  @default ───────────────
 *
 *  @param Plugin GID
 *  @desc Global identification tag for internal use only. Do not change.
 *  @default eXa-66Ad6i82UbCY8mw
 *
 *  @help
 * ▄ Plugin          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄ ▄
 *
 *   ┌─ Version : 1.0
 *   ├─ Release : 3rd August 2016
 *   ├─ Updated : 3rd August 2016
 *   └─ License : Free for Commercial and Non-Commercial Usage
 *
 * ▄ Layer Information ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄ ▄
 *
 *   Base Sprite
 *   ├─BindPicturesToMap Default Layer - 'bottom'
 *   │ └─Typical Order ID : 1
 *   ├─RMMV Default Parallax Layer
 *   │ └─Typical Order ID : 2
 *   └─BindPicturesToMap Default Layer - 'below_tilemap'
 *     └─Typical Order ID : 3
 *
 *   Tilemap
 *   ├─RMMV Default Tilemap Layer - Normal Tile
 *   │ └─Typical Z-Position : 0
 *   ├─BindPicturesToMap Default Layer - 'below_characters'
 *   │ └─Typical Z-Position : 0
 *   ├─RMMV Default Tilemap Layer - Star Tile
 *   │ └─Typical Z-Position : 4
 *   ├─RMMV Default Character Layer
 *   │ └─Typical Z-Position : 1 ~ 6
 *   ├─RMMV Default Tilemap Layer - Shadow
 *   │ └─Typical Z-Position : 6
 *   ├─BindPicturesToMap Default Layer - 'above_characters'
 *   │ └─Typical Z-Position : 8
 *   └─BindPicturesToMap Default Layer - 'below_weather'
 *     └─Typical Z-Position : 8
 *
 *   Spriteset
 *   ├─RMMV Default Weather Layer
 *   │ └─Typical Order ID : 1
 *   ├─BindPicturesToMap Default Layer - 'top'
 *   │ └─Typical Order ID : 2
 *   ├─RMMV Default Timer Layer
 *   │ └─Typical Order ID : 3
 *   ├─RMMV Default Screen Flash Layer
 *   │ └─Typical Order ID : 4
 *   └─RMMV Default Screen Fade Layer
 *     └─Typical Order ID : 5
 *
 */
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] Plugin
// ╘══════════════════════════════════════════════════════════════════════════════════╛

var Imported = Imported || {};
Imported.exaTDDPBindPicturesToMap = 1.0;

var EXA       = EXA           || {};
EXA.TDDP      = EXA.TDDP      || {};
EXA.TDDP.BPTM = EXA.TDDP.BPTM || {};

(function() {
	
	'use strict';
  
	var exaParams = $plugins.filter(function(plugin) {
		return plugin.parameters['Plugin GID'] == 'eXa-66Ad6i82UbCY8mw';
	})[0].parameters;

  EXA.TDDP.BPTM._layers = Array.apply(null, Array(5)).map(function () { return new Object(); });
  
  Object.keys(exaParams).forEach(function(key) {
    var tmpMatch = key.match(/Layer (\d) (\w*)/i);
    
    if (tmpMatch) {
      var tmpIndex    = Number(tmpMatch[1]) - 1;
      var tmpProperty = tmpMatch[2].toLowerCase();
      var tmpValue    = isNaN(exaParams[key]) ? exaParams[key] : Number(exaParams[key]);
      
      EXA.TDDP.BPTM._layers[tmpIndex][tmpProperty] = tmpValue || null;
    }
  });

})();

if (Imported.TDDP_BindPicturesToMap) {

  //  ╒═══════════════════════════════════════════════════════════════════════════════╕
  //  ■ [Object] Spriteset_Map
  //  ╘═══════════════════════════════════════════════════════════════════════════════╛

  //  ALIAS ──────────────────────────────────────────────────────────────────────────┐
  //  □ [Function] createLowerLayer
  //  └───────────────────────────────────────────────────────────────────────────────┘
  
  var BPTM_Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
  
  Spriteset_Map.prototype.createLowerLayer = function() {

    BPTM_Spriteset_Map_createLowerLayer.call(this);

    EXA.TDDP.BPTM._layers.forEach(function(layer) {
      if (layer.name != null && layer.parent != null) {
        switch (layer.parent) {
          case 'tilemap':
            var parent = this._tilemap;
            break;
          case 'basesprite':
            var parent = this._baseSprite;
            break;
          case 'spriteset':
            var parent = this;
            break;
        }
        
        this.createPicturesLayer(layer.name, parent, layer.z, layer.order);
      }
    }, this);

  }; // Spriteset_Map ‹‹ createLowerLayer
  
  //  ALIAS ──────────────────────────────────────────────────────────────────────────┐
  //  □ [Function] createPicturesLayer
  //  └───────────────────────────────────────────────────────────────────────────────┘
  
  var BPTM_Spriteset_Map_createPicturesLayer = Spriteset_Map.prototype.createPicturesLayer;
  
  Spriteset_Map.prototype.createPicturesLayer = function(layer, parent, z, order) {

    BPTM_Spriteset_Map_createPicturesLayer.call(this, layer, parent, z);

    if (order) {
      parent.removeChild(this._pictureContainer[layer]);
      parent.addChildAt(this._pictureContainer[layer], order);
    }
    
  }; // Spriteset_Map ‹‹ createPicturesLayer
  
};

// ▌▌██████████████████████████████████████ EOF █████████████████████████████████████▐▐