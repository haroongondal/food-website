import React from 'react'
import '../styles/DashboardBusiness.css'
import backgroundImage from '../images/business-side-background.jpg'

function DashboardBusiness() {
    return (
        <div className="dashboard-image-business">

        <img alt="dashboard_image" src={backgroundImage}/>

        <div className="dashboard-text-section">
            <div className="up">
                <h1>Register your restaurant on DeaseApp</h1>
                <h6>for free and get more customers!</h6>
            </div>
            <div className="down">
                <button className="Register-btn">Register your restaurent</button>
                <button className="Restaurant-login-btn">Restaurant already listed? login now</button>
            </div>
        </div>

    </div>
    )
}

export default DashboardBusiness
