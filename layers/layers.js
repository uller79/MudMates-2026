var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });
var format_StartZiel_1 = new ol.format.GeoJSON();
var features_StartZiel_1 = format_StartZiel_1.readFeatures(json_StartZiel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StartZiel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StartZiel_1.addFeatures(features_StartZiel_1);
var lyr_StartZiel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StartZiel_1, 
                style: style_StartZiel_1,
                popuplayertitle: 'Start Ziel',
                interactive: true,
                title: '<img src="styles/legend/StartZiel_1.png" /> Start Ziel'
            });
var format_Zuschauer_2 = new ol.format.GeoJSON();
var features_Zuschauer_2 = format_Zuschauer_2.readFeatures(json_Zuschauer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zuschauer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zuschauer_2.addFeatures(features_Zuschauer_2);
var lyr_Zuschauer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zuschauer_2, 
                style: style_Zuschauer_2,
                popuplayertitle: 'Zuschauer',
                interactive: true,
                title: '<img src="styles/legend/Zuschauer_2.png" /> Zuschauer'
            });
var format_Parkpltze_3 = new ol.format.GeoJSON();
var features_Parkpltze_3 = format_Parkpltze_3.readFeatures(json_Parkpltze_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkpltze_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkpltze_3.addFeatures(features_Parkpltze_3);
var lyr_Parkpltze_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkpltze_3, 
                style: style_Parkpltze_3,
                popuplayertitle: 'Parkplätze',
                interactive: true,
                title: '<img src="styles/legend/Parkpltze_3.png" /> Parkplätze'
            });
var format_BLACKLINE_4 = new ol.format.GeoJSON();
var features_BLACKLINE_4 = format_BLACKLINE_4.readFeatures(json_BLACKLINE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLACKLINE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLACKLINE_4.addFeatures(features_BLACKLINE_4);
var lyr_BLACKLINE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLACKLINE_4, 
                style: style_BLACKLINE_4,
                popuplayertitle: 'BLACK LINE',
                interactive: true,
                title: '<img src="styles/legend/BLACKLINE_4.png" /> BLACK LINE'
            });
var format_REDLINE_5 = new ol.format.GeoJSON();
var features_REDLINE_5 = format_REDLINE_5.readFeatures(json_REDLINE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDLINE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDLINE_5.addFeatures(features_REDLINE_5);
var lyr_REDLINE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDLINE_5, 
                style: style_REDLINE_5,
                popuplayertitle: 'RED LINE',
                interactive: true,
                title: '<img src="styles/legend/REDLINE_5.png" /> RED LINE'
            });
var format_BLUELINE_6 = new ol.format.GeoJSON();
var features_BLUELINE_6 = format_BLUELINE_6.readFeatures(json_BLUELINE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BLUELINE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLUELINE_6.addFeatures(features_BLUELINE_6);
var lyr_BLUELINE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BLUELINE_6, 
                style: style_BLUELINE_6,
                popuplayertitle: 'BLUE LINE',
                interactive: true,
                title: '<img src="styles/legend/BLUELINE_6.png" /> BLUE LINE'
            });
var format_HOWYOULIKESHORTCUT_7 = new ol.format.GeoJSON();
var features_HOWYOULIKESHORTCUT_7 = format_HOWYOULIKESHORTCUT_7.readFeatures(json_HOWYOULIKESHORTCUT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOWYOULIKESHORTCUT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOWYOULIKESHORTCUT_7.addFeatures(features_HOWYOULIKESHORTCUT_7);
var lyr_HOWYOULIKESHORTCUT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOWYOULIKESHORTCUT_7, 
                style: style_HOWYOULIKESHORTCUT_7,
                popuplayertitle: 'HOW YOU LIKE - SHORT CUT',
                interactive: true,
                title: '<img src="styles/legend/HOWYOULIKESHORTCUT_7.png" /> HOW YOU LIKE - SHORT CUT'
            });
var format_Zuschauerwege_8 = new ol.format.GeoJSON();
var features_Zuschauerwege_8 = format_Zuschauerwege_8.readFeatures(json_Zuschauerwege_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zuschauerwege_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zuschauerwege_8.addFeatures(features_Zuschauerwege_8);
var lyr_Zuschauerwege_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zuschauerwege_8, 
                style: style_Zuschauerwege_8,
                popuplayertitle: 'Zuschauerwege',
                interactive: true,
                title: '<img src="styles/legend/Zuschauerwege_8.png" /> Zuschauerwege'
            });
var format_Streckenposten_9 = new ol.format.GeoJSON();
var features_Streckenposten_9 = format_Streckenposten_9.readFeatures(json_Streckenposten_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streckenposten_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streckenposten_9.addFeatures(features_Streckenposten_9);
var lyr_Streckenposten_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streckenposten_9, 
                style: style_Streckenposten_9,
                popuplayertitle: 'Streckenposten',
                interactive: true,
                title: '<img src="styles/legend/Streckenposten_9.png" /> Streckenposten'
            });
var format_NatrlicheHindernisse_10 = new ol.format.GeoJSON();
var features_NatrlicheHindernisse_10 = format_NatrlicheHindernisse_10.readFeatures(json_NatrlicheHindernisse_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NatrlicheHindernisse_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NatrlicheHindernisse_10.addFeatures(features_NatrlicheHindernisse_10);
var lyr_NatrlicheHindernisse_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NatrlicheHindernisse_10, 
                style: style_NatrlicheHindernisse_10,
                popuplayertitle: 'Natürliche Hindernisse',
                interactive: true,
                title: '<img src="styles/legend/NatrlicheHindernisse_10.png" /> Natürliche Hindernisse'
            });
var format_Hindernisse_11 = new ol.format.GeoJSON();
var features_Hindernisse_11 = format_Hindernisse_11.readFeatures(json_Hindernisse_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hindernisse_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hindernisse_11.addFeatures(features_Hindernisse_11);
var lyr_Hindernisse_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hindernisse_11, 
                style: style_Hindernisse_11,
                popuplayertitle: 'Hindernisse',
                interactive: true,
                title: '<img src="styles/legend/Hindernisse_11.png" /> Hindernisse'
            });
var format_DRK_12 = new ol.format.GeoJSON();
var features_DRK_12 = format_DRK_12.readFeatures(json_DRK_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRK_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRK_12.addFeatures(features_DRK_12);
var lyr_DRK_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRK_12, 
                style: style_DRK_12,
                popuplayertitle: 'DRK',
                interactive: true,
                title: '<img src="styles/legend/DRK_12.png" /> DRK'
            });
var format_Rahmenprogramm_13 = new ol.format.GeoJSON();
var features_Rahmenprogramm_13 = format_Rahmenprogramm_13.readFeatures(json_Rahmenprogramm_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rahmenprogramm_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rahmenprogramm_13.addFeatures(features_Rahmenprogramm_13);
var lyr_Rahmenprogramm_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rahmenprogramm_13, 
                style: style_Rahmenprogramm_13,
                popuplayertitle: 'Rahmenprogramm',
                interactive: true,
                title: '<img src="styles/legend/Rahmenprogramm_13.png" /> Rahmenprogramm'
            });
var group_shapfiles = new ol.layer.Group({
                                layers: [lyr_StartZiel_1,lyr_Zuschauer_2,lyr_Parkpltze_3,lyr_BLACKLINE_4,lyr_REDLINE_5,lyr_BLUELINE_6,lyr_HOWYOULIKESHORTCUT_7,lyr_Zuschauerwege_8,lyr_Streckenposten_9,lyr_NatrlicheHindernisse_10,lyr_Hindernisse_11,lyr_DRK_12,lyr_Rahmenprogramm_13,],
                                fold: 'open',
                                title: 'shapfiles'});

lyr_Google_0.setVisible(true);lyr_StartZiel_1.setVisible(true);lyr_Zuschauer_2.setVisible(true);lyr_Parkpltze_3.setVisible(true);lyr_BLACKLINE_4.setVisible(true);lyr_REDLINE_5.setVisible(true);lyr_BLUELINE_6.setVisible(true);lyr_HOWYOULIKESHORTCUT_7.setVisible(true);lyr_Zuschauerwege_8.setVisible(true);lyr_Streckenposten_9.setVisible(true);lyr_NatrlicheHindernisse_10.setVisible(true);lyr_Hindernisse_11.setVisible(true);lyr_DRK_12.setVisible(true);lyr_Rahmenprogramm_13.setVisible(true);
var layersList = [lyr_Google_0,group_shapfiles];
lyr_StartZiel_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Zuschauer_2.set('fieldAliases', {'id': 'id', 'Bereich': 'Bereich', });
lyr_Parkpltze_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_BLACKLINE_4.set('fieldAliases', {'id': 'id', 'Laenge': 'Laenge', });
lyr_REDLINE_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'layer': 'layer', 'path': 'path', 'Länge': 'Länge', });
lyr_BLUELINE_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Länge': 'Länge', });
lyr_HOWYOULIKESHORTCUT_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Zuschauerwege_8.set('fieldAliases', {'id': 'id', });
lyr_Streckenposten_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_NatrlicheHindernisse_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Nummer': 'Nummer', });
lyr_Hindernisse_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Nummer': 'Nummer', });
lyr_DRK_12.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', });
lyr_Rahmenprogramm_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_StartZiel_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Zuschauer_2.set('fieldImages', {'id': 'TextEdit', 'Bereich': 'TextEdit', });
lyr_Parkpltze_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_BLACKLINE_4.set('fieldImages', {'id': 'TextEdit', 'Laenge': 'TextEdit', });
lyr_REDLINE_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Länge': 'TextEdit', });
lyr_BLUELINE_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Länge': 'TextEdit', });
lyr_HOWYOULIKESHORTCUT_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Zuschauerwege_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Streckenposten_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_NatrlicheHindernisse_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Nummer': 'TextEdit', });
lyr_Hindernisse_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Nummer': 'TextEdit', });
lyr_DRK_12.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Rahmenprogramm_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_StartZiel_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Zuschauer_2.set('fieldLabels', {'id': 'no label', 'Bereich': 'header label - visible with data', });
lyr_Parkpltze_3.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', });
lyr_BLACKLINE_4.set('fieldLabels', {'id': 'no label', 'Laenge': 'header label - visible with data', });
lyr_REDLINE_5.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'hidden field', 'desc': 'hidden field', 'src': 'hidden field', 'link1_href': 'hidden field', 'link1_text': 'hidden field', 'link1_type': 'hidden field', 'link2_href': 'hidden field', 'link2_text': 'hidden field', 'link2_type': 'hidden field', 'number': 'hidden field', 'type': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Länge': 'header label - visible with data', });
lyr_BLUELINE_6.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', 'Länge': 'header label - visible with data', });
lyr_HOWYOULIKESHORTCUT_7.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', });
lyr_Zuschauerwege_8.set('fieldLabels', {'id': 'no label', });
lyr_Streckenposten_9.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', });
lyr_NatrlicheHindernisse_10.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', 'Nummer': 'header label - visible with data', });
lyr_Hindernisse_11.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', 'Nummer': 'header label - visible with data', });
lyr_DRK_12.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', });
lyr_Rahmenprogramm_13.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', });
lyr_Rahmenprogramm_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});