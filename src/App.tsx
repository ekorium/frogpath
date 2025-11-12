import { useEffect, useRef } from "react";
import { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function App() {
  const map = useRef<Map>(null);

  useEffect(() => {
    map.current = new Map({
      container: "map",
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: [0, 0],
      zoom: 0,
    });
  }, []);

  return <div id="map"></div>;
}
