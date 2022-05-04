import GoogleMapReact from 'google-map-react';
import StrandMarker from "./StrandMarker";
import { useState, useEffect } from "react"


export default function SimpleMap({ userLong,  userLat, setselectedPoint, center, setmyView, allStrands, finder}){
    const [newPoint, makeNewPoint] = useState({lat: 0, lng:0})
  const [mapProps, setMapProps] = useState({
    center: {
      lat: userLat,
      lng: userLong
    },
    zoom: 15
  });

  useEffect(() => {
    if (center.lat !== 0)
    {setMapProps({center: {
        lat: center.lat,
        lng: center.lng
      },
      zoom: 15
    })}
  }, [center]);

  function handleClick(event) {
makeNewPoint({lat: event.lat, lng: event.lng})
  }


  function handleSelect (strand) {
    setselectedPoint(strand)
    setmyView(3)

  }
  function handleNew (newPoint) {
    setselectedPoint(newPoint)
    setmyView(3)

  }


  return (
    // Important! Always set the container height explicitly
    <div className="map-container" style={{ height: '82vh', width: '58%' }}>
      <GoogleMapReact
      onClick={(e) => handleClick(e)}
        bootstrapURLKeys={{ key: "" }}
        center={mapProps.center}
        defaultZoom={mapProps.zoom}
      >
       {allStrands.map ((strand) =><StrandMarker
          lat={strand.lat}
          lng={strand.lng}
          icon={"twemoji:light-bulb"}
          onClick={() => handleSelect(strand)}

        />)}
        {finder.lat !== 0 ? <StrandMarker lat={finder.lat} lng={finder.lng} icon="simple-line-icons:bubble" color="green" /> : null}
        {newPoint.lat.length < 5 ?
        null : <StrandMarker  onClick ={() => handleNew(newPoint)} lat={newPoint.lat} lng={newPoint.lng} icon={"twemoji:writing-hand"}/>}
      </GoogleMapReact>
    </div>
  );
}