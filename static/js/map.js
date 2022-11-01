// Initialize and add the map
function initMap() {
  // The location of Uluru, 
  const pivot = { lat: 37.88926821336457, lng: 23.753192343177425 };
  // The map, centered at Pivot
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: pivot,
    mapId: "ffe802bb303559db",
    disableDefaultUI: true,
  });

  // The marker, positioned at Pivot
  const marker = new google.maps.Marker({
    position: pivot,
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 16,
      fillColor: "#B4FF00",
      fillOpacity: 1,
      strokeWeight: 0,
    },
  });
}

window.initMap = initMap;

