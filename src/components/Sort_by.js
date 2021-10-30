import React from 'react'
import '../styles/Sort_by.css'
import Types from '../Utils/Types.json'
function Sort_by(props) {

    return (
        <div>
            <div className="div-sort-by alignment">
                    <div className="input-group">
                        <span className="text-sort-by">Sort By</span>
                        <div className="select">
                            <select name="sort" id="res-sort" onChange = {(e) => props.setSort(e.target.value)}>
                                <option value={Types.SortType.Popularity}>Popularity</option>
                                <option value={Types.SortType.Ratings}>Rating</option>
                                <option value={Types.SortType.LowPrice}>Price: Low to High</option>
                                <option value={Types.SortType.HighPrice}>Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Sort_by
