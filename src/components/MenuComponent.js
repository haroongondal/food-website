import React from 'react'
import '../styles/MenuComponent.css'

function MenuComponent() {


    return (
<div>

        <div className="top-tools">

            <div className="left-tools">
            <form class="search-menu"action="#">
				<div className="form-input">
					<input type="search" placeholder="Search items, categories, sub categories"/>
					<button type="submit" className="search-btn"><i className='bx bx-search' ></i></button>
				</div>
			</form>

            <div className="Filters-menu">
                <button type="submit" className="filter-btn"><i class='bx bx-filter'></i></button>
                <span>Filters</span>
                <button type="submit" className="downArrow-btn"><i class='bx bx-chevron-down'></i></button>
            </div>
            </div>

            <div className="right-tools">
                <button className="addMenuDetails-btn">Add menu details</button>

                <button className="addMenu-btn">Add menu</button>

                <button className="save-btn">Save</button>
            </div>
            
        </div>
        
</div>
    )
}

export default MenuComponent
