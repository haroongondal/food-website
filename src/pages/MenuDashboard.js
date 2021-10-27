import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'
import '../styles/MenuDashboard.css'
function MenuDashboard() {
    return (
        <div>
        <AdminSidebar/>
        <section id="content">
            <AdminNavbar/>
            <main>
            <button className="addMenu-btn">Overview</button>
            </main>
        </section>
        </div>
    )
}

export default MenuDashboard
