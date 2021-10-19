import '../styles/CuisinesItem.css'
import foodPlateImg from '../images/food_plate.png'

export default function CuisinesItem(props) {

console.log(props)
    return (
        <div>
           
            
           <div className="box-cuisines">
                
                <div className="slide-img-cuisines">
            
                <img className="image-cuisines" alt="2" src={foodPlateImg}/> 
                
                </div>
                
                <div className="detail-box-cuisines">
                
                <div className="type-cuisines">
                <a href="#abc" className="text-cuisines">North Indian</a>   
                </div>
                
                </div>	
                </div>   
                
            
        </div>
    )
}