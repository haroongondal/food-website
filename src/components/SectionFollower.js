import React, { useState } from 'react'
import '../styles/FollowerItems.css'
import FollowerItem from '../components/FollowerItem';
function SectionFollower() {
    const [isOpened, setIsOpened] = useState(true);

    return (
        <div>
            <div class="right-section" style={{backgroundColor: "white"}}>
                <div style={{textAlign: "center",margin: "20px",marginTop: "30px"}}>
                    <h3 style={{ fontSize:"1.4rem",
                    fontWeight: "700"}}>Followers</h3>
                </div>
                <ul class="tab-group">
                      <li class="tab active"><a  onClick={()=>setIsOpened(isOpened)}>Followers</a></li>
                      <li class="tab"><a>Following</a></li>
                </ul>
                {isOpened && (
       <FollowerItem/>
      )}

                
            
            </div>
        </div>
    )
}

export default SectionFollower
