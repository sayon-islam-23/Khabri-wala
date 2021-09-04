
import React, { useState } from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {

    const [show, setShow] = useState(false)
    return (
        <>
        <section className="navbar-bg">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
         <i class="fas fa-tablet-alt" style={{fontSize:"27px",color:"white", marginRight:"15px"}}></i>
        <h5 style={{color:"white"}}>Khabri-Wala</h5>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() =>setShow(!show)}>
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? "show": ""}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page"  to="/">General</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/business">Business</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/health">Health</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/science">Science</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/technology">Technology</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav> 
    </section> 
        </>
    )
}

export default Navbar

