import React from 'react'
import '../styles/ResDetailFilter.css'
function ResDetailFilter() {
    return (
        <div>
            <div className="div-for-filter-buttons">
                            <button className="filter-button">
                                <label className="main-filters-section"><h1 className="text-good-for-groups">Good for groups</h1>
                                    <input className="input-filter-checkbox" type="checkbox"/>
                                    <span className="w3docs-filter-section"></span>
                                  </label>
                            </button>
                            
                        </div>
        </div>
    )
}

export default ResDetailFilter
