/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.1
 *  Project: http://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","esri/arcgis/utils","esri/units","dojo/i18n!config/nls/main"],function(a,b,c,d,e,f){return a(null,{_initWebMap:function(a,c,e){e=e||{},!e.mapOptions&&this.config.mapOptions&&(e.mapOptions=this.config.mapOptions);var f=d.createMap(a,c,e);return f.then(b.hitch(this,function(a){this.webMap={clickEventHandle:a.clickEventHandle,clickEventListener:a.clickEventListener,itemInfo:a.itemInfo},this.map=a.map,this._initWebMapLayerInfos(a),this._initWebMapWidgets(a)})),f},_initWebMapLayerInfos:function(a){if(this.config.layerControlLayerInfos)this.layerControlLayerInfos=this.config.layerControlLayerInfos;else if(a.itemInfo&&a.itemInfo.itemData){var e={CSV:"csv",ArcGISMapServiceLayer:"dynamic",ArcGISFeatureLayer:"feature",GeoRSSLayer:"georss",ArcGISImageServiceLayer:"image","esri/layers/ArcGISImageServiceVectorLayer":"imagevector",KML:"kml",ArcGISStreamLayer:"stream",ArcGISTiledMapServiceLayer:"tiled",VectorTileLayer:"vectortile",WebTiledLayer:"webtiled",WMS:"wms"},f=a.itemInfo.itemData.operationalLayers;c.forEach(f,b.hitch(this,function(a){var b=e[a.layerType];b&&this.layerControlLayerInfos.push({layer:a.layerObject,type:b,title:a.title})}))}this.config.legendLayerInfos?this.legendLayerInfos=this.config.legendLayerInfos:this.legendLayerInfos=d.getLegendLayers(a)},_initWebMapWidgets:function(a){if(a.itemInfo&&a.itemInfo.itemData){var c=this.config.widgets,d=a.itemInfo.itemData.bookmarks;if(d&&d.length>0&&(c.bookmarks=this.mixinDeep({include:!0,id:"bookmarks",type:"titlePane",path:"gis/dijit/Bookmarks",title:"Bookmarks",open:!1,position:999,options:{map:!0,editable:!1,bookmarks:d}},c.bookmarks||{})),a.itemInfo.itemData.applicationProperties){var g=a.itemInfo.itemData.applicationProperties.viewing;g.basemapGallery&&g.basemapGallery.enabled&&(c.basemaps&&c.basemaps.include||(c.basemapGallery=this.mixinDeep({include:!0,id:"basemapGallery",type:"domNode",path:"gis/dijit/BasemapGallery",srcNodeRef:"basemapsDijit",options:{map:!0}},c.basemapGallery||{}))),g.routing&&g.routing.enabled&&(c.directions=this.mixinDeep({include:!0,id:"directions",type:"titlePane",path:"gis/dijit/Directions",title:f.viewer.widgets.directions,open:!1,position:999,options:{map:!0,mapRightClickMenu:!0,options:{routeTaskUrl:"https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route",routeParams:{directionsLanguage:"en-US",directionsLengthUnits:e.MILES},active:!1}}},c.directions||{})),g.measure&&g.measure.enabled&&(c.measure=this.mixinDeep({include:!0,id:"measurement",type:"titlePane",path:"gis/dijit/Measurement",title:f.viewer.widgets.measure,open:!1,position:999,options:{map:!0,mapClickMode:!0,defaultAreaUnit:e.SQUARE_MILES,defaultLengthUnit:e.MILES}},c.measure||{})),g.search&&g.search.enabled&&(c.search=this.mixinDeep({include:!0,type:"domNode",path:"esri/dijit/Search",srcNodeRef:"geocoderButton",options:{map:!0,visible:!0,enableButtonMode:!0,expanded:!0,disablePlaceFinder:g.search.disablePlaceFinder,hintText:g.search.hintText,layers:g.search.layers}},c.search||{}))}if(a.itemInfo.itemData.widgets){var h=a.itemInfo.itemData.widgets.timeSlider;h&&(c.timeSlider=this.mixinDeep({include:!0,type:"domNode",path:"esri/dijit/TimeSlider",srcNodeRef:"geocoderButton",options:b.mixin({map:!0},h)},c.slider||{}))}}}})});
//# sourceMappingURL=_WebMapMixin.js.map