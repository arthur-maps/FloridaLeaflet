var mapboxAccessToken = 'pk.eyJ1IjoiYXJ0aHVyLW1hcHMiLCJhIjoiY2p4NHdjNXJrMDI1azQ5bTRwOW5jc2F5bSJ9.OSGinHj1JWVuEHIe91Eikw';
var map = L.map('mapid').setView([29.7, -82.3], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: "© Mapbox"
}).addTo(map);


//L.esri.tiledMapLayer({
//  url: 'https://tiles.arcgis.com/tiles/cDCsY3VB02CTTRKx/arcgis/rest/services/Florida_Ag_Stratum/VectorTileServer',
//  maxZoom: 15
//}).addTo(map);

L.esri.Vector.layer('4bd5c14d1b2c4475bc8e423bce89bdc8').addTo(map);


