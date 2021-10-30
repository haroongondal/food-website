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
                        <tr>
                            <td className ="">1</td>
                            <td className ="">Donor Kabab</td>
                            <td className ="">3</td>
                            <td className ="">0</td>
                            <td className ="">3</td>
                        </tr>
                        
                        <tr >
                        <td className ="py-3 mr-5">2</td>
                            <td className ="py-3 mr-5">Donor kabab </td>
                            <td className ="py-3 mr-5">3</td>
                            <td className ="py-3 mr-5">0</td>
                            <td className ="py-3 mr-5">3</td>
                        </tr>
                        <tr >
                            <td className ="py-3 mr-5">3</td>
                            <td className ="py-3 mr-5">Donor Kabab</td>
                            <td className ="py-3 mr-5">3</td>
                            <td className ="py-3 mr-5">0</td>
                            <td className ="py-3 mr-5">3</td>
                        </tr>
                        <tr >
                            <td className ="py-3 mr-5">4</td>
                            <td className ="py-3 mr-5">Donor Kabab</td>
                            <td className ="py-3 mr-5">3</td>
                            <td className ="py-3 mr-5">0</td>
                            <td className ="py-3 mr-5">3</td>
                        </tr>
                        <tr >
                            <td className ="py-3 mr-5">5</td>
                            <td className ="py-3 mr-5">Donor Kabab</td>
                            <td className ="py-3 mr-5">3</td>
                            <td className ="py-3 mr-5">0</td>
                            <td className ="py-3 mr-5">3</td>
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
