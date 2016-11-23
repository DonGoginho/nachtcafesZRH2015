var size = 0;
var ranges_nachtcafe2015_ha_raster = [[0.000000, 0.000000, [ new ol.style.Style({
         
    })]],
[0.000000, 1.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.82)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(168,217,240,0.82)"})
    })]],
[1.000000, 2.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.82)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(152,195,226,0.82)"})
    })]],
[2.000000, 3.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.82)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(136,172,212,0.82)"})
    })]],
[3.000000, 4.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.82)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(121,150,198,0.82)"})
    })]],
[4.000000, 6.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.82)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(128,118,182,0.82)"})
    })]],
[6.000000, 9.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.82)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(136,86,167,0.82)"})
    })]],
[9.000000, 11.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.82)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(113,50,145,0.82)"})
    })]],
[11.000000, 16.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.82)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(91,15,124,0.82)"})
    })]]];
var styleCache_nachtcafe2015_ha_raster={}
var style_nachtcafe2015_ha_raster = function(feature, resolution){
    var value = feature.get("AnzNachtCa");
    var style = ranges_nachtcafe2015_ha_raster[0][2];
    for (i = 0; i < ranges_nachtcafe2015_ha_raster.length; i++){
        var range = ranges_nachtcafe2015_ha_raster[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_nachtcafe2015_ha_raster[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_nachtcafe2015_ha_raster[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_nachtcafe2015_ha_raster[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};