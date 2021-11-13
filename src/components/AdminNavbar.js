import React from 'react'
import '../styles/AdminNavbar.css'
import profileImage from '../images/profile_pic.jpg'

function AdminNavbar() {
	
    return (
        
			<nav>
			<i className="bx bx-menu"></i>
			<h1 href="#" className="nav-link">Menu Dashboard</h1>
			<ul>
				<li>
					<a href="#abc" className="notification">
						<i className="bx bxs-bell"></i>
						<span className="num">8</span>
					</a>
				</li>
				<li>
					<a href="#abc" className="profile">
						<img alt="profile-img" src={profileImage}/>
					</a>
				</li>
			</ul>
			
			
		</nav> 
		
    )
}

export default AdminNavbar
