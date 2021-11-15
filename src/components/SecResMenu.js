import { useState } from 'react/cjs/react.development'
import '../styles/SecResMenu.css'
import useFetch from '../Utils/useFetch'
import ResMenuItem from './ResMenuItem'

export default function SecResMenu(props) {

    const [subCusineId, setSubCusineId] = useState(0)

    const [subCusine, setSubCusine] = useState()
  //  const subCusines = useFetch(`https://api.masairapp.com/api/Lov/GetSubCusineByRestaurantId?id=${props.id}`)
    
    const {data, isPending, error} = useFetch(`https://api.masairapp.com/api/Lov/GetCusineByRestaurantId?id=${props.id}`)
 
    function getMenuItems(id, list) {
        setSubCusineId(id)
        setSubCusine(list)

        console.log(list)
        return(
            <div>
                       
                        </div>
        )
      }

    return (
        <div>
           
           <div className="border-menu-section" id="menu-section">
                    <div className="content-menu-section">
                        <h6>Menu</h6>
                        <hr className="hr-for-menu"/>
                        <div className="div-for-menu-buttons">
                        {error && console.log(error)}
                        {isPending && console.log("Data coming in a moment")}
                        {data && data.map((c) => 
                            <button onClick = {() => getMenuItems(c.CusineId,c.SubCusinesListByCusine)} className="menu-button">
                                {c.Cusine}
                            </button>)}
                        </div>
                        <hr className="hr-for-menu"/>
                        
                       
                        {subCusine && subCusine.map((c) => 
                            <ResMenuItem data = {c}/>
                        )}
                       

                        <div className="button-view-full-menu" style={{display: "none"}}>
                            <a href>View Full Menu</a>
                         </div>
                    </div>
                </div>
            
        </div>
    )
}