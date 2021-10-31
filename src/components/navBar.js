
import '../styles/NavBar.css'
import logo from '../images/logo.png'
import React, { useEffect, useState } from 'react';
import locationIcon from '../images/location_pin.svg'
import downArrowIcon from '../images/down_arrow.svg'
import SignUp from './SignUp';
import Modal from 'react-responsive-modal';
import Login from './Login';


export default function NavBar(props) {

const [navbar, setNavbar] = useState(false)

const [isSignpShowing, setSignupShowing] = useState(false)

const [isLoginShowing, setLoginShowing] = useState(false)

const [isSubmitted, setIsSubmitted] = useState(false);

function submitForm() {
  setIsSubmitted(true);
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
    } else {
        setNavbar(false)
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
          <SignUp submitForm={submitForm} />
      </Modal>

      <Modal open={isLoginShowing} onClose={closeLoginPop} center styles = {{modal: {"margin-top": "80px"}}}>
          <Login/>
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
        <input type="text" className="searchTerm-top" placeholder="Search for Restaurants, Cuisines, Location "/>
        <button type="submit" className="searchButton-top">
          <span className="text-search-button-top">Search</span>

       </button>
      </div>
    </div>


    {/* Top-right-navigation-buttons */}

            <ul className="desktop-list">
                <li><a href="#abc">786 100 4444</a></li>
                <li><a href="#abc">Help</a></li>
                <li><a href="/" onClick={handleLoginPop}>Login</a></li>
                <li><a className="signup_buton" href="/" onClick={handleSignUpPop}>SignUp</a></li>

            </ul>
        
        </nav>
    
    </div> 
                
            
        </div>
    )
}