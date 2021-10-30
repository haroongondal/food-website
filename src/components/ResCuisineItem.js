import '../styles/SecResAbout.css'
import knife from '../images/knife_plate.png'

export default function ResCuisineItem(props) {

    return (
        <div className="section-cuisine">
                            <div className="image-cuisine">
                                <img alt="knife-pic" src={knife}/>
                            </div>
                            <div className="div-text-cuisine">
                                <h4>CUISINE</h4>
                                {props.Cusines != null ? props.Cusines.map((c) => <a href=" ">{c.Cusine }</a>) : <a href=" ">Cusines not available</a> }
                            </div>
                        </div>
    )
}