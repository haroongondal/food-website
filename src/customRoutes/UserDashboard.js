import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import ReviewHistoryPage from '../pages/ReviewHistoryPage';
import MyProfilePage from '../pages/MyProfilePage';
import FollowersPage from '../pages/FollowersPage';
import BookmarkPage from '../pages/BookmarkPage';

function UserDashboard() {
    return (
        <div>
    
    
    
    <Switch>


       <Route exact path = "/Dashboard">
       <OrderHistoryPage/> 
       </Route>


       <Route exact path = "/ReviewHistoryPage">
       <ReviewHistoryPage/> 
       </Route>

       <Route exact path = "/MyProfilePage">
       <MyProfilePage/>
       </Route>

       <Route exact path = "/FollowersPage">
       <FollowersPage/>
       </Route>

       <Route exact path = "/BookmarkPage">
       <BookmarkPage/>
       </Route>


     </Switch>
   
   
   
   
        </div>
    )
}

export default UserDashboard
