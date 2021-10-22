import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import ProfileMenu from '../components/ProfileMenu'

function ReviewHistoryPage() {
    return (
        <div>
            <ProfileBanner/>

            <div className="container" style={{marginTop:"50px"}}>

                  <div className="main-section">
                  <ProfileMenu/>

                  </div>
            </div>
        </div>
    )
}

export default ReviewHistoryPage
