import '../styles/DealsItem.css'
import nearMeImg from '../images/near_me.png'

export default function DealsItem() {


    return (
        <div>
           
            
           <div className="box-why-book">
            
            <div className="slide-img-why-book">
           
            <img  className="image-deals" alt="2" src={nearMeImg}/>
            
            </div>
            
            <div className="detail-box-why-book">
            
            <div className="type-why-book">
            <a href="#abc" className="text-why-book">Deals</a> 
            <span className="discount-details-why-book">Get deals upto 50% with every meal</span>  
            </div>
            
            </div>	
            </div>  
                
            
        </div>
    )
}