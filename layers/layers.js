var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13170261.546233, 2805721.072196, 13171773.767806, 2806912.362460]
                            })
                        });
var format_ugyfdrsesy_2 = new ol.format.GeoJSON();
var features_ugyfdrsesy_2 = format_ugyfdrsesy_2.readFeatures(json_ugyfdrsesy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ugyfdrsesy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ugyfdrsesy_2.addFeatures(features_ugyfdrsesy_2);
var lyr_ugyfdrsesy_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ugyfdrsesy_2, 
                style: style_ugyfdrsesy_2,
                interactive: true,
    title: 'ugyfdrsesy<br />\
    <img src="styles/legend/ugyfdrsesy_2_0.png" /> 中<br />\
    <img src="styles/legend/ugyfdrsesy_2_1.png" /> 廢<br />\
    <img src="styles/legend/ugyfdrsesy_2_2.png" /> B<br />\
    <img src="styles/legend/ugyfdrsesy_2_3.png" /> M<br />\
    <img src="styles/legend/ugyfdrsesy_2_4.png" /> R<br />\
    <img src="styles/legend/ugyfdrsesy_2_5.png" /> T<br />\
    <img src="styles/legend/ugyfdrsesy_2_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_1975_1.setVisible(true);lyr_ugyfdrsesy_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1975_1,lyr_ugyfdrsesy_2];
lyr_ugyfdrsesy_2.set('fieldAliases', {'樓高': '樓高', '類型': '類型', });
lyr_ugyfdrsesy_2.set('fieldImages', {'樓高': 'TextEdit', '類型': 'TextEdit', });
lyr_ugyfdrsesy_2.set('fieldLabels', {'樓高': 'header label', '類型': 'header label', });
lyr_ugyfdrsesy_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});