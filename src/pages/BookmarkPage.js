import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import ProfileMenu from '../components/ProfileMenu'
import SectionBookmark from '../components/SectionBookmark'

function BookmarkPage() {
    return (
        <div>
            <ProfileBanner/>

            <div className="container" style={{marginTop:"50px"}}>

                  <div className="main-section">
                  <ProfileMenu/>
                  <SectionBookmark/>
                  </div>
            </div>
        </div>
    )
}

export default BookmarkPage
