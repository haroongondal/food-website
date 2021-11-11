
import '../styles/NavBar.css'
import logo from '../images/logo.png'
import React, { useEffect, useState } from 'react';
import locationIcon from '../images/location_pin.svg'
import downArrowIcon from '../images/down_arrow.svg'
import SignUp from './SignUp';
import Modal from 'react-responsive-modal';
import Login from './Login';
import { Link } from 'react-router-dom';
import SearchBoxItem from './SearchBoxItem';
import Skeleton from 'react-loading-skeleton';
import useFetch from '../Utils/useFetch';


export default function NavBar(props) {

const [navbar, setNavbar] = useState(false)

const [isLogedIn, setLogedIn] = useState(localStorage.getItem("isLogedin"))

const [isSignpShowing, setSignupShowing] = useState(false)

const [isLoginShowing, setLoginShowing] = useState(false)

const [searchValues, setSearchValues] = useState("");

const {data, isPending, error} = useFetch(`https://api.masairapp.com/api/Restaurant/GetRestaurantFromOpenSearch?search=${searchValues}`)
 
const [isResultShowing, setResultShowing] = useState(false)

const handlechange = (value) => {
    setSearchValues(value)
    if (value !== null && value !== "") {
        setResultShowing(true)
    } else {
      setResultShowing(false)
    }
  }
 

useEffect(() => {
   if (!props.ShouldHideSearch) {
    setNavbar(true)
   }
}, [props.ShouldHideSearch])

const showSearchBar = ()=> {
    if (props.ShouldHideSearch) {
    if (window.scrollY >= 250) {
        setNavbar(true)
        if (searchValues !== null && searchValues !== "") {
            setResultShowing(true)
        } else {
            setResultShowing(false)
        }
    } else {
        setNavbar(false)
        setResultShowing(false)
        
        
    }
}
}

const handleSignUpPop = (e) => {
e.preventDefault();
setSignupShowing(true)
}

const closeSignupPop = () => {
    setSignupShowing(false)
}

const handleLoginPop = (e) => {
    e.preventDefault();
    setLoginShowing(true)
    }
    
const closeLoginPop = () => {
    setLoginShowing(false)
 }


window.addEventListener('scroll', showSearchBar)

    return (
        <div>
           
        <Modal open={isSignpShowing} onClose={closeSignupPop} center styles = {{modal: {"margin-top": "80px"}}}>
          <SignUp />
      </Modal>

      <Modal open={isLoginShowing} onClose={closeLoginPop} center styles = {{modal: {"margin-top": "80px"}}}>
          <Login setLogedIn = {setLogedIn} />
      </Modal>

           <div className="header">
        <nav className="navbar">
                <div className="logo_image">

                    <a href="https://www.food_app.com">
                        <img alt="food_app" style={{maxWidth: "145px"}} src={logo}/>
                    </a>
                </div>
    
        


      {/* Location-Box */}


      <a href="#abc" className="section-location">
              <div className="details-location">
                  <span className="image-location"><img alt="Location pin" src={locationIcon}  style={{height: "20px", width: "20px"}}/></span>
                  <span className="city-loaction">
                      <span className="text-main-city">Delhi</span>
                      <span className="text-city-details">Connaught Place (C..</span>
                  </span>
                  <span className="image-arrow"><img alt="down-arrow" src={downArrowIcon} style={{width: "10px",height: "10px"}}/></span>

              </div>
      </a>


      {/* Search-bar */}

      


    <div className="parent">
      <div className="search-box sticky-search" id="searchBar" style={{ display: navbar ? "inline" : "none"}}>
        <input type="text" className="searchTerm-top" 
        placeholder="Search for Restaurants, Cuisines, Location "
        onChange = {(e) => handlechange(e.target.value)}/>
        <button type="submit" className="searchButton-top">
          <span className="text-search-button-top">Search</span>

       </button>
      </div>
      
    </div>

    {isResultShowing &&
          <div className="box-searchBar">
            <ul class="align-box-searchBar">
            {isPending && <div><Skeleton/></div>}
            {error && <div>{error}</div>}
            {data && data.map(r => <SearchBoxItem data={r} />)}            
            </ul>
            </div>
          }


    {/* Top-right-navigation-buttons */}

    {isLogedIn === "false" ?
                <ul className="desktop-list">
                <li><a href="#abc">786 100 4444</a></li>
                <li><a href="#abc">Help</a></li>
                <li><a href="/" onClick={handleLoginPop}>Login</a></li>
                <li><a className="signup_buton" href="/" onClick={handleSignUpPop}>SignUp</a></li>
                
            </ul> 
                : 
                <ul className="desktop-list">
                <li><a href="#abc">786 100 4444</a></li>
                <li><a href="#abc">Help</a></li>
                <li><Link to ={"/Dashboard"} className="signup_buton" href="/">My Dashboard</Link></li>

            </ul> 
    }
           
        
        </nav>
    
    </div> 
                
            
        </div>
    )
}