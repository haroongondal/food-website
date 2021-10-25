import '../styles/Heading_Restaurent_Near.css'
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import FilterPage from '../pages/FilterPage';

export default function Heading_Restaurent_Near({heading = ""}) {

   
    return (
        <div>
           
           <div className="heading_restaurent_near">
            <h3>{heading}</h3>
            <Link to = {`/FilterPage`}><h6>View all</h6></Link>
        </div>
        <hr className="line"/>
                
        
            
        </div>
    )
}