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

function Location({ state }: { state: geoObject }) {
  if (state.loading) {
    return <p>loading... (you may need to enable permissions)</p>;
  }

  if (state.error) {
    return <p>Error: {state.error.message}</p>;
  }

  const date = new Date(state.timestamp ?? Date.now());
  const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  const speedMs = state.speed ?? 0;
  const formattedSpeedMs = speedMs?.toFixed(2);
  const speedKmh = speedMs * 3.6; // 1 m/s = 3.6 km/h
  const formattedSpeed = speedKmh.toFixed(2);

  const formatedAltitude = state.altitude?.toFixed(2);

  return (
    <>
      <p>
        <strong>Loading: </strong>
        {state.loading.toString()}
      </p>
      <p>
        <strong>Accuracy: </strong>
        {state.accuracy}
      </p>
      <p>
        <strong>Altitude Accuracy: </strong>
        {state.altitudeAccuracy}
      </p>
      <p>
        <strong>heading: </strong>
        {state.heading}
      </p>
      <p>
        <strong>Latitude: </strong>
        {state.latitude}
      </p>
      <p>
        <strong>Longitude: </strong>
        {state.longitude}
      </p>
      <p>
        <strong>Speed:</strong>{" "}
        {state.speed
          ? `${formattedSpeedMs} m/s (${formattedSpeed} km/h)`
          : "You are not moving"}
      </p>
      <p>
        <strong>Altitude:</strong>{" "}
        {state.altitude ? `${formatedAltitude} m` : "No altitude data"}
      </p>
      <p>
        <strong>Timestamp converted: </strong>
        {formattedTime}
      </p>
      <p>
        <strong>Latitude: </strong>
        {state.latitude}
      </p>
      <p>
        <strong>Error: </strong>
        {state.error}
      </p>
    </>
  );
}
export default Location;
