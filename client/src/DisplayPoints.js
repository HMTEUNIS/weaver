import { useState, useEffect } from 'react'

export default function DisplayPoint ({point, setFinder, setre, re, setCenter}) {
    const [input, setIn] = useState("")
    const [counter, setCounter] = useState(16)
    const [see, setSee] = useState(false)
useEffect(() => {
        setCounter(15 - input.length);
      },[input]);


      function handleSubmit (e){
        const submission = {
          words: [point.words, input].join(' '),
        }
        console.log("submission", submission)
        
          fetch(`/strands/${point.id}`, {
            method: 'PATCH', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(submission),
          })
          .then(res => res.json())
          .then(data => {
            setre(!re);
          })
          .catch((error) => {
            console.error('Error:', error);
          })
          .then((window.location.href = "/"));

              }
    
  return (<>
    <div className="point-card-container" onClick={() => setCenter({lat: point.lat, lng: point.lng})} onMouseOver={() => setFinder({lat: point.lat, lng: point.lng})} onMouseLeave={() => setFinder({lat: 0, lng: 0})}>
    <p  >Latitude: {point.lat} Longitude: {point.lng}</p>
    <span>{point.words} <input onChange={e => setIn(e.target.value)}></input> {counter} {counter > -1 ? <a className="check" onClick={() =>handleSubmit()} >✅</a> : <a>❌</a>}</span>
    
    

    </div>
    </>
  )
}