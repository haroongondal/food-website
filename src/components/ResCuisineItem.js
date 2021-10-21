import '../styles/SecResAbout.css'
import knife from '../images/knife_plate.png'

export default function ResCuisineItem() {

    return (
        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img alt="knife-pic" src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>CUISINE</h4>
                                <a href="#abc">Multi-Cuisine</a>
                                <a href="#abc">Multi-Cuisine</a>
                                <a href="#abc">Multi-Cuisine</a>
                                <a href="#abc">Multi-Cuisine</a>
                            </div>
                        </div>
    )
}