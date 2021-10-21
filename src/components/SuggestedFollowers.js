import React from 'react'
import profile_pic from '../images/profile_pic.jpg'
import '../styles/SuggestedFollowers.css'
function SuggestedFollowers() {
    return (
        <div>
            <div className="alignment-suggested-followers">
                                    <img src={profile_pic} alt="Avatar"/>
                                    <div>
                                        <h6>Leo Polard</h6>
                                        <p>123 Reviews - 1.7k Followers</p>
                                    </div>
                                </div>
        </div>
    )
}

export default SuggestedFollowers
