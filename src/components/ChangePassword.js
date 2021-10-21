import React from 'react'
import '../styles/ChangePassword.css'
function ChangePassword() {
    return (
        <div>
            <div class="border-change-password">
                        <div class="heading-change-password">
                            <h6>Change Password</h6>
                        </div>
                        <hr/>
                        <div class="content-profile-details-data">

                            
                            <div class="edit-text">
                                <label class="label-profile-details" for="current-password">Current Password</label>
                                <input class="input-profile-details" maxlength="30" type="password" placeholder="123456789" name="current-password" required="" autocomplete="off"/>
                            </div>

                          
                            <div class="edit-text">
                                <label class="label-profile-details" for="new-password">New Password</label>
                                <input class="input-profile-details" maxlength="30" type="password" placeholder="123456789" name="new-password" required="" autocomplete="off"/>
                            </div>

                           
                            <div class="edit-text">
                                <label class="label-profile-details" for="confirm-password">Confirm Password</label>
                                <input class="input-profile-details" maxlength="30" type="password" placeholder="123456789" name="confirm-password" required="" autocomplete="off"/>
                            </div>

                            
                            <div class="button-save-changes">
                                <a href="#">Change Password</a>
                             </div>
                        </div>
                    </div>
        </div>
    )
}

export default ChangePassword
