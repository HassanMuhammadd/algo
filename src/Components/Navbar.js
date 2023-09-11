import React, {useEffect, useState} from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [active,setActive] = useState(0);

    useEffect(()=>{
        if(window.location.pathname==='/bfs')setActive(3)
        if(window.location.pathname==='/binary')setActive(2)
        if(window.location.pathname==='/linear')setActive(1)
    },[])
    return (
	<nav className="navbar navbar-expand-lg bg-dark ">
<div className="container-fluid">
    <Link to="/" className={`navbar-brand mx-lg-5 mx-3 fs-3 textColor canHover ${active===0?"text-white":"textColor"}`} onClick={()=>setActive(0)} >Algoz</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/linear" className={`nav-link px-3 canHover ${active===1?"text-white":"textColor"}`}  onClick={()=>{setActive(1)}} >Linear Search</Link >
        </li>
        <li className="nav-item">
            <Link to="/binary" className={`nav-link px-3 canHover ${active===2?"text-white":"textColor"}`} onClick={()=>{setActive(2)}} >Binary Search</Link >
        </li>
        <li className="nav-item">
            <Link to="/bfs" className={`nav-link px-3 canHover ${active===3?"text-white":"textColor"}`} onClick={()=>{setActive(3)}} >BFS</Link >
        </li>


        </ul>
    </div>
</div>
</nav>
    )
}
