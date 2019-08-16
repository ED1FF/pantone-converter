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

// TODO Move to separate JSON file.
const pantones = { "Pantone PMS 100": "#F4ED7C",
"Pantone PMS 101": "#F4ED47",
"Pantone PMS 102": "#F9E814",
"Pantone PMS 103": "#C6AD0F",
"Pantone PMS 104": "#AD9B0C",
"Pantone PMS 105": "#82750F",
"Pantone PMS 106": "#F7E859",
"Pantone PMS 107": "#F9E526",
"Pantone PMS 108": "#F9DD16",
"Pantone PMS 109": "#F9D616",
"Pantone PMS 110": "#D8B511",
"Pantone PMS 111": "#AA930A",
"Pantone PMS 112": "#99840A",
"Pantone PMS 113": "#F9E55B",
"Pantone PMS 114": "#F9E24C",
"Pantone PMS 115": "#F9E04C",
"Pantone PMS 116": "#F7B50C",
"Pantone PMS 117": "#C6A00C",
"Pantone PMS 118": "#AA8E0A",
"Pantone PMS 119": "#897719",
"Pantone PMS 120": "#F9E27F",
"Pantone PMS 1205": "#F7E8AA",
"Pantone PMS 121": "#F9E070",
"Pantone PMS 1215": "#F9E08C",
"Pantone PMS 122": "#FCD856",
"Pantone PMS 1225": "#FFCC49",
"Pantone PMS 123": "#FFC61E",
"Pantone PMS 1235": "#FCB514",
"Pantone PMS 124": "#E0AA0F",
"Pantone PMS 1245": "#BF910C",
"Pantone PMS 125": "#B58C0A",
"Pantone PMS 1255": "#A37F14",
"Pantone PMS 126": "#A38205",
"Pantone PMS 1265": "#7C6316",
"Pantone PMS 127": "#F4E287",
"Pantone PMS 128": "#F4DB60",
"Pantone PMS 129": "#F2D13D",
"Pantone PMS 130": "#E29100",
"Pantone PMS 131": "#C6930A",
"Pantone PMS 132": "#9E7C0A",
"Pantone PMS 133": "#705B0A",
"Pantone PMS 134": "#FFD87F",
"Pantone PMS 1345": "#FFD691",
"Pantone PMS 135": "#FCC963",
"Pantone PMS 1355": "#FCCE87",
"Pantone PMS 136": "#FCBF49",
"Pantone PMS 1365": "#FCBA5E",
"Pantone PMS 137": "#FCA311",
"Pantone PMS 1375": "#F99B0C",
"Pantone PMS 138": "#D88C02",
"Pantone PMS 1385": "#CC7A02",
"Pantone PMS 139": "#AF7505",
"Pantone PMS 1395": "#996007",
"Pantone PMS 140": "#7A5B11",
"Pantone PMS 1405": "#6B4714",
"Pantone PMS 141": "#F2CE68",
"Pantone PMS 142": "#F2BF49",
"Pantone PMS 143": "#EFB22D",
"Pantone PMS 144": "#E28C05",
"Pantone PMS 145": "#C67F07",
"Pantone PMS 146": "#9E6B05",
"Pantone PMS 147": "#725E26",
"Pantone PMS 148": "#FFD69B",
"Pantone PMS 1485": "#FFB777",
"Pantone PMS 149": "#FCCC93",
"Pantone PMS 1495": "#FF993F",
"Pantone PMS 150": "#FCAD56",
"Pantone PMS 1505": "#F47C00",
"Pantone PMS 151": "#F77F00",
"Pantone PMS 152": "#DD7500",
"Pantone PMS 1525": "#B55400",
"Pantone PMS 153": "#BC6D0A",
"Pantone PMS 1535": "#8C4400",
"Pantone PMS 154": "#995905",
"Pantone PMS 1545": "#472200",
"Pantone PMS 155": "#F4DBAA",
"Pantone PMS 1555": "#F9BF9E",
"Pantone PMS 156": "#F2C68C",
"Pantone PMS 1565": "#FCA577",
"Pantone PMS 157": "#EDA04F",
"Pantone PMS 1575": "#FC8744",
"Pantone PMS 158": "#E87511",
"Pantone PMS 1585": "#F96B07",
"Pantone PMS 159": "#C66005",
"Pantone PMS 1595": "#D15B05",
"Pantone PMS 160": "#9E540A",
"Pantone PMS 1605": "#A04F11",
"Pantone PMS 161": "#633A11",
"Pantone PMS 1615": "#843F0F",
"Pantone PMS 162": "#F9C6AA",
"Pantone PMS 1625": "#F9A58C",
"Pantone PMS 163": "#FC9E70",
"Pantone PMS 1635": "#F98E6D",
"Pantone PMS 164": "#FC7F3F",
"Pantone PMS 1645": "#F97242",
"Pantone PMS 165": "#EA4F00",
"Pantone PMS 1655": "#F95602",
"Pantone PMS 166": "#DD5900",
"Pantone PMS 1665": "#DD4F05",
"Pantone PMS 167": "#BC4F07",
"Pantone PMS 1675": "#A53F0F",
"Pantone PMS 168": "#6D3011",
"Pantone PMS 1685": "#843511",
"Pantone PMS 169": "#F9BAAA",
"Pantone PMS 170": "#F98972",
"Pantone PMS 171": "#F9603A",
"Pantone PMS 172": "#F74902",
"Pantone PMS 173": "#D14414",
"Pantone PMS 174": "#933311",
"Pantone PMS 175": "#6D3321",
"Pantone PMS 176": "#F9AFAD",
"Pantone PMS 1765": "#F99EA3",
"Pantone PMS 1767": "#F9B2B7",
"Pantone PMS 177": "#F9827F",
"Pantone PMS 1775": "#F9848E",
"Pantone PMS 1777": "#FC6675",
"Pantone PMS 178": "#F95E59",
"Pantone PMS 1785": "#FC4F59",
"Pantone PMS 1787": "#F43F4F",
"Pantone PMS 1788": "#D62100",
"Pantone PMS 179": "#E23D28",
"Pantone PMS 1795": "#D62828",
"Pantone PMS 1797": "#CC2D30",
"Pantone PMS 180": "#C13828",
"Pantone PMS 1805": "#AF2626",
"Pantone PMS 1807": "#A03033",
"Pantone PMS 181": "#7C2D23",
"Pantone PMS 1810": "#7C211E",
"Pantone PMS 1817": "#5B2D28",
"Pantone PMS 182": "#F9BFC1",
"Pantone PMS 183": "#FC8C99",
"Pantone PMS 184": "#FC5E72",
"Pantone PMS 185": "#D11600",
"Pantone PMS 186": "#CE1126",
"Pantone PMS 187": "#AF1E2D",
"Pantone PMS 188": "#7C2128",
"Pantone PMS 189": "#FFA3B2",
"Pantone PMS 1895": "#FCBFC9",
"Pantone PMS 190": "#FC758E",
"Pantone PMS 1905": "#FC9BB2",
"Pantone PMS 191": "#F4476B",
"Pantone PMS 1915": "#F4547C",
"Pantone PMS 192": "#E5053A",
"Pantone PMS 1925": "#E00747",
"Pantone PMS 193": "#C40043",
"Pantone PMS 1935": "#C10538",
"Pantone PMS 194": "#992135",
"Pantone PMS 1945": "#A80C35",
"Pantone PMS 1955": "#931638",
"Pantone PMS 196": "#FAD5E1",
"Pantone PMS 197": "#F6A5BE",
"Pantone PMS 198": "#EF5B84",
"Pantone PMS 199": "#A0274B",
"Pantone PMS 200": "#C41E3A",
"Pantone PMS 201": "#A32638",
"Pantone PMS 202": "#8C2633",
"Pantone PMS 203": "#F2AFC1",
"Pantone PMS 204": "#ED7A9E",
"Pantone PMS 205": "#E54C7C",
"Pantone PMS 206": "#D30547",
"Pantone PMS 207": "#C0004E",
"Pantone PMS 208": "#8E2344",
"Pantone PMS 209": "#75263D",
"Pantone PMS 210": "#FFA0BF",
"Pantone PMS 211": "#FF77A8",
"Pantone PMS 212": "#F94F8E",
"Pantone PMS 213": "#EA0F6B",
"Pantone PMS 214": "#CC0256",
"Pantone PMS 215": "#A50544",
"Pantone PMS 216": "#7C1E3F",
"Pantone PMS 217": "#F4BFD1",
"Pantone PMS 218": "#ED72AA",
"Pantone PMS 219": "#E22882",
"Pantone PMS 220": "#AA004F",
"Pantone PMS 221": "#930042",
"Pantone PMS 222": "#70193D",
"Pantone PMS 223": "#F993C4",
"Pantone PMS 224": "#F46BAF",
"Pantone PMS 225": "#ED2893",
"Pantone PMS 226": "#D60270",
"Pantone PMS 227": "#AD005B",
"Pantone PMS 228": "#8C004C",
"Pantone PMS 229": "#6D213F",
"Pantone PMS 230": "#FFA0CC",
"Pantone PMS 231": "#FC70BA",
"Pantone PMS 232": "#F43FA5",
"Pantone PMS 233": "#CE007C",
"Pantone PMS 234": "#AA0066",
"Pantone PMS 235": "#8E0554",
"Pantone PMS 236": "#F9AFD3",
"Pantone PMS 2365": "#F7C4D8",
"Pantone PMS 237": "#F484C4",
"Pantone PMS 2375": "#EA6BBF",
"Pantone PMS 238": "#ED4FAF",
"Pantone PMS 2385": "#DB28A5",
"Pantone PMS 239": "#E0219E",
"Pantone PMS 2395": "#C4008C",
"Pantone PMS 240": "#C40F89",
"Pantone PMS 2405": "#A8007A",
"Pantone PMS 241": "#AD0075",
"Pantone PMS 2415": "#9B0070",
"Pantone PMS 242": "#7C1C51",
"Pantone PMS 2425": "#87005B",
"Pantone PMS 243": "#F2BAD8",
"Pantone PMS 244": "#EDA0D3",
"Pantone PMS 245": "#E87FC9",
"Pantone PMS 246": "#CC00A0",
"Pantone PMS 247": "#B7008E",
"Pantone PMS 248": "#A3057F",
"Pantone PMS 249": "#7F2860",
"Pantone PMS 250": "#EDC4DD",
"Pantone PMS 251": "#E29ED6",
"Pantone PMS 252": "#D36BC6",
"Pantone PMS 253": "#AF23A5",
"Pantone PMS 254": "#A02D96",
"Pantone PMS 255": "#772D6B",
"Pantone PMS 256": "#E5C4D6",
"Pantone PMS 2562": "#D8A8D8",
"Pantone PMS 2563": "#D1A0CC",
"Pantone PMS 2567": "#BF93CC",
"Pantone PMS 257": "#D3A5C9",
"Pantone PMS 2572": "#C687D1",
"Pantone PMS 2573": "#BA7CBC",
"Pantone PMS 2577": "#AA72BF",
"Pantone PMS 258": "#9B4F96",
"Pantone PMS 2582": "#AA47BA",
"Pantone PMS 2583": "#9E4FA5",
"Pantone PMS 2587": "#8E47AD",
"Pantone PMS 259": "#72166B",
"Pantone PMS 2592": "#930FA5",
"Pantone PMS 2593": "#872B93",
"Pantone PMS 2597": "#66008C",
"Pantone PMS 260": "#681E5B",
"Pantone PMS 2602": "#820C8E",
"Pantone PMS 2603": "#70147A",
"Pantone PMS 2607": "#5B027A",
"Pantone PMS 261": "#5E2154",
"Pantone PMS 2612": "#701E72",
"Pantone PMS 2613": "#66116D",
"Pantone PMS 2617": "#560C70",
"Pantone PMS 262": "#542344",
"Pantone PMS 2622": "#602D59",
"Pantone PMS 2623": "#5B195E",
"Pantone PMS 2627": "#4C145E",
"Pantone PMS 263": "#E0CEE0",
"Pantone PMS 2635": "#C9ADD8",
"Pantone PMS 264": "#C6AADB",
"Pantone PMS 2645": "#B591D1",
"Pantone PMS 265": "#9663C4",
"Pantone PMS 2655": "#9B6DC6",
"Pantone PMS 266": "#6D28AA",
"Pantone PMS 2665": "#894FBF",
"Pantone PMS 267": "#59118E",
"Pantone PMS 268": "#4F2170",
"Pantone PMS 2685": "#56008C",
"Pantone PMS 269": "#442359",
"Pantone PMS 2695": "#44235E",
"Pantone PMS 270": "#BAAFD3",
"Pantone PMS 2705": "#AD9ED3",
"Pantone PMS 2706": "#D1CEDD",
"Pantone PMS 2707": "#BFD1E5",
"Pantone PMS 2708": "#AFBCDB",
"Pantone PMS 271": "#9E91C6",
"Pantone PMS 2715": "#937ACC",
"Pantone PMS 2716": "#A5A0D6",
"Pantone PMS 2717": "#A5BAE0",
"Pantone PMS 2718": "#5B77CC",
"Pantone PMS 272": "#8977BA",
"Pantone PMS 2725": "#7251BC",
"Pantone PMS 2726": "#6656BC",
"Pantone PMS 2727": "#5E68C4",
"Pantone PMS 2728": "#3044B5",
"Pantone PMS 273": "#38197A",
"Pantone PMS 2735": "#4F0093",
"Pantone PMS 2736": "#4930AD",
"Pantone PMS 2738": "#2D008E",
"Pantone PMS 274": "#2B1166",
"Pantone PMS 2745": "#3F0077",
"Pantone PMS 2746": "#3F2893",
"Pantone PMS 2747": "#1C146B",
"Pantone PMS 2748": "#1E1C77",
"Pantone PMS 275": "#260F54",
"Pantone PMS 2755": "#35006D",
"Pantone PMS 2756": "#332875",
"Pantone PMS 2757": "#141654",
"Pantone PMS 2758": "#192168",
"Pantone PMS 276": "#2B2147",
"Pantone PMS 2765": "#2B0C56",
"Pantone PMS 2766": "#2B265B",
"Pantone PMS 2767": "#14213D",
"Pantone PMS 2768": "#112151",
"Pantone PMS 277": "#B5D1E8",
"Pantone PMS 278": "#99BADD",
"Pantone PMS 279": "#6689CC",
"Pantone PMS 280": "#002B7F",
"Pantone PMS 281": "#002868",
"Pantone PMS 282": "#002654",
"Pantone PMS 283": "#9BC4E2",
"Pantone PMS 284": "#75AADB",
"Pantone PMS 285": "#3A75C4",
"Pantone PMS 286": "#0038A8",
"Pantone PMS 287": "#003893",
"Pantone PMS 288": "#00337F",
"Pantone PMS 289": "#002649",
"Pantone PMS 290": "#C4D8E2",
"Pantone PMS 2905": "#93C6E0",
"Pantone PMS 291": "#A8CEE2",
"Pantone PMS 2915": "#60AFDD",
"Pantone PMS 292": "#75B2DD",
"Pantone PMS 2925": "#008ED6",
"Pantone PMS 293": "#0051BA",
"Pantone PMS 2935": "#005BBF",
"Pantone PMS 294": "#003F87",
"Pantone PMS 2945": "#0054A0",
"Pantone PMS 295": "#00386B",
"Pantone PMS 2955": "#003D6B",
"Pantone PMS 296": "#002D47",
"Pantone PMS 2965": "#00334C",
"Pantone PMS 297": "#82C6E2",
"Pantone PMS 2975": "#BAE0E2",
"Pantone PMS 298": "#51B5E0",
"Pantone PMS 2985": "#51BFE2",
"Pantone PMS 299": "#00A3DD",
"Pantone PMS 2995": "#00A5DB",
"Pantone PMS 300": "#0072C6",
"Pantone PMS 3005": "#0084C9",
"Pantone PMS 301": "#005B99",
"Pantone PMS 3015": "#00709E",
"Pantone PMS 302": "#004F6D",
"Pantone PMS 3025": "#00546B",
"Pantone PMS 303": "#003F54",
"Pantone PMS 3035": "#004454",
"Pantone PMS 304": "#A5DDE2",
"Pantone PMS 305": "#70CEE2",
"Pantone PMS 306": "#00A3D1",
"Pantone PMS 307": "#007AA5",
"Pantone PMS 308": "#00607C",
"Pantone PMS 309": "#003F49",
"Pantone PMS 310": "#72D1DD",
"Pantone PMS 3105": "#7FD6DB",
"Pantone PMS 311": "#28C4D8",
"Pantone PMS 3115": "#2DC6D6",
"Pantone PMS 312": "#00ADC6",
"Pantone PMS 3125": "#00B7C6",
"Pantone PMS 313": "#0099B5",
"Pantone PMS 3135": "#009BAA",
"Pantone PMS 314": "#00829B",
"Pantone PMS 3145": "#00848E",
"Pantone PMS 315": "#006B77",
"Pantone PMS 3155": "#006D75",
"Pantone PMS 316": "#00494F",
"Pantone PMS 3165": "#00565B",
"Pantone PMS 317": "#C9E8DD",
"Pantone PMS 318": "#93DDDB",
"Pantone PMS 319": "#4CCED1",
"Pantone PMS 320": "#007F82",
"Pantone PMS 321": "#008789",
"Pantone PMS 322": "#007272",
"Pantone PMS 323": "#006663",
"Pantone PMS 324": "#AADDD6",
"Pantone PMS 3242": "#87DDD1",
"Pantone PMS 3245": "#8CE0D1",
"Pantone PMS 3248": "#7AD3C1",
"Pantone PMS 325": "#56C9C1",
"Pantone PMS 3252": "#56D6C9",
"Pantone PMS 3255": "#47D6C1",
"Pantone PMS 3258": "#35C4AF",
"Pantone PMS 326": "#00B2AA",
"Pantone PMS 3262": "#00C1B5",
"Pantone PMS 3265": "#00C6B2",
"Pantone PMS 3268": "#00AF99",
"Pantone PMS 327": "#008977",
"Pantone PMS 3272": "#00AA9E",
"Pantone PMS 3275": "#00B2A0",
"Pantone PMS 3278": "#009B84",
"Pantone PMS 328": "#007770",
"Pantone PMS 3282": "#008C82",
"Pantone PMS 3285": "#009987",
"Pantone PMS 3288": "#008270",
"Pantone PMS 329": "#006D66",
"Pantone PMS 3292": "#006056",
"Pantone PMS 3295": "#008272",
"Pantone PMS 3298": "#006B5B",
"Pantone PMS 330": "#005951",
"Pantone PMS 3302": "#00493F",
"Pantone PMS 3305": "#004F42",
"Pantone PMS 3308": "#004438",
"Pantone PMS 331": "#BAEAD6",
"Pantone PMS 332": "#A0E5CE",
"Pantone PMS 333": "#5EDDC1",
"Pantone PMS 334": "#00997C",
"Pantone PMS 335": "#007C66",
"Pantone PMS 336": "#006854",
"Pantone PMS 337": "#9BDBC1",
"Pantone PMS 3375": "#8EE2BC",
"Pantone PMS 338": "#7AD1B5",
"Pantone PMS 3385": "#54D8A8",
"Pantone PMS 339": "#00B28C",
"Pantone PMS 3395": "#00C993",
"Pantone PMS 340": "#009977",
"Pantone PMS 3405": "#00B27A",
"Pantone PMS 341": "#007A5E",
"Pantone PMS 3415": "#007C59",
"Pantone PMS 342": "#006B54",
"Pantone PMS 3425": "#006847",
"Pantone PMS 343": "#00563F",
"Pantone PMS 3435": "#024930",
"Pantone PMS 344": "#B5E2BF",
"Pantone PMS 345": "#96D8AF",
"Pantone PMS 346": "#70CE9B",
"Pantone PMS 347": "#009E60",
"Pantone PMS 348": "#008751",
"Pantone PMS 349": "#006B3F",
"Pantone PMS 350": "#234F33",
"Pantone PMS 351": "#B5E8BF",
"Pantone PMS 352": "#99E5B2",
"Pantone PMS 353": "#84E2A8",
"Pantone PMS 354": "#00B760",
"Pantone PMS 355": "#009E49",
"Pantone PMS 356": "#007A3D",
"Pantone PMS 357": "#215B33",
"Pantone PMS 358": "#AADD96",
"Pantone PMS 359": "#A0DB8E",
"Pantone PMS 360": "#60C659",
"Pantone PMS 361": "#1EB53A",
"Pantone PMS 362": "#339E35",
"Pantone PMS 363": "#3D8E33",
"Pantone PMS 364": "#3A7728",
"Pantone PMS 365": "#D3E8A3",
"Pantone PMS 366": "#C4E58E",
"Pantone PMS 367": "#AADD6D",
"Pantone PMS 368": "#009E0F",
"Pantone PMS 369": "#56AA1C",
"Pantone PMS 370": "#568E14",
"Pantone PMS 371": "#566B21",
"Pantone PMS 372": "#D8ED96",
"Pantone PMS 373": "#CEEA82",
"Pantone PMS 374": "#BAE860",
"Pantone PMS 375": "#54BC00",
"Pantone PMS 376": "#7FBA00",
"Pantone PMS 377": "#709302",
"Pantone PMS 378": "#566314",
"Pantone PMS 379": "#E0EA68",
"Pantone PMS 380": "#D6E542",
"Pantone PMS 381": "#CCE226",
"Pantone PMS 382": "#9EC400",
"Pantone PMS 383": "#A3AF07",
"Pantone PMS 384": "#939905",
"Pantone PMS 385": "#707014",
"Pantone PMS 386": "#E8ED60",
"Pantone PMS 387": "#E0ED44",
"Pantone PMS 388": "#D6E80F",
"Pantone PMS 389": "#CEE007",
"Pantone PMS 390": "#BAC405",
"Pantone PMS 391": "#9E9E07",
"Pantone PMS 392": "#848205",
"Pantone PMS 393": "#F2EF87",
"Pantone PMS 3935": "#F2ED6D",
"Pantone PMS 394": "#EAED35",
"Pantone PMS 3945": "#EFEA07",
"Pantone PMS 395": "#E5E811",
"Pantone PMS 3955": "#EDE211",
"Pantone PMS 396": "#E0E20C",
"Pantone PMS 3965": "#E8DD11",
"Pantone PMS 397": "#C1BF0A",
"Pantone PMS 3975": "#B5A80C",
"Pantone PMS 398": "#AFA80A",
"Pantone PMS 3985": "#998C0A",
"Pantone PMS 399": "#998E07",
"Pantone PMS 3995": "#6D6002",
"Pantone PMS 400": "#D1C6B5",
"Pantone PMS 401": "#C1B5A5",
"Pantone PMS 402": "#AFA593",
"Pantone PMS 403": "#998C7C",
"Pantone PMS 404": "#827566",
"Pantone PMS 405": "#6B5E4F",
"Pantone PMS 406": "#CEC1B5",
"Pantone PMS 408": "#A8998C",
"Pantone PMS 409": "#99897C",
"Pantone PMS 410": "#7C6D63",
"Pantone PMS 411": "#66594C",
"Pantone PMS 412": "#3D3028",
"Pantone PMS 413": "#C6C1B2",
"Pantone PMS 414": "#B5AFA0",
"Pantone PMS 415": "#A39E8C",
"Pantone PMS 416": "#8E8C7A",
"Pantone PMS 417": "#777263",
"Pantone PMS 418": "#605E4F",
"Pantone PMS 419": "#282821",
"Pantone PMS 420": "#D1CCBF",
"Pantone PMS 421": "#BFBAAF",
"Pantone PMS 422": "#AFAAA3",
"Pantone PMS 423": "#96938E",
"Pantone PMS 424": "#827F77",
"Pantone PMS 425": "#60605B",
"Pantone PMS 426": "#2B2B28",
"Pantone PMS 427": "#DDDBD1",
"Pantone PMS 428": "#D1CEC6",
"Pantone PMS 429": "#ADAFAA",
"Pantone PMS 430": "#919693",
"Pantone PMS 431": "#666D70",
"Pantone PMS 432": "#444F51",
"Pantone PMS 433": "#0A0C11",
"Pantone PMS 434": "#E0D1C6",
"Pantone PMS 435": "#D3BFB7",
"Pantone PMS 436": "#BCA59E",
"Pantone PMS 437": "#8C706B",
"Pantone PMS 438": "#593F3D",
"Pantone PMS 439": "#493533",
"Pantone PMS 440": "#3F302B",
"Pantone PMS 441": "#D1D1C6",
"Pantone PMS 442": "#BABFB7",
"Pantone PMS 443": "#A3A8A3",
"Pantone PMS 444": "#898E8C",
"Pantone PMS 445": "#565959",
"Pantone PMS 446": "#494C49",
"Pantone PMS 447": "#3F3F38",
"Pantone PMS 448": "#54472D",
"Pantone PMS 4485": "#604C11",
"Pantone PMS 449": "#544726",
"Pantone PMS 4495": "#877530",
"Pantone PMS 450": "#60542B",
"Pantone PMS 4505": "#A09151",
"Pantone PMS 451": "#ADA07A",
"Pantone PMS 4515": "#BCAD75",
"Pantone PMS 452": "#C4B796",
"Pantone PMS 4525": "#CCBF8E",
"Pantone PMS 453": "#D6CCAF",
"Pantone PMS 4535": "#DBCEA5",
"Pantone PMS 454": "#E2D8BF",
"Pantone PMS 4545": "#E5DBBA",
"Pantone PMS 455": "#665614",
"Pantone PMS 456": "#998714",
"Pantone PMS 457": "#B59B0C",
"Pantone PMS 458": "#DDCC6B",
"Pantone PMS 459": "#E2D67C",
"Pantone PMS 460": "#EADD96",
"Pantone PMS 461": "#EDE5AD",
"Pantone PMS 462": "#5B4723",
"Pantone PMS 4625": "#472311",
"Pantone PMS 463": "#755426",
"Pantone PMS 4635": "#8C5933",
"Pantone PMS 464": "#704214",
"Pantone PMS 4645": "#B28260",
"Pantone PMS 465": "#C1A875",
"Pantone PMS 4655": "#C49977",
"Pantone PMS 466": "#D1BF91",
"Pantone PMS 4665": "#D8B596",
"Pantone PMS 467": "#DDCCA5",
"Pantone PMS 4675": "#E5C6AA",
"Pantone PMS 468": "#E2D6B5",
"Pantone PMS 4685": "#EDD3BC",
"Pantone PMS 469": "#603311",
"Pantone PMS 4695": "#51261C",
"Pantone PMS 470": "#9B4F19",
"Pantone PMS 4705": "#7C513D",
"Pantone PMS 471": "#A34402",
"Pantone PMS 4715": "#99705B",
"Pantone PMS 472": "#EAAA7A",
"Pantone PMS 4725": "#B5917C",
"Pantone PMS 473": "#F4C4A0",
"Pantone PMS 4735": "#CCAF9B",
"Pantone PMS 474": "#F4CCAA",
"Pantone PMS 4745": "#D8BFAA",
"Pantone PMS 475": "#F7D3B5",
"Pantone PMS 4755": "#E2CCBA",
"Pantone PMS 476": "#593D2B",
"Pantone PMS 477": "#633826",
"Pantone PMS 478": "#7A3F28",
"Pantone PMS 479": "#AF8970",
"Pantone PMS 480": "#D3B7A3",
"Pantone PMS 481": "#E0CCBA",
"Pantone PMS 482": "#E5D3C1",
"Pantone PMS 483": "#6B3021",
"Pantone PMS 484": "#9B301C",
"Pantone PMS 485": "#CC0C00",
"Pantone PMS 486": "#ED9E84",
"Pantone PMS 487": "#EFB5A0",
"Pantone PMS 488": "#F2C4AF",
"Pantone PMS 489": "#F2D1BF",
"Pantone PMS 490": "#5B2626",
"Pantone PMS 491": "#752828",
"Pantone PMS 492": "#913338",
"Pantone PMS 494": "#F2ADB2",
"Pantone PMS 495": "#F4BCBF",
"Pantone PMS 496": "#F7C9C6",
"Pantone PMS 497": "#512826",
"Pantone PMS 4975": "#441E1C",
"Pantone PMS 498": "#6D332B",
"Pantone PMS 4985": "#844949",
"Pantone PMS 499": "#7A382D",
"Pantone PMS 4995": "#A56B6D",
"Pantone PMS 500": "#CE898C",
"Pantone PMS 5005": "#BC8787",
"Pantone PMS 501": "#EAB2B2",
"Pantone PMS 5015": "#D8ADA8",
"Pantone PMS 502": "#F2C6C4",
"Pantone PMS 5025": "#E2BCB7",
"Pantone PMS 503": "#F4D1CC",
"Pantone PMS 5035": "#EDCEC6",
"Pantone PMS 504": "#511E26",
"Pantone PMS 505": "#661E2B",
"Pantone PMS 506": "#7A2638",
"Pantone PMS 507": "#D8899B",
"Pantone PMS 508": "#E8A5AF",
"Pantone PMS 509": "#F2BABF",
"Pantone PMS 510": "#F4C6C9",
"Pantone PMS 511": "#602144",
"Pantone PMS 5115": "#4F213A",
"Pantone PMS 512": "#84216B",
"Pantone PMS 5125": "#754760",
"Pantone PMS 513": "#9E2387",
"Pantone PMS 5135": "#936B7F",
"Pantone PMS 514": "#D884BC",
"Pantone PMS 5145": "#AD8799",
"Pantone PMS 515": "#E8A3C9",
"Pantone PMS 5155": "#CCAFB7",
"Pantone PMS 516": "#F2BAD3",
"Pantone PMS 5165": "#E0C9CC",
"Pantone PMS 517": "#F4CCD8",
"Pantone PMS 5175": "#E8D6D1",
"Pantone PMS 518": "#512D44",
"Pantone PMS 5185": "#472835",
"Pantone PMS 519": "#63305E",
"Pantone PMS 5195": "#593344",
"Pantone PMS 520": "#703572",
"Pantone PMS 5205": "#8E6877",
"Pantone PMS 521": "#B58CB2",
"Pantone PMS 5215": "#B5939B",
"Pantone PMS 522": "#C6A3C1",
"Pantone PMS 5225": "#CCADAF",
"Pantone PMS 523": "#D3B7CC",
"Pantone PMS 5235": "#DDC6C4",
"Pantone PMS 524": "#E2CCD3",
"Pantone PMS 5245": "#E5D3CC",
"Pantone PMS 525": "#512654",
"Pantone PMS 5255": "#35264F",
"Pantone PMS 526": "#68217A",
"Pantone PMS 5265": "#493D63",
"Pantone PMS 527": "#7A1E99",
"Pantone PMS 5275": "#605677",
"Pantone PMS 528": "#AF72C1",
"Pantone PMS 5285": "#8C8299",
"Pantone PMS 529": "#CEA3D3",
"Pantone PMS 5295": "#B2A8B5",
"Pantone PMS 530": "#D6AFD6",
"Pantone PMS 5305": "#CCC1C6",
"Pantone PMS 531": "#E5C6DB",
"Pantone PMS 5315": "#DBD3D3",
"Pantone PMS 532": "#353842",
"Pantone PMS 533": "#353F5B",
"Pantone PMS 534": "#3A4972",
"Pantone PMS 535": "#9BA3B7",
"Pantone PMS 536": "#ADB2C1",
"Pantone PMS 537": "#C4C6CE",
"Pantone PMS 538": "#D6D3D6",
"Pantone PMS 539": "#003049",
"Pantone PMS 5395": "#02283A",
"Pantone PMS 540": "#00335B",
"Pantone PMS 5405": "#3F6075",
"Pantone PMS 541": "#003F77",
"Pantone PMS 5415": "#607C8C",
"Pantone PMS 542": "#6693BC",
"Pantone PMS 5425": "#8499A5",
"Pantone PMS 543": "#93B7D1",
"Pantone PMS 5435": "#AFBCBF",
"Pantone PMS 544": "#B7CCDB",
"Pantone PMS 5445": "#C4CCCC",
"Pantone PMS 545": "#C4D3DD",
"Pantone PMS 5455": "#D6D8D3",
"Pantone PMS 546": "#0C3844",
"Pantone PMS 5463": "#00353A",
"Pantone PMS 5467": "#193833",
"Pantone PMS 547": "#003F54",
"Pantone PMS 5473": "#26686D",
"Pantone PMS 5477": "#3A564F",
"Pantone PMS 548": "#004459",
"Pantone PMS 5483": "#609191",
"Pantone PMS 5487": "#667C72",
"Pantone PMS 549": "#5E99AA",
"Pantone PMS 5493": "#8CAFAD",
"Pantone PMS 5497": "#91A399",
"Pantone PMS 550": "#87AFBF",
"Pantone PMS 5503": "#AAC4BF",
"Pantone PMS 5507": "#AFBAB2",
"Pantone PMS 551": "#A3C1C9",
"Pantone PMS 5513": "#CED8D1",
"Pantone PMS 5517": "#C9CEC4",
"Pantone PMS 552": "#C4D6D6",
"Pantone PMS 5523": "#D6DDD6",
"Pantone PMS 5527": "#CED1C6",
"Pantone PMS 553": "#234435",
"Pantone PMS 5535": "#213D30",
"Pantone PMS 554": "#195E47",
"Pantone PMS 5545": "#4F6D5E",
"Pantone PMS 555": "#076D54",
"Pantone PMS 5555": "#779182",
"Pantone PMS 556": "#7AA891",
"Pantone PMS 5565": "#96AA99",
"Pantone PMS 557": "#A3C1AD",
"Pantone PMS 5575": "#AFBFAD",
"Pantone PMS 558": "#B7CEBC",
"Pantone PMS 5585": "#C4CEBF",
"Pantone PMS 559": "#C6D6C4",
"Pantone PMS 5595": "#D8DBCC",
"Pantone PMS 560": "#2B4C3F",
"Pantone PMS 5605": "#233A2D",
"Pantone PMS 561": "#266659",
"Pantone PMS 5615": "#546856",
"Pantone PMS 562": "#1E7A6D",
"Pantone PMS 5625": "#728470",
"Pantone PMS 563": "#7FBCAA",
"Pantone PMS 5635": "#9EAA99",
"Pantone PMS 564": "#05705E",
"Pantone PMS 5645": "#BCC1B2",
"Pantone PMS 565": "#BCDBCC",
"Pantone PMS 5655": "#C6CCBA",
"Pantone PMS 566": "#D1E2D3",
"Pantone PMS 5665": "#D6D6C6",
"Pantone PMS 567": "#265142",
"Pantone PMS 568": "#007263",
"Pantone PMS 569": "#008772",
"Pantone PMS 570": "#7FC6B2",
"Pantone PMS 571": "#AADBC6",
"Pantone PMS 572": "#BCE2CE",
"Pantone PMS 573": "#CCE5D6",
"Pantone PMS 574": "#495928",
"Pantone PMS 5743": "#3F4926",
"Pantone PMS 5747": "#424716",
"Pantone PMS 575": "#547730",
"Pantone PMS 5753": "#5E663A",
"Pantone PMS 5757": "#6B702B",
"Pantone PMS 576": "#608E3A",
"Pantone PMS 5763": "#777C4F",
"Pantone PMS 5767": "#8C914F",
"Pantone PMS 577": "#B5CC8E",
"Pantone PMS 5773": "#9B9E72",
"Pantone PMS 5777": "#AAAD75",
"Pantone PMS 578": "#C6D6A0",
"Pantone PMS 5783": "#B5B58E",
"Pantone PMS 5787": "#C6C699",
"Pantone PMS 579": "#C9D6A3",
"Pantone PMS 5793": "#C6C6A5",
"Pantone PMS 5797": "#D3D1AA",
"Pantone PMS 580": "#D8DDB5",
"Pantone PMS 5803": "#D8D6B7",
"Pantone PMS 5807": "#E0DDBC",
"Pantone PMS 581": "#605E11",
"Pantone PMS 5815": "#494411",
"Pantone PMS 582": "#878905",
"Pantone PMS 5825": "#75702B",
"Pantone PMS 583": "#AABA0A",
"Pantone PMS 5835": "#9E9959",
"Pantone PMS 584": "#CED649",
"Pantone PMS 5845": "#B2AA70",
"Pantone PMS 585": "#DBE06B",
"Pantone PMS 5855": "#CCC693",
"Pantone PMS 586": "#E2E584",
"Pantone PMS 5865": "#D6CEA3",
"Pantone PMS 587": "#E8E89B",
"Pantone PMS 5875": "#E0DBB5",
"Pantone PMS 600": "#F4EDAF",
"Pantone PMS 601": "#F2ED9E",
"Pantone PMS 602": "#F2EA87",
"Pantone PMS 603": "#EDE85B",
"Pantone PMS 604": "#E8DD21",
"Pantone PMS 605": "#DDCE11",
"Pantone PMS 606": "#D3BF11",
"Pantone PMS 607": "#F2EABC",
"Pantone PMS 608": "#EFE8AD",
"Pantone PMS 609": "#EAE596",
"Pantone PMS 610": "#E2DB72",
"Pantone PMS 611": "#D6CE49",
"Pantone PMS 612": "#C4BA00",
"Pantone PMS 613": "#AFA00C",
"Pantone PMS 614": "#EAE2B7",
"Pantone PMS 615": "#E2DBAA",
"Pantone PMS 616": "#DDD69B",
"Pantone PMS 617": "#CCC47C",
"Pantone PMS 618": "#B5AA59",
"Pantone PMS 619": "#968C28",
"Pantone PMS 620": "#847711",
"Pantone PMS 621": "#D8DDCE",
"Pantone PMS 622": "#C1D1BF",
"Pantone PMS 623": "#A5BFAA",
"Pantone PMS 624": "#7FA08C",
"Pantone PMS 625": "#5B8772",
"Pantone PMS 626": "#21543F",
"Pantone PMS 627": "#0C3026",
"Pantone PMS 628": "#CCE2DD",
"Pantone PMS 629": "#B2D8D8",
"Pantone PMS 630": "#8CCCD3",
"Pantone PMS 631": "#54B7C6",
"Pantone PMS 632": "#00A0BA",
"Pantone PMS 633": "#007F99",
"Pantone PMS 634": "#00667F",
"Pantone PMS 635": "#BAE0E0",
"Pantone PMS 636": "#99D6DD",
"Pantone PMS 637": "#6BC9DB",
"Pantone PMS 638": "#00B5D6",
"Pantone PMS 639": "#00A0C4",
"Pantone PMS 640": "#008CB2",
"Pantone PMS 641": "#007AA5",
"Pantone PMS 642": "#D1D8D8",
"Pantone PMS 643": "#C6D1D6",
"Pantone PMS 644": "#9BAFC4",
"Pantone PMS 645": "#7796B2",
"Pantone PMS 646": "#5E82A3",
"Pantone PMS 647": "#26547C",
"Pantone PMS 648": "#00305E",
"Pantone PMS 649": "#D6D6D8",
"Pantone PMS 650": "#BFC6D1",
"Pantone PMS 651": "#9BAABF",
"Pantone PMS 652": "#6D87A8",
"Pantone PMS 653": "#335687",
"Pantone PMS 654": "#0F2B5B",
"Pantone PMS 655": "#0C1C47",
"Pantone PMS 656": "#D6DBE0",
"Pantone PMS 657": "#C1C9DD",
"Pantone PMS 658": "#A5AFD6",
"Pantone PMS 659": "#7F8CBF",
"Pantone PMS 660": "#5960A8",
"Pantone PMS 661": "#2D338E",
"Pantone PMS 662": "#0C1975",
"Pantone PMS 663": "#E2D3D6",
"Pantone PMS 664": "#D8CCD1",
"Pantone PMS 665": "#C6B5C4",
"Pantone PMS 666": "#A893AD",
"Pantone PMS 667": "#7F6689",
"Pantone PMS 668": "#664975",
"Pantone PMS 669": "#472B59",
"Pantone PMS 670": "#F2D6D8",
"Pantone PMS 671": "#EFC6D3",
"Pantone PMS 672": "#EAAAC4",
"Pantone PMS 673": "#E08CB2",
"Pantone PMS 674": "#D36B9E",
"Pantone PMS 675": "#BC3877",
"Pantone PMS 676": "#A00054",
"Pantone PMS 677": "#EDD6D6",
"Pantone PMS 678": "#EACCCE",
"Pantone PMS 679": "#E5BFC6",
"Pantone PMS 680": "#D39EAF",
"Pantone PMS 681": "#B7728E",
"Pantone PMS 682": "#A05175",
"Pantone PMS 683": "#7F284F",
"Pantone PMS 684": "#EFCCCE",
"Pantone PMS 685": "#EABFC4",
"Pantone PMS 686": "#E0AABA",
"Pantone PMS 687": "#C9899E",
"Pantone PMS 688": "#B26684",
"Pantone PMS 689": "#934266",
"Pantone PMS 690": "#702342",
"Pantone PMS 691": "#EFD1C9",
"Pantone PMS 692": "#E8BFBA",
"Pantone PMS 693": "#DBA8A5",
"Pantone PMS 694": "#C98C8C",
"Pantone PMS 695": "#B26B70",
"Pantone PMS 696": "#8E4749",
"Pantone PMS 697": "#7F383A",
"Pantone PMS 698": "#F7D1CC",
"Pantone PMS 699": "#F7BFBF",
"Pantone PMS 700": "#F2A5AA",
"Pantone PMS 701": "#E8878E",
"Pantone PMS 702": "#D6606D",
"Pantone PMS 703": "#B73844",
"Pantone PMS 704": "#9E2828",
"Pantone PMS 705": "#F9DDD6",
"Pantone PMS 706": "#FCC9C6",
"Pantone PMS 707": "#FCADAF",
"Pantone PMS 708": "#F98E99",
"Pantone PMS 709": "#F26877",
"Pantone PMS 710": "#E04251",
"Pantone PMS 711": "#D12D33",
"Pantone PMS 712": "#FFD3AA",
"Pantone PMS 713": "#F9C9A3",
"Pantone PMS 714": "#F9BA82",
"Pantone PMS 715": "#FC9E49",
"Pantone PMS 716": "#F28411",
"Pantone PMS 717": "#D36D00",
"Pantone PMS 718": "#BF5B00",
"Pantone PMS 719": "#F4D1AF",
"Pantone PMS 720": "#EFC49E",
"Pantone PMS 721": "#E8B282",
"Pantone PMS 722": "#D18E54",
"Pantone PMS 723": "#BA7530",
"Pantone PMS 724": "#8E4905",
"Pantone PMS 725": "#753802",
"Pantone PMS 726": "#EDD3B5",
"Pantone PMS 727": "#E2BF9B",
"Pantone PMS 728": "#D3A87C",
"Pantone PMS 729": "#C18E60",
"Pantone PMS 730": "#AA753F",
"Pantone PMS 731": "#723F0A",
"Pantone PMS 732": "#60330A",
"Pantone PMS 801": "#0089AF",
"Pantone PMS 802": "#1CCE28",
"Pantone PMS 803": "#FFD816",
"Pantone PMS 804": "#FF7F1E",
"Pantone PMS 805": "#F93A2B",
"Pantone PMS 806": "#F7027C",
"Pantone PMS 807": "#BF008C",
"Pantone PMS 808": "#00A087",
"Pantone PMS 809": "#D6D60C",
"Pantone PMS 810": "#FFBC21",
"Pantone PMS 811": "#FF5416",
"Pantone PMS 812": "#FC074F",
"Pantone PMS 813": "#D10084",
"Pantone PMS 814": "#703FAF" }


