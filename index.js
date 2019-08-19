class PantoneConverter {

  // TODO Make it case independed
  pantoneToHex(name) {
    return pantone_list[name] || 'No such pantone name'
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

    return Object.keys(pantone_list).find(key => pantone_list[key] === hex)
  }

  // TODO fix this
  nearestPantone(hex) {
    var nearestPantone = require('nearest-color').from(pantone_list);
    return nearestPantone(hex)
  }

  generatePantoneSelectOptions() {
    var options = ["<option value=''></option>"];
    Object.keys(pantone_list).forEach(function(key) {
      return options.push("<option value='" + pantone_list[key] + "'>" + key + "</option>");
    });
    return options;
  }

  setPantoneSelectionForInput(input_class) {
    var inputs = document.getElementsByClassName(input_class);
    var content = this.generatePantoneSelectOptions()

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].innerHTML = content;
    }
  }
}

let initPantoneConverter = function() {
  return pantoneConverter = new PantoneConverter;
}

initPantoneConverter()

let pantone_list = require('./pantones.json');
