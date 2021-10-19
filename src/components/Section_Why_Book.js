import '../styles/SectionWhyBook.css'
import dealsImage from '../images/near_me.png'

export default function Section_Why_Book() {


    return (
        <div>
           
           <div className="heading_why-book">
            <h3>Why Book a Restaurant With EazyDiner</h3>
        </div>
        
        <div className="div-for-why-book-boxes">

        {/* 1st-Box */}

        <div className="div-box-why-book">

        <div className="box-why-book">
            {/* img-box */}
            <div className="slide-img-why-book">
            <img alt="1" src={dealsImage}/>
            </div>
            {/* detail-box */}
            <div className="detail-box-why-book">
            {/* details */}
            <div className="type-why-book">
            <a href="#abc" className="text-why-book">Deals</a> 
            <span className="discount-details-why-book">Get deals upto 50% with every meal</span>  
            </div>
            
            </div>	
            </div>
        </div>

        {/* 2nd-Box */}

        <div className="div-box-why-book">

            <div className="box-why-book">
                {/* img-box */}
                <div className="slide-img-why-book">
                <img alt="2" src={dealsImage}/>
                </div>
                {/* detail-box */}
                <div className="detail-box-why-book">
                {/* details */}
                <div className="type-why-book">
                <a href="#abc" className="text-why-book">Deals</a> 
                <span className="discount-details-why-book">Get deals upto 50% with every meal</span>  
                </div>
                
                </div>	
                </div>
            </div>

            {/* 3rd-Box */}

        <div className="div-box-why-book" >

            <div className="box-why-book">
                {/* img-box */}
                <div className="slide-img-why-book">
                <img alt="3" src={dealsImage}/>
                </div>
                {/* detail-box */}
                <div className="detail-box-why-book">
                {/* details */}
                <div className="type-why-book">
                <a href="#abc" className="text-why-book">Deals</a> 
                <span className="discount-details-why-book">Get deals upto 50% with every meal</span>  
                </div>
                
                </div>	
                </div>
            </div>

        </div>
            
        </div>
    )
}