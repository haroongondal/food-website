import React from 'react'
import '../styles/TableMenuDashboard.css'
function TableMenuDashboard() {
    return (
        <div>
            <div className="most-like-items">
                    <div className="content-selling-table">
                        <h6 className="title-selling-box">Most Liked Items</h6>
                        <button className="selling-img"><i class='bx bx-plus-circle'></i></button>
                    </div>
                    
                    <div className="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>SRNo</th>
                            <th>Item</th>
                            <th>Likes</th>
                            <th>DisLikes</th>
                            <th>Neutral</th>
                        </tr>
                       </thead>
                       </table>
                       </div>
                       
                       <div className="tbl-content">
                       <table cellpadding="0" cellspacing="0" border="0"> 
                       <tbody>
                        <tr >
                            <td>1</td>
                            <td>Donor Kabab</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                        </tr>
                        
                        <tr >
                        <td>2</td>
                            <td>Donor kabab </td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                        </tr>
                        <tr >
                            <td>3</td>
                            <td>Donor Kabab</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                        </tr>
                        <tr >
                            <td>4</td>
                            <td>Donor Kabab</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                        </tr>
                        <tr >
                            <td>5</td>
                            <td>Donor Kabab</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                        <div className="see-more-btn">
                    <button className="see-more">See More</button>
                    </div>
                    </div>
        </div>
    )
}

export default TableMenuDashboard
