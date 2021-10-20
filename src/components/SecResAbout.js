import React from 'react'
import '../styles/SecResAbout.css'
import knife from '../images/knife_plate.png'
import smook from '../images/smoking_area.png'
function SecResAbout() {
    return (
        <div>
            <div className="border-about-section" id="about-section">
            <div className="content-about-section">
                        <h6>About</h6>
                        <p>
                            <span>Lorem ipsum dolor, adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem 
                            egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas 
                                nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                                 sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed
                                  ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. 
                                  Sed dapibus pulvinar nibh tempor porta. </span><a onclick="myFunction()" id="myBtn">Read more</a>
                            </span>
                        </p>
                        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>CUISINE</h4>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                            </div>
                        </div>
                        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>CUISINE</h4>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                            </div>
                        </div>
                        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>CUISINE</h4>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                            </div>
                        </div>
                        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>CUISINE</h4>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                                <a href="#">Multi-Cuisine</a>
                            </div>
                        </div>
                        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>CUISINE</h4>
                                <ul className="ul-facilities">
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                    <li>
                                        <img src={smook}/>
                                        <a>Smoking area</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
    )
}

export default SecResAbout
