var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Fotos_2601281_1 = new ol.format.GeoJSON();
var features_Fotos_2601281_1 = format_Fotos_2601281_1.readFeatures(json_Fotos_2601281_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fotos_2601281_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fotos_2601281_1.addFeatures(features_Fotos_2601281_1);
var lyr_Fotos_2601281_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fotos_2601281_1, 
                style: style_Fotos_2601281_1,
                popuplayertitle: 'Fotos_260128-1',
                interactive: true,
                title: '<img src="styles/legend/Fotos_2601281_1.png" /> Fotos_260128-1'
            });
var format_Fotos_2601291_2 = new ol.format.GeoJSON();
var features_Fotos_2601291_2 = format_Fotos_2601291_2.readFeatures(json_Fotos_2601291_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fotos_2601291_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fotos_2601291_2.addFeatures(features_Fotos_2601291_2);
var lyr_Fotos_2601291_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fotos_2601291_2, 
                style: style_Fotos_2601291_2,
                popuplayertitle: 'Fotos_260129-1',
                interactive: true,
                title: '<img src="styles/legend/Fotos_2601291_2.png" /> Fotos_260129-1'
            });
var format_Fotos_2601282_3 = new ol.format.GeoJSON();
var features_Fotos_2601282_3 = format_Fotos_2601282_3.readFeatures(json_Fotos_2601282_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fotos_2601282_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fotos_2601282_3.addFeatures(features_Fotos_2601282_3);
var lyr_Fotos_2601282_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fotos_2601282_3, 
                style: style_Fotos_2601282_3,
                popuplayertitle: 'Fotos_260128-2',
                interactive: true,
                title: '<img src="styles/legend/Fotos_2601282_3.png" /> Fotos_260128-2'
            });

lyr_Googlesatelite_0.setVisible(true);lyr_Fotos_2601281_1.setVisible(true);lyr_Fotos_2601291_2.setVisible(true);lyr_Fotos_2601282_3.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_Fotos_2601281_1,lyr_Fotos_2601291_2,lyr_Fotos_2601282_3];
lyr_Fotos_2601281_1.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Fotos_2601291_2.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Fotos_2601282_3.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Fotos_2601281_1.set('fieldImages', {'fid': '', 'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_Fotos_2601291_2.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_Fotos_2601282_3.set('fieldImages', {'fid': '', 'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_Fotos_2601281_1.set('fieldLabels', {'fid': 'no label', 'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Fotos_2601291_2.set('fieldLabels', {'fid': 'no label', 'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Fotos_2601282_3.set('fieldLabels', {'fid': 'no label', 'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Fotos_2601282_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});