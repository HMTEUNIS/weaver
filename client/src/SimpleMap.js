import GoogleMapReact from 'google-map-react';
import StrandMarker from "./StrandMarker";


export default function SimpleMap({ userLong, userLat}){
  const defaultProps = {
    center: {
      lat: userLat,
      lng: userLong
    },
    zoom: 15
  };
  console.log("Lt", userLong, userLat)

  return (
    // Important! Always set the container height explicitly
    <div className="map-container" style={{ height: '82vh', width: '58%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        //AIzaSyDHfJutC_HU5xyLeEG5IJ7EShcYiu1b33Y
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <StrandMarker
          lat={41}
          lng={-73.9095279}
        //   text="My Markefeterrertewrwrwer"
        />
      </GoogleMapReact>
    </div>
  );
}