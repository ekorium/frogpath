import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type geoObject = {
  loading: boolean;
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
  timestamp: number | null;
  error?: GeolocationPositionError | null;
};

const MapLibre = ({ state }: { state: geoObject }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (
      !state.loading &&
      state.latitude !== null &&
      state.longitude !== null &&
      mapContainer.current &&
      !mapInstance.current
    ) {
        
      mapInstance.current = new maplibregl.Map({
        container: mapContainer.current,
        
      style: 'https://tiles.openfreemap.org/styles/liberty',
        center: [state.longitude, state.latitude],
        zoom: 14,
      });

      
      new maplibregl.Marker({ color: "#00ff41" })
        .setLngLat([state.longitude, state.latitude])
        .setPopup(new maplibregl.Popup().setText("Här är du 📍"))
        .addTo(mapInstance.current);
    }

    if (mapInstance.current && state.latitude && state.longitude) {
      mapInstance.current.setCenter([state.longitude, state.latitude]);
    }
  }, [state.latitude, state.longitude, state.loading]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "8px",
        border: "2px solid #00ff41",
      }}
    />
  );
};

export default MapLibre;