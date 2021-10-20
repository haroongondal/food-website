import React from 'react'
import '../styles/Sort_by.css'
function Sort_by() {
    return (
        <div>
            <div className="div-sort-by alignment">
                    <div className="input-group">
                        <span className="text-sort-by">Sort By</span>
                        <div className="select">
                            <select name="sort" id="res-sort">
                                <option value="">Popularity</option>
                                <option value="critic_review_rating-desc">Rating</option>
                                <option value="cost-asc">Price: Low to High</option>
                                <option value="cost-desc">Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Sort_by
