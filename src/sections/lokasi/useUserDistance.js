"use client";

import { useEffect, useState } from "react";
import { calcDistance, GN_COORDS } from "./lokasiConfig";

export default function useUserDistance() {
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (!("geolocation" in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userCoords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setDistance(calcDistance(userCoords, GN_COORDS));
      },
      () => {},
      { enableHighAccuracy: true }
    );
  }, []);

  return distance;
}