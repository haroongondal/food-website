import React, { useState } from 'react'
import '../styles/FollowerItems.css'
import FollowersList from './FollowersList';
function SectionFollower() {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
       
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
       
        setActiveTab("tab2");
      };
    return (
        
            <div className="right-section" style={{backgroundColor: "white"}}>
            <div style={{textAlign: "center",margin: "20px",marginTop: "30px"}}>
                    <h3 style={{fontSize: "1.4rem", fontWeight: "700"}}>Followers</h3>
                </div>
                
                <ul className="tab-group">
                      <li className={`tab  ${activeTab === "tab1" ? "active" : ""}`}  onClick={handleTab1}><p>Followers</p></li>
                      <li className={`tab ${activeTab === "tab2" ? "active" : ""}`}  onClick={handleTab2}><p>Following</p></li>
                </ul>
             

                {activeTab === "tab1" ? <FollowersList/>  : <FollowersList/> }


               
                
            
            </div>
        
    )
}

export default SectionFollower
