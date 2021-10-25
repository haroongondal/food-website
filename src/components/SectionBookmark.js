import React from 'react'
import '../styles/SectionBookmark.css'
import RestaurentItem from './RestaurentItem'

function SectionBookmark() {
    return (
        <div class="right-section" style={{backgroundColor: "#F9F9F9"}}>
                <div style={{textAlign: "center",margin: "20px",marginTop: "30px"}}>
                    <h3 style={{fontSize: "1.4rem", fontWeight: "700"}}>Bookmarks</h3>
                </div>
                <div className="align-boxes-bookmark">
                    <RestaurentItem/>
                    <RestaurentItem/>
                    <RestaurentItem/>
                    <RestaurentItem/>
                </div>

                <div id="loadMore">
                    <a href="#abc">Load More</a>
                 </div>
        </div>
    )
}

export default SectionBookmark