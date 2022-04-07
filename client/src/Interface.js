function Interface ({myView}){
console.log(typeof  myView)
    return (


        <><div className="interface-container">
            {myView === 1 ? <p>load</p>: <p>other</p>

            }
            </div></>
    )
}
export default Interface
