export const MAPS_LOCATION =
  "Jl.+Gelap+Nyawang,+Lb.+Siliwangi,+Kecamatan+Coblong,+Kota+Bandung,+Jawa+Barat+40132";

export const MAPS_DIRECT_URL = "https://maps.app.goo.gl/kAUnsipvPasm7YzT9";

export const GN_COORDS = { lat: -6.8915, lng: 107.6107 };

export function calcDistance(coord1, coord2) {
  const R = 6371;
  const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
  const dLng = ((coord2.lng - coord1.lng) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((coord1.lat * Math.PI) / 180) *
      Math.cos((coord2.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}