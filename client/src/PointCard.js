import { useState, useEffect } from 'react'

export default function PointCard ({point}) {
    const [input, setIn] = useState("")
    const [counter, setCounter] = useState(16)

    useEffect(() => {
        setCounter(15 - input.length);
      },[input]);

      function handleSubmit(e) {
        e.preventDefault();
    
        const newStrand = {
          words: input,
          lat: point.lat,
          lng: point.lng
        }
        console.log(newStrand);
    
        fetch("/strands", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStrand),
        })
        .then((window.location.href = "/"));
          }


return (<>
    <div className="point-card-container">
    <p>Latitude: {point.lat} Longitude: {point.lng}</p>
    <span>{point.words}<input onChange={e => setIn(e.target.value)}></input> {counter} {counter > -1 ? <a className="check" onClick={e => handleSubmit(e)}>✅</a> : <a>❌</a>}</span>
    
    

    </div>
    </>
  )
}
