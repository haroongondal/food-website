import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import ProfileMenu from '../components/ProfileMenu'
import ReviewHistory from '../components/ReviewHistory'
function ReviewHistoryPage() {
    return (
        <div>
            <ProfileBanner/>

            <div className="container" style={{marginTop:"50px"}}>

                  <div className="main-section">
                  <ProfileMenu/>
                  <ReviewHistory/>
                  </div>
            </div>
        </div>
    )
}

export default ReviewHistoryPage
