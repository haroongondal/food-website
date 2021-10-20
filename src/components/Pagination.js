import React from 'react'
import '../styles/Pagination.css'
function Pagination() {
    return ( 
        <div>
            <nav style={{fontFamily: "monospace" ,display: "flex", justifyContent: "space-between"}}>

                        <ul className="pagination bottom mb-5 mt-5 decoration">
                            <li className="page-item disabled" title="Previous">
                                <a className="navigation-page-link rounded-circle m-1" href="#abc">
                                  <i className="fas fa-chevron-left" style={{fontSize: "smaller",
                                  marginRight:" 1px"}}></i></a></li>
                        </ul>
                        
                        
                        <ul className="pagination justify-content-center bottom mb-5 mt-5 decoration">
                          
                    
                          <li className="navigation-page-item-active"><a className="navigation-page-link rounded-circle m-1" href="Pagination1.html">1</a></li>
                          <li className="page-item"><a className="navigation-page-link rounded-circle m-1" href="Pagination2.html">2</a></li>
                          <li className="page-item"><a className="navigation-page-link rounded-circle m-1" href="Pagination3.html">3</a></li>
                          <li className="page-item"><a className="navigation-page-link rounded-circle m-1" href="Pagination4.html">4</a></li>
                          <li className="page-item"><a className="navigation-page-link rounded-circle m-1" href="Pagination5.html">5</a></li>
                        
                       
                        </ul>

                        <ul className="pagination bottom mb-5 mt-5 decoration">
                            <li className="page-item" title="Next">
                                <a className="navigation-page-link rounded-circle m-1" href="Pagination2.html">
                                  <i className="fas fa-chevron-right" style={{fontSize: "smaller",
                                  marginRight:" 1px"}}></i></a></li>
                        </ul>
                      </nav>
        </div>
    )
}

export default Pagination
