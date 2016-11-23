var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
}),
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_nachtcafe2015_ha_raster = new ol.format.GeoJSON();
var features_nachtcafe2015_ha_raster = format_nachtcafe2015_ha_raster.readFeatures(geojson_nachtcafe2015_ha_raster, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nachtcafe2015_ha_raster = new ol.source.Vector();
jsonSource_nachtcafe2015_ha_raster.addFeatures(features_nachtcafe2015_ha_raster);var lyr_nachtcafe2015_ha_raster = new ol.layer.Vector({
                source:jsonSource_nachtcafe2015_ha_raster, 
                style: style_nachtcafe2015_ha_raster,
                title: "nachtcafe2015_ha_raster"
            });

lyr_nachtcafe2015_ha_raster.setVisible(true);
var layersList = [baseLayer,lyr_nachtcafe2015_ha_raster];
lyr_nachtcafe2015_ha_raster.set('fieldAliases', {'AnzNachtCa': 'AnzNachtCa', });
lyr_nachtcafe2015_ha_raster.set('fieldImages', {'AnzNachtCa': 'TextEdit', });
lyr_nachtcafe2015_ha_raster.set('fieldLabels', {'AnzNachtCa': 'header label', });
