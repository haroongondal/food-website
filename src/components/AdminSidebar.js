import React from 'react'
import { useState } from 'react';
import '../styles/AdminSidebar.css'

function AdminSidebar() {

  const [IsOpened, setOpened] = useState(false)

    const handdleToggle = () => {
      console.log("clicked")
      setOpened(!IsOpened)}

    return (
        <section id="sidebar">
		<a href="#abcabc" className="brand">
			<span className="logo-text">FoodApp</span>
		</a>
        <ul className="sidebar-menu">
    <li><span className="nav-section-title"></span></li>
    <li className= {IsOpened ? "have-children" : "have-no-children"}><a href="#abc" onClick={handdleToggle}><span className="fa fa-university"></span>Menu</a>
        <ul>
        <li><a href="#abc">Add Exhibition</a></li>
        <li><a href="#abc">View Exhibitions</a></li>
        <li><a href="#abc">Add Exhibition</a></li>
        <li><a href="#abc">View Exhibitions</a></li>
      </ul> 
    </li>
    <li className="have-children"><a href="#abc"><span className="fa fa-tags"></span>Menu</a>
      <ul>
        <li><a href="#abc">Add Category</a></li>
        <li><a href="#abc">View Categories</a></li>
      </ul>
    </li>
    <li className="have-children"><a href="#abc"><span className="fa fa-trophy"></span>Menu</a>
      <ul>
        <li><a href="#abc">Add Award</a></li>
        <li><a href="#abc">View Awards</a></li>
      </ul>
    </li>
    <li className="have-children"><a href="#abc"><span className="fa fa-gavel"></span>Menu</a>
      <ul>
        <li><a href="#abc">Add Jury</a></li>
        <li><a href="#abc">View Juries</a></li>
      </ul>
    </li>
    <li className="have-children"><a href="#abc"><span className="fa fa-user-o"></span>Menu</a>
      <ul>
        <li><a href="#abc">Add Author</a></li>
        <li><a href="#abc">View Authors</a></li>
      </ul>
    </li>
    <li><a href="#abc"><span className="fa fa-picture-o"></span>Menu</a></li>
    <li className="have-children"><a href="#abc"><span className="fa fa-flag"></span>Menu</a>
      <ul>
        <li><a href="#abc">View Judging points</a></li>
        <li><a href="#abc">Create Acceptances List</a></li>
        <li><a href="#abc">Create Awarded List</a></li>
        <li><a href="#abc">View Candidates for Awards</a></li>
        <li><a href="responsive_table.html">Send Report Cards</a></li>
      </ul>
    </li>
    <li><a href="#abc"><span className="fa fa-envelope-o"></span>Menu</a></li>
    <li><a href="#abc"><span className="fa fa-gear"></span>Logout</a></li>
  </ul>

	</section>
    )
}

export default AdminSidebar
