import React from "react";
import SimpleMap from "./SimpleMap";
import Nav from "./Nav";
import Interface from "./Interface"
import "./App.css"
import {useState} from 'react'
import useGeolocation from 'react-hook-geolocation'

function App (){
const geolocation = useGeolocation()
const [myView, setmyView] = useState(1)
const userLat = geolocation.latitude;
const userLong = geolocation.longitude;

  return (<>
  
  <header className="header">we_ver</header>
  <Nav myView={myView} setmyView={setmyView}/>
  <Interface myView={myView}/>
  {geolocation.latitude ?
    <SimpleMap userLong={userLong} userLat={userLat}/>
    : <p>loading</p> }
    <header className="footer">a digital space for collaborative writing about irl place.</header>

    
  </>)
}

export default App