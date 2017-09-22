"use strict";

var Imported = Imported || {};
Imported.Rivington_Util = true;

var Rivington = Rivington || {};
var RIV = RIV || {};
RIV.Util = RIV.Util || {};
/*:
* @plugindesc Javascript Utilities.
* @author RivingtonDown
*
* @help
*
* Rivington_Util
* by: RivingtonDown
*
*/

(function () {

  RIV.Util.mapIntArray = function(x) {
    return _.map(JSON.parse(x), function(z){return parseInt(z)});
  }

  RIV.Util.ArrContainsAll = function(a) {
      var fn = function(n, src, got, all) {
          if (n == 0) {
              if (got.length > 0) {
                  all[all.length] = got;
              }
              return;
          }
          for (var j = 0; j < src.length; j++) {
              fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
          }
          return;
      }
      var all = [];
      for (var i = 3; i < 4; i++) {
          fn(i, a, [], all);
      }
      all.push(a);
      return all;
  }

  RIV.Util.ArrHasValue = function(a,b) {
    this.array = a;
    for(var i=0;i<array.length;i++){
      return this.array[i].split(",").contains(String(b))
    }
  }

  RIV.Util.ArrSharedValue = function (haystack, arr) {
    return arr.some(function(v) {return haystack.indexOf(v) != -1;});
  };
})();
