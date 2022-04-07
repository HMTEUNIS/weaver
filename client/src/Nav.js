function Nav ({myView, setmyView}){

    return(<div className="nav">
        <span onClick={() =>setmyView(1)} className="nav-options">my strands</span>
        <span onClick={() =>setmyView(2)} className="nav-options">our tapestries</span>
        
        </div>
    )
}

export default Nav