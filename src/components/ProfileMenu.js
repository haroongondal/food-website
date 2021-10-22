import React from 'react'
import '../styles/ProfileMenu.css'
import star from '../images/star.svg'
import follower from '../images/follower.svg'
import image from '../images/image.svg'
import user from '../images/user.svg'
import order from '../images/order.svg'
import messages from '../images/message.svg'
import heart from '../images/heart.svg'
import logout from '../images/logout.svg'

import SuggestedFollowers from './SuggestedFollowers'
import { Link } from 'react-router-dom'
function ProfileMenu() {
    return (
        <div class="alignment listing_sidebar" style={{width:"25%"}}>
                <div class="container" style={{display: "contents"}}>
                     <div className="div-menu-bar" style={{backgroundColor:"#2A2A2A",padding: "10px 15px",display: "grid"}}>
                        <div className="profile-data" style={{display: "inline-grid",marginTop: "5px"}}>
                            <div>
                                <h6 style={{fontSize:"0.75rem",color:"#8A8888"}}>Profile data</h6>
                            </div>
                            <div className="for-link" style={{display: "inline-grid",marginTop: "10px"}}>

                            <Link to = "/ReviewHistoryPage">
                                <div className="alignment-profile-data">
                                    <img alt="star-icon" src={star}/>
                                    <h6>Reviews</h6>
                                </div>
                            </Link>

                                <div className="alignment-profile-data">
                                    <img alt="follower-icon" src={follower}/>
                                    <h6>Followers</h6>
                                </div>

                                <div className="alignment-profile-data">
                                    <img alt="profile-icon" src={image}/>
                                    <h6>Photos</h6>
                                </div>

                                <div className="alignment-profile-data">
                                    <img alt="heart-icon" src={heart}/>
                                    <h6>Bookmarks</h6>
                                </div>

                            </div>
                        </div>
                        <div className="account" style={{display: "inline-grid",marginTop:"15px"}}>
                            <div>
                                <h6 style={{fontSize: "0.75rem",color: "#8A8888"}}>Account</h6>
                            </div>
                            
                            <div className="for-link" style={{display: "inline-grid",marginTop: "10px"}}>

                            <Link to = "/MyProfilePage">
                                <div className="alignment-profile-data">
                                    <img alt="user-icon" src={user}/>
                                    <h6>My Profile</h6>
                                </div>
                            </Link>

                            <Link to = "/OrderHistoryPage">
                                <div className="alignment-profile-data">
                                    <img alt="order-icon" src={order}/>
                                    <h6>My Orders</h6>
                                </div>
                            </Link>

                                <div className="alignment-profile-data">
                                    <img alt="message-icon" src={messages}/>
                                    <h6>Messages</h6>
                                </div>

                                <div className="alignment-profile-data">
                                    <img alt="logout-icon" src={logout}/>
                                    <h6>Logout</h6>
                                </div>

                            </div>
                        </div>
                        <div className="suggested-followers" style={{display: "inline-grid",marginTop: "15px"}}>
                            <div>
                                <h6 style={{fontSize: "0.75rem",color: "#8A8888"}}>Suggested foodies to follow</h6>
                            </div>
                            <div style={{display: "inline-grid",marginTop: "10px"}}>
                                <SuggestedFollowers/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProfileMenu
