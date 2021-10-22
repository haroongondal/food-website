import React from 'react'
import '../styles/SecResAbout.css'
import ResCuisineItem from './ResCuisineItem'
import ResCuisineFacilities from './ResCuisineFacilities'
import { useState } from 'react'
function SecResAbout() {

    const [isShowingAll, setShowingAll] = useState(false);

    const text_ = "Lorem ipsum dolor, adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas  nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed  ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta."

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
                        <span><a onClick={handlestate}>{text_}Read less</a></span>
                        :
                        <span><a onClick={handlestate}>{text_.substring(0, 100)}...Read more</a></span>
                        }
                        </p>
                        
                        <ResCuisineItem/>

                        <ResCuisineFacilities/>
                    </div>
                    </div>
        </div>
    )
}

export default SecResAbout
