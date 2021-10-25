import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsumerLandingPage from '../pages/ConsumerLandingPage';
import FilterPage from '../pages/FilterPage';
import RestaurentDetailsPage from '../pages/RestaurentDetailsPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function ConsumerRoute() {
    return (
        <div>
            
    
    <NavBar/>
     <Switch>

        <Route exact path = "/">
        <ConsumerLandingPage/>
        </Route>

        <Route exact path = "/FilterPage">
        <FilterPage/>
        </Route>


        <Route exact path = "/RestaurentDetailsPage/:id">
        <RestaurentDetailsPage/> 
        </Route>

      </Switch>
    <Footer/>
    
    
    
        </div>
    )
}

export default ConsumerRoute
