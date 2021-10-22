import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import ProfileMenu from '../components/ProfileMenu'
import SectionFollower from '../components/SectionFollower'

function FollowersPage() {
    return (
        <div>
            <ProfileBanner/>

            <div className="container" style={{marginTop:"50px"}}>

                  <div className="main-section">
                  <ProfileMenu/>
                  <SectionFollower/>
                  </div>
            </div>
        </div>
    )
}

export default FollowersPage
