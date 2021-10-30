import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'
import EditSvgIcon from '../components/EditSvgIcon'

function UserManagementPage() {
    return (
        <div>
            <AdminSidebar/>
           <section id="content">
           <AdminNavbar/>
           <main>
           <div className="top-tools">
            <div className="left-tools">
              <button className="dark-blue-btn">User Management</button>
            </div>
          </div>
          <div className="most-like-items">
                    <div className="content-selling-table">
                        <h6 className="title-selling-box">User Management</h6>
                        <button className="selling-img py-2s"><i class='bx bx-plus-circle'></i> Add User</button>
                    </div>
                    
                    <div className="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th className="mr-5">SL No</th>
                            <th className="mr-5">Empolyee</th>
                            <th className="mr-5">Email</th>
                            <th className="mr-5">Phone</th>
                            <th className="mr-5">Role</th>
                            <th className="mr-5">Action</th>
                        </tr>
                       </thead>
                       </table>
                       </div>
                       
                       <div className="tbl-content">
                       <table cellpadding="0" cellspacing="0" border="0"> 
                       <tbody>
                       <tr>
                            <td style={{padding:"22px 40px"}} >1</td>
                            <td style={{padding:"22px 40px"}}>Barsha@dukin.com</td>
                            <td style={{padding:"22px 40px"}}>maghna.verma@dineout.co.in</td>
                            <td style={{padding:"22px 40px"}}>909090909</td>
                            <td style={{padding:"22px 40px"}}>View Role</td>
                            <td style={{padding:"22px 40px"}}>
                            <div style={{display: "flex"}}>   
                            <EditSvgIcon/>
                             <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            </div>
                            </td>
                        </tr>
                        
                        <tr >
                        <td>1</td>
                            <td className="py-3">Barsha@dukin.com</td>
                            <td className="py-3">maghna.verma@dineout.co.in</td>
                            <td className="py-3">909090909</td>
                            <td className="py-3">View Role</td>
                            <td className="py-3">
                            <div style={{display: "flex"}}>   
                            <EditSvgIcon/>
                             <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            </div>
                            </td>
                        </tr>
                        <tr >
                            <td className="py-3">1</td>
                            <td className="py-3">Barsha@dukin.com</td>
                            <td className="py-3">maghna.verma@dineout.co.in</td>
                            <td className="py-3">909090909</td>
                            <td className="py-3">View Role</td>
                            <td className="py-3">
                            <div style={{display: "flex"}}>   
                            <EditSvgIcon/>
                             <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            </div>
                            </td>
                        </tr>
                        <tr >
                            <td className="py-3">1</td>
                            <td className="py-3">Barsha@dukin.com</td>
                            <td className="py-3">maghna.verma@dineout.co.in</td>
                            <td className="py-3">909090909</td>
                            <td className="py-3">View Role</td>
                            <td className="py-3">
                            <div style={{display: "flex"}}>   
                            <EditSvgIcon/>
                             <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            </div>
                            </td>
                        </tr>
                        <tr >
                            <td className="py-3">1</td>
                            <td className="py-3">Barsha@dukin.com</td>
                            <td className="py-3">maghna.verma@dineout.co.in</td>
                            <td className="py-3">909090909</td>
                            <td className="py-3">View Role</td>
                            <td className="py-3">
                            <div style={{display: "flex"}}>   
                            <EditSvgIcon/>
                             <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            </div>
                            </td>
                        </tr>
                        <tr >
                            <td className="py-3">1</td>
                            <td className="py-3">Barsha@dukin.com</td>
                            <td className="py-3">maghna.verma@dineout.co.in</td>
                            <td className="py-3">909090909</td>
                            <td className="py-3">View Role</td>
                            <td className="py-3">
                            <div style={{display: "flex"}}>   
                            <EditSvgIcon/>
                             <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                       
                    </div>
           </main>
           </section>
        </div>
    )
}

export default UserManagementPage
