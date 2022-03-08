import React from 'react'
import '../styles/Orderhistory.css'
import OrderHistoryProduct from './OrderHistoryItem'
function OrderHistory() {
    return (
        <div className="right-section" style={{backgroundColor: "#F9F9F9"}}>
                <div style={{textAlign: "center",margin: "20px",marginTop: "30px"}}>
                    <h3 style={{fontSize: "1.4rem", fontWeight: "700"}}>Order History(10)</h3>
                </div>
                <OrderHistoryProduct/>

                <div id="loadMore">
                    <a href="#abc">Load More</a>
                 </div>
        </div>
    )
}

export default OrderHistory
