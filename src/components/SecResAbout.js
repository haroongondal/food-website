import React from 'react'
import '../styles/SecResAbout.css'
import ResCuisineItem from './ResCuisineItem'
import ResCuisineFacilities from './ResCuisineFacilities'
import { useState } from 'react'
function SecResAbout(props) {

    const [isShowingAll, setShowingAll] = useState(false);

    const handlestate = ()=> {
    setShowingAll(!isShowingAll)
    }

    return (
        <div>
            <div className="border-about-section" id="about-section">
            <div className="content-about-section">
                        <h6>About</h6>
                        <p>
                        {
                        isShowingAll  ?
                        <span><a onClick={handlestate}>{props.description}Read less</a></span>
                        :
                        <span><a onClick={handlestate}>{
                            props.description.lenght > 100 
                            ? props.description.substring(0, 100) + "...Read more"
                            : props.description
                        }
                            </a></span>
                        }
                        </p>
                        
                        <ResCuisineItem Cusines = {props.Cusines && props.Cusines}/>

                        <ResCuisineFacilities Features = {props.Features && props.Features}/>
                    </div>
                    </div>
        </div>
    )
}

export default SecResAbout
