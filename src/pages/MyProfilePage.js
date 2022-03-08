import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import MyProfileSection from '../components/MyProfileSection'
import ProfileBanner from '../components/ProfileBanner'
import ProfileMenu from '../components/ProfileMenu'
import ReviewHistory from '../components/ReviewHistory'
import SectionFollower from '../components/SectionFollower'
import SectionBookmark from '../components/SectionBookmark'
import OrderHistory from '../components/OrderHistory'
import useFetch from '../Utils/useFetch'

function MyProfilePage() {

    const {path} = useRouteMatch();

    const userInfo = useFetch(`https://api.masairapp.com/api/User/UserInformation?username=${localStorage.getItem("username")}`)
    return (
        <div>
            <ProfileBanner 
             name = {userInfo.isPending ? "" : (userInfo.error ? userInfo.error : (userInfo.data && userInfo.data.FullName))}  
            />

            <div className="container" style={{marginTop:"50px"}}>

                  <div className="main-section">
                  <ProfileMenu/>
                  <Switch>

                  <Route exact path = {`${path}/`} >
                  <MyProfileSection/>
                  </Route>

                  <Route exact path = {`${path}/ReviewHistory`} >
                  <ReviewHistory/>
                  </Route>

                  <Route exact path = {`${path}/Followers`} >
                  <SectionFollower/>
                  </Route>

                  <Route exact path = {`${path}/Bookmarks`} >
                  <SectionBookmark/>
                  </Route>

                  <Route exact path = {`${path}/OrderHistory`} >
                  <OrderHistory/>
                  </Route>

                  </Switch>
                  
                  </div>
            </div>
        </div>
    )
}

export default MyProfilePage
