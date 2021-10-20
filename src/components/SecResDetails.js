import React from 'react'
import '../styles/SecResDetails.css'
function SecResDetails() {
    return (
        <div>
            <div id="top-section">
            <div class="border-restaurent-details">
                <div class="content-restaurent-details">
                       <div class="merge-text-rating" style={{display: "flex",
                       justifyContent: "space-between"}}>
                        <div class="text-section">
                            <h3>Local</h3>
                            <h6 class="text-font-size">Rs 1,800 for 2 | <span style={{color:"gray"}}> North indian, North indian, North indian</span></h6>
                            <h6 class="text-font-size">Scindia House | Scindia House | Scindia House |<span style={{color: "#0083C7", fontWeight: "700"}}> Get Direction</span></h6>
                            <h6 class="text-font-size">Time: 12:00 PM to 12:00 AM <span style={{color: "#0083C7", fontWeight: "700"}}>(Open Now)</span><span><img src="images/down_arrow.svg" style={{height: "11px",width: "11px",marginLeft: "5px",marginBottom: "5px"}}/></span></h6>
                        </div>
                        <div class="rating-section" style={{display:"flex",
                        flexDirection: "column",
                        flexWrap: "wrap-reverse"}}>
                            <h6 href="#" class="rating-3rd-page">4.5</h6>
                            <h6 style={{color:" #0083C7",fontWeight: "700"}}>252 reviews</h6>    
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecResDetails
