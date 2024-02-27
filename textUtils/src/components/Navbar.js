import React, {useState} from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

 const Navbar = (props)=>{
    

    const handleYellow = () => {
        document.body.style.backgroundColor= "#e3ea62";
        
    }

    const handleGreen = () => {
        document.body.style.backgroundColor= "#85ea74";
    }

    const handlePink = () => {
        document.body.style.backgroundColor= "#f09eac";
    }

    const handlePurple = () => {
        document.body.style.backgroundColor= "#904690";
    }


    return(
        <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form> */}
                </div>
                <div>
                    <button type="button" className="yellow" onClick={handleYellow}></button>
                    <button type="button" className="green" onClick={handleGreen}></button>
                    <button type="button" className="pink" onClick={handlePink}></button>
                    <button type="button" className="purple" onClick={handlePurple}></button>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} mx-4`}>
                    <input className="form-check-input" onClick={props.handleMode} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                </div>
        </div>
</nav>
    </>
    );
}
export default Navbar;

//this is how we set the type of props, also isRequired makes it must to pass the props otherwise will get an error in console

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}