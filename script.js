var map = L.map('map').setView([51.5350512,-0.09312638843529097], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//emirates 51.55504035,-0.1083996708672374
//westham 51.53862065,-0.016623759002470637
//spurs 51.604157,-0.0662604100000004
//chelsea 51.481686499999995,-0.19103517666346065
var emirates = document.querySelector('#emirates');
var chelsea = document.querySelector('#bridge');
var spurs = document.querySelector('#spurs');
var hammers = document.querySelector('#westham');

stadiums = [emirates, chelsea, spurs, hammers];

names = ["Emirates Stadium", "Stamford Bridge", "Hotspur Stadium", "Olympic Stadium"];
coords = [[51.55504035,-0.1083996708672374], [51.481686499999995,-0.19103517666346065], [51.604157,-0.0662604100000004], [51.53862065,-0.016623759002470637]];
for(let i = 0; i < coords.length; i++){
    var marker = L.marker(coords[i]).addTo(map);
    var toollip = L.tooltip({
        permanent: true
    }).setContent(names[i]);
    marker.bindTooltip(toollip).openTooltip();
    //zoom and fly
    stadiums[i].addEventListener("click", ()=>{
        map.flyTo(coords[i], 15);
    })
}

