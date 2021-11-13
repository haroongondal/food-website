import React from "react";
import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import FeedbackComponents from "../components/FeedbackComponents";
import TableMenuDashboard from "../components/TableMenuDashboard";
import { Pie } from "react-chartjs-2";
import "../styles/MenuDashboard.css";
function MenuDashboard() {
  const [data, changeData] = useState({
    labels: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford",
    ],
    datasets: [
      {
        data: [6172, 181045, 153060, 106519, 105162, 95072],
        //backgroundColor:'green',
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
      },
    ],
  });

  return (
    <div>
      
          <FeedbackComponents />

          <div className="Content-graph-boxes">
            <div className="selling-box">
              <div className="border-selling-box">
                <div
                  className="content-selling-table"
                  style={{ borderBottom: "1px solid #b8b8b8a6" }}
                >
                  <h6 className="title-selling-box">Top selling cateogories</h6>
                  <button className="selling-img">
                    <i class="bx bx-plus-circle"></i>
                  </button>
                </div>

                <div className="selling-graph">
                  <div>
                    <Pie
                      data={data}
                      options={{
                        legend: {
                          display: false,
                          labels: {
                            fontColor: "#000",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="border-selling-box">
                <div
                  className="content-selling-table"
                  style={{ borderBottom: "1px solid #b8b8b8a6" }}
                >
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
                <div
                  className="content-selling-table"
                  style={{ borderBottom: "1px solid #b8b8b8a6" }}
                >
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
                <div
                  className="content-selling-table"
                  style={{ borderBottom: "1px solid #b8b8b8a6" }}
                >
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
            <div
              className="content-selling-table"
              style={{ borderBottom: "1px solid #b8b8b8a6" }}
            >
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
       
    </div>
  );
}

export default MenuDashboard;
