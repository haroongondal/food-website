import React from 'react'
import '../styles/ChangePassword.css'
function ChangePassword() {
    return (
        <div>
            <div className="border-change-password">
                        <div className="heading-change-password">
                            <h6>Change Password</h6>
                        </div>
                        <hr/>
                        <div className="content-profile-details-data">

                            
                            <div className="edit-text">
                                <label className="label-profile-details" for="current-password">Current Password</label>
                                <input className="input-profile-details" maxlength="30" type="password" placeholder="123456789" name="current-password" required="" autocomplete="off"/>
                            </div>

                          
                            <div className="edit-text">
                                <label className="label-profile-details" for="new-password">New Password</label>
                                <input className="input-profile-details" maxlength="30" type="password" placeholder="123456789" name="new-password" required="" autocomplete="off"/>
                            </div>

                           
                            <div className="edit-text">
                                <label className="label-profile-details" for="confirm-password">Confirm Password</label>
                                <input className="input-profile-details" maxlength="30" type="password" placeholder="123456789" name="confirm-password" required="" autocomplete="off"/>
                            </div>

                            
                            <div className="button-save-changes">
                                <a href="#abc">Change Password</a>
                             </div>
                        </div>
                    </div>
        </div>
    )
}

export default ChangePassword
