import React from 'react'
import '../styles/Sort_by.css'
import { ForDevice } from "media-query-react";
import Types from '../Utils/Types.json'
function Sort_by(props) {

    return (
        <div style={{width:"31%"}}>
        <ForDevice deviceName={["tablet", "desktop"]}>
            <div className="div-sort-by alignment">
                    <div className="input-group">
                        <span className="text-sort-by">Sort By</span>
                        <div className="dropdown-FilterPage">
                            <select name="sort" id="res-sort" onChange = {(e) => props.getSortType(e, e.target.value)}>
                                <option value={Types.SortType.Popularity}>Popularity</option>
                                <option value={Types.SortType.Ratings}>Rating</option>
                                <option value={Types.SortType.LowPrice}>Price: Low to High</option>
                                <option value={Types.SortType.HighPrice}>Price: High to Low</option>
                            </select>
                            <span className="Darrow">
              <img
                alt="down-arrow"
                src="/static/media/down_arrow.5b0512cf.svg"
              />
            </span>
                        </div>
                    </div>
                </div>
                </ForDevice>

                
        </div>
    )
}

export default Sort_by
