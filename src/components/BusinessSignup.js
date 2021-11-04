import React from 'react'
import '../styles/BuissnessSignUp.css'

function BusinessSignup() {
   
    return (
        <div>
            <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <form id="msform">
                    
                    <ul id="progressbar">
                        <li class="active">Personal Details</li>
                        <li>Social Profiles</li>
                        <li>Account Setup</li>
                    </ul>

                    <fieldset>
                        <h2 class="fs-title">Resturent Details</h2>
                        <h3 class="fs-subtitle">Name, address and location</h3>
                        <input type="text" name="fname" placeholder="Resturent Name"/>
                        <input type="text" name="lname" placeholder="Resturent complete Address"/>
                        <h6 style={{fontSize: "14px" ,textAlign:"left"}}>Please place the pin accuratley at your outlets loaction on the map</h6>
                        <p style={{fontSize: "10px" ,textAlign:"left", color:"black"}}>This will help your coustomers and zomatos riders to locate your store</p>
                        <div className="locat-area">
                        <input type="text" name="lname" placeholder="Enter your resturent loaclity,e.g sector 43 gulberg"/>
                        <button className="next action-button">Detect</button>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                            width="450"
                            height="200"
                            frameBorder="0"
                            style={{border:"0"}}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            />
                            <h6 className="my-3">Or directly enter the cordinates</h6>
                            <div className="lon-lat">
                            <input type="text" name="fname" placeholder="longitude"/>
                            <input type="text" name="fname" placeholder="latitude"/>
                            </div>
                        <button class="next action-button">Next</button>
                    </fieldset>

                    <fieldset>
                        <h2 class="fs-title">Outlet Owner Details</h2>
                        <h3 class="fs-subtitle">These willl be used to share revenue related communications</h3>
                        <div className="outlet-owner">
                        <input type="text" name="email" placeholder="Outlet owner fullname"/>
                        <input type="password" name="pass" placeholder="Outlet owner email"/>
                        </div>
                        <div className="radio-btn">
                            <input type="radio" id="dewey" name="drone" className="input-radio" value="dewey"/>
                            <label for="dewey">Same as resturent mobile no</label>
                        </div>
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                        <input type="submit" name="submit" class="submit action-button" value="Submit"/>
                    </fieldset>

                    <fieldset>
                        <h2 class="fs-title">Contact Number at Resturent</h2>
                        <h3 class="fs-subtitle">your customer will call on this numbers for gernal requiries</h3>
                        <div className="mbl-num">
                        <input type="text" name="" placeholder="Mobile Number At Resutrent"/>
                        <button type="button" name="next" class="next action-button" value="Next">Verify</button>
                        </div>
                        <h6>or want to share landline number</h6>
                        <div className="mbl-num">
                        <input type="text" name="" placeholder="STD code" style={{width:"120px"}}/>
                        <input type="text" name="" placeholder="landLinde Number" style={{width:"340px"}}/>
                        <button type="button" name="next" class="next action-button" value="Next">Verify</button>
                        </div>
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                        <input type="button" name="next" class="next action-button" value="Next"/>
                    </fieldset>

                    


                </form>
                
            
            </div>
        </div>
                </div>
    )
}

export default BusinessSignup
