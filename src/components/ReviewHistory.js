import React from 'react'
import ReviewHistoryItem from './ReviewHistoryItem'
import ReviewHistoryItemUR from './ReviewHistoryItemUR'

function ReviewHistory() {
    return (
        <div className="right-section" style={{backgroundColor: "#F9F9F9"}}>
                <div style={{textAlign: "center",margin: "20px",marginTop: "30px"}}>
                    <h3 style={{fontSize: "1.4rem", fontWeight: "700"}}>Review History(10)</h3>
                </div>
                <ReviewHistoryItem/>
                <ReviewHistoryItemUR/>

                <div id="loadMore">
                    <a href="#abc">Load More</a>
                 </div>
        </div>
    )
}

export default ReviewHistory
