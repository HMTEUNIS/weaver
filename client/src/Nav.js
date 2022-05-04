function Nav ({myView, setmyView}){

    return(<div className="nav">
        <span onClick={() =>setmyView(1)} className="nav-options">~strands~</span>
        
        </div>
    )
}

export default Nav