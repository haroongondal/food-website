import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import OrderHistory from '../components/OrderHistory'
import ProfileBanner from '../components/ProfileBanner'
import ProfileMenu from '../components/ProfileMenu'
import ReviewHistory from '../components/ReviewHistory'
import '../styles/OrderHistoryPage.css'

function OrderHistoryPage() {

    return (
        <div>
            <ProfileBanner/>
            <div className="container" style={{marginTop:"50px"}}>

                  <div className="main-section">
                  <ProfileMenu/>
                      <Switch>
                         
                          <Route exact path="/Dashboard" component={ReviewHistory}></Route>

                          <Route exact path="/Dashboard/MyReviews" component={OrderHistory}></Route>
                          
                          </Switch>
                  </div>
            </div>
        </div>
    )
}

export default OrderHistoryPage
