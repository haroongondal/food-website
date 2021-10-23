import React from 'react'
import '../styles/AdminMenuPage.css'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'
import MenuComponent from '../components/MenuComponent'
import AdminMenuItem from '../components/AdminMenuItem'

function AdminMenuPage() {
    return (
        <div>
            <AdminSidebar/>
            <section id="content">
                <AdminNavbar/>
                <main>
                    <MenuComponent/>
                    <AdminMenuItem/>
                    <AdminMenuItem/>
                    <AdminMenuItem/>
                </main>
            </section>
        </div>
    )
}

export default AdminMenuPage
