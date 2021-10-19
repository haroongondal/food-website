
import '../styles/MobileAppSection.css'
import mobileIcon from '../images/mobile_icon.png'
import googlePlayStoreImg from '../images/google_playstore_image.png'
import ss from '../images/screenshot_app.png'


export default function MobileAppSection() {


    return (
        <div>

           <hr className="line-grey"/>

           <div className="div-boxes-mobile-app">

{/* 1-section */}

<div className="div-1-section-mobile-app">

<div className="text-box-explore">
    <h4 className="text-explore">Explore more food with</h4>
    <span className="text-logo-mobile-app">Logo mobile app</span>
    <h4 className="text-details-mobile-app">Download the Dineout App to get latest updates on offers, deals and
        trending restaurants. Also get Rs.200 in your Dineout Wallet.</h4>
</div>

<div className="wrap">
    <div className="search">
        <span className="image-mobile"><img alt="mobile-icon" src={mobileIcon} width={20} height={20}/></span>
       <input type="text" className="searchTerm" placeholder="Your Mobile Number"/>
       <button type="submit" className="searchButton">
         <span className="text-search-link">Send Link</span>
      </button>
    </div>
 </div>

 <div style={{marginTop:"30px"}}>
     <a href="#abc">
         <img alt="google-play-icon" src={googlePlayStoreImg}/>
     </a>
 </div>

</div>

{/* 2-section */}

<div style={{marginTop:"20px"}}>
<img alt="app-screenshot" src={ss}/>
</div>
</div>
                
                
            
        </div>
    )
}