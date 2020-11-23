var wms_layers = [];

var format_Gabes_Tbolbou_0 = new ol.format.GeoJSON();
var features_Gabes_Tbolbou_0 = format_Gabes_Tbolbou_0.readFeatures(json_Gabes_Tbolbou_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gabes_Tbolbou_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gabes_Tbolbou_0.addFeatures(features_Gabes_Tbolbou_0);
var lyr_Gabes_Tbolbou_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gabes_Tbolbou_0, 
                style: style_Gabes_Tbolbou_0,
                interactive: true,
    title: 'Gabes_Tbolbou<br />\
    <img src="styles/legend/Gabes_Tbolbou_0_0.png" /> 1<br />\
    <img src="styles/legend/Gabes_Tbolbou_0_1.png" /> 2<br />\
    <img src="styles/legend/Gabes_Tbolbou_0_2.png" /> 3<br />\
    <img src="styles/legend/Gabes_Tbolbou_0_3.png" /> 4<br />\
    <img src="styles/legend/Gabes_Tbolbou_0_4.png" /> 5<br />\
    <img src="styles/legend/Gabes_Tbolbou_0_5.png" /> 6<br />\
    <img src="styles/legend/Gabes_Tbolbou_0_6.png" /> 7<br />\
    <img src="styles/legend/Gabes_Tbolbou_0_7.png" /> <br />'
        });

lyr_Gabes_Tbolbou_0.setVisible(true);
var layersList = [lyr_Gabes_Tbolbou_0];
lyr_Gabes_Tbolbou_0.set('fieldAliases', {'Class_Name': 'Class_Name', 'Class_Id': 'Class_Id', 'Parts': 'Parts', 'Length': 'Length', 'Area': 'Area', });
lyr_Gabes_Tbolbou_0.set('fieldImages', {'Class_Name': 'TextEdit', 'Class_Id': 'Range', 'Parts': 'Range', 'Length': 'TextEdit', 'Area': 'TextEdit', });
lyr_Gabes_Tbolbou_0.set('fieldLabels', {'Class_Name': 'no label', 'Class_Id': 'no label', 'Parts': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_Gabes_Tbolbou_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});