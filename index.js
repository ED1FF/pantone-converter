class PantoneConverter {

  // TODO Make it case independed
  pantoneToHex(name) {
    return pantones[name] || 'No such pantone name'
  }

  pantoneToRgb(name) {
    var hex = this.pantoneToHex(name)
    if(hex == 'No such pantone name') { return hex; }

    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    var result = 'rgb('+r+','+g+','+b+')';
    return result;
  }

  hexToPantone(hex) {
    hex = hex.toUpperCase()
    if(!hex.includes('#')) { hex = '#' + hex }

    return this.nearestPantone(hex)
  }

  strictHexToPantone(hex) {
    var hex = hex.toUpperCase()
    if(!hex.includes('#')) { hex = '#' + hex }

    return Object.keys(pantones).find(key => pantones[key] === hex)
  }

  // TODO fix this
  nearestPantone(hex) {
    var nearestPantone = require('nearest-color').from(pantones);
    return nearestColor(hex)
  }

}

let initPantoneConverter = function() {
  return pantoneConverter = new PantoneConverter;
}

initPantoneConverter()

let pantones = require('./pantones.json');
