import React from 'react'
import '../styles/ProfileBanner.css'
import profile from '../images/profile_pic.jpg'
import location from '../images/locatioin_white.png'
function ProfileBanner(props) {

   
    return (
        <div>
            <div id="grad1">
        <div className="for-3-sections">
            <div style={{display: "flex",position: "relative"}}>
                <div className="section-1-image">  
                    <img src={profile} alt="Avatar" style={{width:"200px",height: "200px"}}/>
                  
                    
                    <div className="overlay">
                        
                        <div>
                        <a href="#abc" className="buy-btn">Upload photo</a>
                        <a href="#abc" className="buy-btn">Delete photo</a>
                        </div>	
                        </div>
                </div>
                <div className="section-2-user-details " style={{marginLeft: "60px"}}>
                    <div style={{bottom: "1%", position: "absolute",width: "100%"}}>
                    <h4 style={{color: "white",fontSize: "1.6rem"}}>{props.name}</h4>
                    <h6 style={{color: "white",fontWeight: "300",fontSize: "0.96rem"}}><span style={{marginBottom: "5px"}}><img alt="location-icon" src={location} style={{height: "15px",width: "15px",marginBottom: "4px",marginRight: "5px"}}/></span>Lisbon, Portugal</h6>
                    <div style={{display: "-webkit-inline-box"}}>
                    <h6 style={{backgroundColor:" black",color: "white",padding: "10px 10px", borderRadius: "15px 0px 0px 15px"}}>0.5 Foodie</h6>
                    <h6 style={{backgroundColor:" white",color: "black",padding: "10px 10px", borderRadius: "0px 15px 15px 0px"}}>150 Points to level up</h6>
                    </div>
                    </div>
                </div>
            </div>
            
            
            <div className="section-3-following" style={{display: "flex",marginBottom: "10px",alignItems: "flex-end"}}>
                <div style={{display: "flex"}}>
                    <div className="reviews alignment-section-following" style={{borderRadius:" 10px 0px 0px 10px",borderRight:"1px solid #cdcdcd"}}>
                        <h4>147</h4>
                        <h6>Reviews</h6>
                    </div>
                    <div className="photos alignment-section-following">
                        <h4>201</h4>
                        <h6>Photos</h6>
                    </div>
                    <div className="following alignment-section-following" style={{borderRadius:" 0px 10px 10px 0px",borderLeft: "1px solid #cdcdcd"}}>
                        <h4>3.2k</h4>
                        <h6>Followers</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default ProfileBanner
