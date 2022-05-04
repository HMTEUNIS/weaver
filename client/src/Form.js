import {useState, useEffect} from "react"
const Form = ({point}) => {
    const [input, setIn] = useState("")
    const [counter, setCounter] = useState(16)

    useEffect(() => {
        setCounter(15 - input.length);
      },[input]);

  return (<>
    <div className="point-card-container">
    <p>Latitude: {point.lat} Longitude: {point.lng}</p>
    <span>{point.words} <input onChange={e => setIn(e.target.value)}></input> {counter} {counter > -1 ? <a className="check">✅</a> : <a>❌</a>}</span>
    
    

    </div>
    </>
  )
}

export default Form