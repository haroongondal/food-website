import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'
import TableMenuDashboard from '../components/TableMenuDashboard'
import '../styles/MenuDashboard.css'
function MenuDashboard() {
    return (
        <div>
        <AdminSidebar/>
        <section id="content">
            <AdminNavbar/>
            <main>
            <div className="top-tools">
            <div className="left-tools">
              <button className="dark-blue-btn">Overview</button>
            </div>
            <div className="right-tools-catch">
                <button className="catch-btn"><i class='bx bx-plus-circle'></i>Catch22-...+(4 more)</button>
                <button className="catch-btn">10/13/21-10/13/21</button>
            </div>
            
            </div>
            
            <div className="Content-graph-boxes">
            <div className="selling-box">
                <div className="border-selling-box">
                    <div className="content-selling-box">
                        <h6 className="title-selling-box">Top selling cateogories</h6>
                        <button className="selling-img"><i class='bx bx-plus-circle'></i></button>
                    </div>
                    <hr/>
                    <div className="selling-graph">
                        <h6 className="title-selling-box">No data available</h6>
                    </div>
                </div>
                <div className="border-selling-box">
                    <div className="content-selling-box">
                        <h6 className="title-selling-box">Top selling items</h6>
                        <button className="selling-img"><i class='bx bx-plus-circle'></i></button>
                    </div>
                    <hr/>
                    <div className="selling-graph">
                        <h6 className="title-selling-box">No data available</h6>
                    </div>
                </div>
                <div className="border-selling-box">
                    <div className="content-selling-box">
                        <h6 className="title-selling-box">Cateogorie Performence by tag</h6>
                        <button className="selling-img"><i class='bx bx-plus-circle'></i></button>
                    </div>
                    <hr/>
                    <div className="selling-graph">
                        <h6 className="title-selling-box">No data available</h6>
                    </div>
                </div>
                <div className="border-selling-box">
                    <div className="content-selling-box">
                        <h6 className="title-selling-box">Menu Items Performance by Tag</h6>
                        <button className="selling-img"><i class='bx bx-plus-circle'></i></button>
                    </div>
                    <hr/>
                    <div className="selling-graph">
                        <h6 className="title-selling-box">No data available</h6>
                    </div>
                </div>
                
            </div>        
        </div>
        
        <div className="border-selling-box-large">
                    <div className="content-selling-box">
                        <h6 className="title-selling-box">Profit vs Popularity</h6>
                        <button className="selling-img"><i class='bx bx-plus-circle'></i></button>
                    </div>
                    <hr/>
                    <div className="selling-graph">
                        <h6 className="title-selling-box">No data available</h6>
                    </div>
                </div>
                <div className="top-recomendation">
                    <div className="content-selling-box">
                        <h6 className="title-selling-box">Profit vs Popularity</h6>
                        <button className="selling-img"><i class='bx bx-plus-circle'></i></button>
                    </div>
                    <hr/>
                    <div className="recom-table">
                            <div className="table-row">
                                <p>SRNo</p>
                                <p>Items</p>
                            </div>
                            <div className="table-row-2">
                                <p>Recommended items</p>
                                <p>Unit Sold</p>
                                <p>Revenue</p>
                            </div>
                        
                    </div>
                    <hr/>
                    <div className="see-more-btn">
                    <button className="see-more">See More</button>
                    </div>
                </div>
                <TableMenuDashboard/>
                <TableMenuDashboard/>
            </main>
        </section>
        </div>
    )
}

export default MenuDashboard
