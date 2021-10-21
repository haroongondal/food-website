import '../styles/SecResAbout.css'
import knife from '../images/knife_plate.png'
import smook from '../images/smoking_area.png'

export default function ResCuisineFacilities() {

    return (
        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img alt="knife-pic" src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>CUISINE</h4>
                                <ul className="ul-facilities">
                                    <li>
                                        <img alt="smoking-pic" src={smook}/>
                                        <a href>Smoking area</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    )
}