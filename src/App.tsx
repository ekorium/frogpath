import { useGeolocation } from "@uidotdev/usehooks";
import MapLibre from "./hooks/MapLibre";
import Location from "./hooks/UseGeoLocation";

export default function App() {
const state = useGeolocation({ enableHighAccuracy: true, maximumAge: 10000 });

  if (state.loading) {
    return <p>📍 Hämtar din position...</p>;
  }

  if (state.error) {
    return <p> Kunde inte hämta position: {state.error.message}</p>;
  }

  return (
    <>
      <h1>MapLibre + Geolocation </h1>

      <MapLibre state={state} />

      <section style={{ marginTop: "2rem" }}>
        <h2>Din position och sensordata</h2>
        <Location state={state} />
      </section>
    </>
  );
}