import React from "react";
import "../styles/FeedbackPage.css";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

function FeedbackPage() {
  return (
    <div>
      <AdminSidebar />
      <section id="content">
        <AdminNavbar />
        <main>
          <div className="top-tools">
            <div className="left-tools">
              <button className="dark-blue-btn">Feedback</button>
            </div>
            <div className="right-tools-catch">
              <button className="catch-btn">
                <i class="bx bx-plus-circle"></i>Catch22-...+(4 more)
              </button>
              <button className="catch-btn">10/13/21-10/13/21</button>
            </div>
          </div>
          <div className="Content-graph-boxes">
            <div className="border-back-white">
              <div className="toggle-brands">
                <div className="brands-context-btn">
                  <span>Catch22-Dubai</span>
                  <button type="submit" className="blue-cross-btn">
                    <i class="bx bx-x-circle"></i>
                  </button>
                </div>
                <div className="brands-context-btn">
                  <span>Catch22-Dubai</span>
                  <button type="submit" className="blue-cross-btn">
                    <i class="bx bx-x-circle"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="border-back-white" id="margin-20-TB">
              <div className="outlets-header">
                <h6>
                  Summary <span>(5 Outlets selected)</span>
                </h6>

                <div className="right-outlets-header">
                  <button type="submit" className="blue-setting-btn">
                    <i class="bx bx-cog"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default FeedbackPage;
