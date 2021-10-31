import React from 'react'
import ChangePassword from './ChangePassword'
import ProfileDetail from './ProfileDetail'
import '../styles/MyProfileSection.css'
function MyProfileSection() {
    return (
        
            <div className="right-section" style={{backgroundColor: "#F9F9F9"}}>
            <div style={{textAlign: "center",margin: "20px",marginTop: "30px"}}>
                    <h3 style={{fontSize: "1.4rem", fontWeight: "700"}}>My Profile</h3>
                </div>


                <div className="merge-profile-section">
                    <ProfileDetail/>
                    <ChangePassword/>
                </div>
            
            </div>
        
    )
}

export default MyProfileSection
