import React from 'react'
import '../styles/BusinessNavbar.css'
import logo from '../images/logo.png'
import downArrow from '../images/triangle-right-arrow.svg'

function BusinessNavbar() {
    return (
        <div className="header-business">
        <div className="nav-business">
            <div className="logo-business">
                <img alt="logo-pic" src={logo}/>
            </div>
            <div className="center-nav-content">
                <ul>
                    <li><a href="#abc">Products<span><img alt="down-arrow" src={downArrow}/></span></a></li>
                    <li><a href="#abc">Add a Restaurent</a></li>
                    <li><a href="#abc">Contact us</a></li>
                </ul>
            </div>
            <div className="right-nav-btn">
                <button className="login-btn">Login</button>
                <button className="create-act-btn">Create Account</button>
            </div>
        </div>
    </div>
    )
}

export default BusinessNavbar
