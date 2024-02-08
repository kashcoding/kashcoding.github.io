import GoogleMapReact from "google-map-react";
import Logo from "./Logo";
import { FaLocationArrow } from "react-icons/fa";

const Marker = () => (
  <div style={{ display: "flex" }}>
    {<FaLocationArrow style={{ position: "absolute", fontSize: "1rem" }} />}
    {<Logo style={{ position: "relative", paddingRight: "0.2em" }} />}
  </div>
);

function Map() {
  const defaultProps = {
    center: {
      lat: 51.509865,
      lng: -0.118092,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "50vh", width: "60%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={51.5091} lng={-0.1277} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
