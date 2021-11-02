import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import FeedbackComponents from "../components/FeedbackComponents";
import TableMenuDashboard from "../components/TableMenuDashboard";
import "../styles/MenuDashboard.css";
function MenuDashboard() {
  return (
    <div>
      <AdminSidebar />
      <section id="content">
        <AdminNavbar />
        <main>
          <FeedbackComponents/>

          <div className="Content-graph-boxes">
            <div className="selling-box">
              <div className="border-selling-box">
                <div className="content-selling-table" style={{borderBottom: "1px solid #b8b8b8a6"}}>
                  <h6 className="title-selling-box">Top selling cateogories</h6>
                  <button className="selling-img">
                    <i class="bx bx-plus-circle"></i>
                  </button>
                </div>
                
                <div className="selling-graph">
                  <h6 className="title-selling-box">No data available</h6>
                </div>
              </div>
              <div className="border-selling-box">
                <div className="content-selling-table" style={{borderBottom: "1px solid #b8b8b8a6"}}>
                  <h6 className="title-selling-box">Top selling items</h6>
                  <button className="selling-img">
                    <i class="bx bx-plus-circle"></i>
                  </button>
                </div>
                
                <div className="selling-graph">
                  <h6 className="title-selling-box">No data available</h6>
                </div>
              </div>
              <div className="border-selling-box">
                <div className="content-selling-table" style={{borderBottom: "1px solid #b8b8b8a6"}}>
                  <h6 className="title-selling-box">
                    Cateogorie Performence by tag
                  </h6>
                  <button className="selling-img">
                    <i class="bx bx-plus-circle"></i>
                  </button>
                </div>
                
                <div className="selling-graph">
                  <h6 className="title-selling-box">No data available</h6>
                </div>
              </div>
              <div className="border-selling-box">
                <div className="content-selling-table" style={{borderBottom: "1px solid #b8b8b8a6"}}>
                  <h6 className="title-selling-box">
                    Menu Items Performance by Tag
                  </h6>
                  <button className="selling-img">
                    <i class="bx bx-plus-circle"></i>
                  </button>
                </div>
                
                <div className="selling-graph">
                  <h6 className="title-selling-box">No data available</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="border-selling-box-large">
            <div className="content-selling-table" style={{borderBottom: "1px solid #b8b8b8a6"}}>
              <h6 className="title-selling-box">Profit vs Popularity</h6>
              <button className="selling-img">
                <i class="bx bx-plus-circle"></i>
              </button>
            </div>
            
            <div className="selling-graph">
              <h6 className="title-selling-box">No data available</h6>
            </div>
          </div>
          <div className="top-recomendation">
            <div className="content-selling-table">
              <h6 className="title-selling-box">Profit vs Popularity</h6>
              <button className="selling-img">
                <i class="bx bx-plus-circle"></i>
              </button>
            </div>
            <div class="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>SL.No.</th>
                    <th>Item</th>
                    <th>Likes</th>
                    <th>DisLikes</th>
                    <th>Neutral</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="see-more-btn">
              <button className="see-more">See More</button>
            </div>
          </div>
          <TableMenuDashboard />
          <TableMenuDashboard />
        </main>
      </section>
    </div>
  );
}

export default MenuDashboard;
