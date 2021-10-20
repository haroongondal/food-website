import React from 'react'
import '../styles/ResDetailSortBy.css'
import arrow from '../images/down_arrow.svg'
function ResDetailSortBy() {
    return (
        <div>
            <div className="border-select-sort-by">
                            <div className="content-select-sort-by">
                                <select>
                                    <option className="option">Newest</option>
                                    <option className="option">Highest Rating</option>
                                    <option className="option">Lowest Rating</option>
                                </select>
                                <span>
                                    <img src={arrow}/>
                                </span>
                            </div>
                        </div>
        </div>
    )
}

export default ResDetailSortBy
