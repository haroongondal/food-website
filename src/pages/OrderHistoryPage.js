import React from 'react'
import OrderHistory from '../components/OrderHistory'
import ProfileBanner from '../components/ProfileBanner'
import ProfileMenu from '../components/ProfileMenu'
import '../styles/OrderHistoryPage.css'

function OrderHistoryPage() {
    return (
        <div>
            <ProfileBanner/>
            <div className="container" style={{marginTop:"50px"}}>

                  <div className="main-section">
                  <ProfileMenu/>
                  <OrderHistory/>
                  </div>
            </div>
        </div>
    )
}

export default OrderHistoryPage
