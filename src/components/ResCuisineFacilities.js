import '../styles/SecResAbout.css'
import knife from '../images/knife_plate.png'
import smook from '../images/smoking_area.png'

export default function ResCuisineFacilities(props) {

    return (
        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img alt="knife-pic" src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>FACILITIES</h4>
                                <ul className="ul-facilities">
                                    
                                        {props.Features != null ? props.Features.map((f) => 
                                        <li>
                                        <img alt="smoking-pic" src={smook}/>
                                        <a href>{f.Value}</a>
                                        </li>
                                        ) : <li>
                                        <img alt="smoking-pic" src={smook}/>
                                        <a href>Features Not Available</a>
                                        </li>}
                                        
                                    
                                </ul>
                            </div>
                        </div>
    )
}