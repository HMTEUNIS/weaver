import React from "react";
import SimpleMap from "./SimpleMap";
import Nav from "./Nav";
import Interface from "./Interface"
import "./App.css"
import {useState, useEffect} from 'react'
import useGeolocation from 'react-hook-geolocation'

function App (){
const geolocation = useGeolocation()
const [myView, setmyView] = useState(1)
const [selectedPoint, setselectedPoint] = useState("")
const [allStrands, setAll] = useState([])
const [finder, setFinder] = useState({lat: 0, lng:0})
const [center, setCenter] = useState({lat: 0, lng:0})
const [re, setRe] = useState(false)
const userLat = geolocation.latitude;
const userLong = geolocation.longitude;
useEffect(() => {
  fetch(`/strands`)
    .then((res) => res.json())
    .then((data) => {
      setAll(data);
    });
}, [re]);
  return (<>
  
  <header className="header">we_ver</header>
  <Nav myView={myView} setmyView={setmyView}/>
  <Interface myView={myView} re={re} setRe={setRe} selectedPoint={selectedPoint} setCenter={setCenter} setFinder={setFinder} allStrands={allStrands}/>
  {geolocation.latitude ?
    <SimpleMap userLong={userLong} setmyView={setmyView} finder={finder}  center={center} allStrands={allStrands} setselectedPoint={setselectedPoint} userLat={userLat}/>
    : <><p>finding your geolocation and loading Google Maps.</p></> }
    <header className="footer">a digital space for collaborative writing about irl place.</header>

    
  </>)
}

export default App