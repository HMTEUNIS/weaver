import PointCard from "./PointCard"
import DisplayPoints from "./DisplayPoints"
import {useState} from 'react'
function Interface ({myView, selectedPoint, allStrands, setFinder, setCenter}){
const [see, setSee] = useState(false)
    if (myView === 1) {
        return <div className="interface-container">
            {allStrands.map ((point)=> <DisplayPoints setCenter={setCenter} setFinder={setFinder} point={point}/>)}
        </div>
    }
    if (myView === 2) {
        return <div className="interface-container"><p>other</p></div>
    }
    if (myView === 3) {
      return  <div className="interface-container"><PointCard point={selectedPoint}/></div>
    }
}
export default Interface
