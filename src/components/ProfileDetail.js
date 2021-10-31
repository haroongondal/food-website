import React from 'react'
import '../styles/ProfileDetail.css'
function ProfileDetail() {
    return (
        
            <div className="border-profile-details">
                        <div className="heading-profile-details">
                            <h6>Profile Details</h6>
                        </div>
                        <hr/>
                        <div className="content-profile-details-data">

                         
                            <div className="edit-text">
                                <label className="label-profile-details" for="name">Your Name</label>
                                <input className="input-profile-details" maxlength="43" type="text" placeholder="Tom Perrin" name="name" required="" autocomplete="off"/>
                            </div>
                            
                       
                            <div className="edit-text">
                                <label className="label-profile-details" for="phone">Phone</label>
                                <input className="input-profile-details" maxlength="20" type="text" placeholder="(123) 123-456" name="phone-number" required="" autocomplete="off"/>
                            </div>

                            
                            <div className="edit-text">
                                <label className="label-profile-details" for="email">Email</label>
                                <input className="input-profile-details" maxlength="43" type="text" placeholder="tom@example.com" name="email" required="" autocomplete="off"/>
                            </div>

                           
                            <div className="edit-text">
                                <label className="label-profile-details" for="birhday">Birthday</label>
                                <input className="input-profile-details" type="date" name="birthday" required="" autocomplete="off"/>
                            </div>

                           
                            <div className="edit-text">
                                <label className="label-profile-details" for="anniversary">Anniversary Date</label>
                                <input className="input-profile-details" type="date" name="anniversary" required="" autocomplete="off"/>
                            </div>

                            
                            <div className="edit-text">
                                <label className="label-profile-details" for="text">Facebook</label>
                                <input className="input-profile-details" type="text" placeholder="www.facebook.com" name="facebook" required="" autocomplete="off"/>
                            </div>

                            
                            <div className="edit-text">
                                <label className="label-profile-details" for="text">Instagram</label>
                                <input className="input-profile-details" type="text" placeholder="www.instagram.com" name="instagram" required="" autocomplete="off"/>
                            </div>

                            
                            <div className="button-save-changes">
                                <a href="#abc">Save Changes</a>
                             </div>
                        </div>
                    </div>
        
    )
}

export default ProfileDetail
