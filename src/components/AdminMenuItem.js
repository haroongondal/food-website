import React from 'react'
import { useState } from 'react';
import '../styles/AdminMenuItem.css'
import dishImage from '../images/food_plate.png'

function AdminMenuItem() {

    const [IsOpened, setOpened] = useState(false)

    const handdleToggle = () => setOpened(!IsOpened)


    return (
        <div className="item-menu">
            <button className= { IsOpened ? "accordion-menu is-open" : "accordion-menu"}  style={{outline: "0px auto -webkit-focus-ring-color"}} onClick={handdleToggle}>
                <div className="left-menu-items">
                <img className="dish-img-menu" alt="dish-img" src={dishImage}/>
                <div className="menu-item-title">
                <h6>Breakfast Menu</h6>
                <span>Regular - Food or Drinks</span>
                </div>
                </div>
                
                <div className="right-menu-items">
                <h6>7:30 am - 11: 30 am</h6>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
                </div>
            </button>
            




            <div className="accordion-content-menu" style={{maxHeight: "189px"}}>
        
                <div className= {IsOpened ? "abc" : "accordion-content-menu-hide"}>
                <div className="align-content-menu">
                <div className="add-category-btn">
                <button type="submit" className="blue-plus-btn"><i class='bx bx-plus-circle'></i></button>
                <span>Add Menu Category</span>
                </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default AdminMenuItem
