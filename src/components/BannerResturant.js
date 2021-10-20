import React from 'react'
import '../styles/BannerResturant.css'
import banRes from '../images/dashboard_image.jpg'
import bookmark from '../images/bookmark.png'
function BannerResturant() {
    return (
        <div>
            <div className="dashboard_image">

            <img alt="dashboard_image" src={banRes}/>

            <div className="div-save-this-resturent">
                <div className="section-save-this-resturent">
                    <span><img src={bookmark} style={{height:"16px", width:"16px"}}/></span>
                    <span style={{fontSize:" 15px",marginLeft:" 8px" , fontWeight:" 600"}}>Save this restaurent</span>
                </div>
            </div>

            </div>
        </div>
    )
}

export default BannerResturant
