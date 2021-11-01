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
                    <thead >
                        <tr>
                            <th className="mr-5" style={{color:"#06386C", fontWeight:"bold"}}>SL No</th>
                            <th className="mr-5" style={{color:"#06386C", fontWeight:"bold"}}>Empolyee</th>
                            <th className="mr-5" style={{color:"#06386C", fontWeight:"bold"}}>Email</th>
                            <th className="mr-5" style={{color:"#06386C", fontWeight:"bold"}}></th>
                            <th className="mr-5" style={{color:"#06386C", fontWeight:"bold"}}>Phone</th>
                            <th className="mr-5" style={{color:"#06386C", fontWeight:"bold"}}>Role</th>
                            <th className="mr-5" style={{color:"#06386C", fontWeight:"bold"}}>Action</th>
                        </tr>
                       </thead>
                       </table>
                       </div>
                       
                       <div className="tbl-content">
                       <table cellpadding="0" cellspacing="0" border="0"> 
                       <tbody>
                       <tr>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}} >1</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>Barsha@dukin.com</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"300"}}>maghna.verma@dineout.co.in</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}></td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>909090909</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>View Role</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>
                            
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
                        <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}} >1</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>Barsha@dukin.com</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"300"}}>maghna.verma@dineout.co.in</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}></td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>909090909</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>View Role</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>
                            
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
                        <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}} >1</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>Barsha@dukin.com</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"300"}}>maghna.verma@dineout.co.in</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}></td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>909090909</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>View Role</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>
                            
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
                        <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}} >1</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>Barsha@dukin.com</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"300"}}>maghna.verma@dineout.co.in</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}></td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>909090909</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>View Role</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>
                            
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
                        <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}} >1</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>Barsha@dukin.com</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"300"}}>maghna.verma@dineout.co.in</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}></td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>909090909</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>View Role</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>
                            
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
                        <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}} >1</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>Barsha@dukin.com</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"300"}}>maghna.verma@dineout.co.in</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}></td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>909090909</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>View Role</td>
                            <td style={{padding:"22px 40px",color:"#06386C", fontWeight:"bold"}}>
                            
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
