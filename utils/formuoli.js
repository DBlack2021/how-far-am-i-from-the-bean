export const BEAN_COORDS = {
  lat: 41.8763,
  lng: -87.6207
}

const rad = function(x) {
  return x * Math.PI / 180;
};

export const getBeanDistance = function(p1) {
  let R = 6378137; // Earth’s mean radius in meter
  let dLat = rad(BEAN_COORDS.lat - p1.lat);
  let dLong = rad(BEAN_COORDS.lng - p1.lng);
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(BEAN_COORDS.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d / 1609; // returns the distance in miles, 1609 is a conversion factor
};
