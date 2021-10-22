import React from 'react'
import MyProfileSection from '../components/MyProfileSection'
import ProfileBanner from '../components/ProfileBanner'
import ProfileMenu from '../components/ProfileMenu'

function MyProfilePage() {
    return (
        <div>
            <ProfileBanner/>

            <div className="container" style={{marginTop:"50px"}}>

                  <div className="main-section">
                  <ProfileMenu/>
                  <MyProfileSection/>
                  </div>
            </div>
        </div>
    )
}

export default MyProfilePage
