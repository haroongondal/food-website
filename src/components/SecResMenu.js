import { useState } from 'react/cjs/react.development'
import '../styles/SecResMenu.css'
import useFetch from '../Utils/useFetch'
import ResMenuItem from './ResMenuItem'

export default function SecResMenu(props) {

    const [subCusineId, setSubCusineId] = useState(0)

    const [subCusineName, setSubCusineName] = useState("")
  //  const subCusines = useFetch(`https://api.masairapp.com/api/Lov/GetSubCusineByRestaurantId?id=${props.id}`)
    
    const subCusines = useFetch(`https://api.masairapp.com/api/Lov/GetSubCusine?id=1`)

    const menuItems = useFetch(`https://api.masairapp.com/api/menu/GetMenuItemsBySubCusineId?id=${subCusineId}`)

    function getMenuItems(id, name) {
        setSubCusineId(id)
        setSubCusineName(name)
      }

    return (
        <div>
           
           <div className="border-menu-section" id="menu-section">
                    <div className="content-menu-section">
                        <h6>Menu</h6>
                        <hr className="hr-for-menu"/>
                        <div className="div-for-menu-buttons">
                        {subCusines.error && console.log(subCusines.error)}
                        {subCusines.isPending && console.log("Data coming in a moment")}
                        {subCusines.data && subCusines.data.map((c) => 
                            <button onClick = {() => getMenuItems(c.Id, c.Value)} className="menu-button">
                                {c.Value}
                            </button>)}
                        </div>
                        <hr className="hr-for-menu"/>
                        <h5>{subCusineName}</h5>
                        <ul className="ul-for-menu">
                        {menuItems.error && console.log(menuItems.error)}
                        {menuItems.isPending && console.log("Data coming in a moment")}
                        {menuItems.data && menuItems.data.map((c) => 
                            <ResMenuItem data = {c}/>
                        )}
                        </ul>

                        <div className="button-view-full-menu" style={{display: "none"}}>
                            <a href>View Full Menu</a>
                         </div>
                    </div>
                </div>
            
        </div>
    )
}