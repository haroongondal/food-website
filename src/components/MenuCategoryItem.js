import React from 'react'
import '../styles/MenuCategoryItem.css'

function MenuCategoryItem() {
    return (
        <div>
            <div className="Category-item">
      <div className="left-tools-category">
      <button type="submit" className="drag-btn"><i className='bx bx-dots-vertical-rounded'></i><i className='bx bx-dots-vertical-rounded'></i></button>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
      <h6>Veg Sait & Pepper</h6>
      </div>

      <div className="right-tools-category">
      <h6>Rs 200</h6>
      <button type="submit" className="options-btn"><i className='bx bx-dots-vertical-rounded'></i></button>
      </div>
      </div>
      <hr/>
        </div>
    )
}

export default MenuCategoryItem
