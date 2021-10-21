import '../styles/SecResMenu.css'
import ResMenuItem from './ResMenuItem'

export default function SecResMenu() {

    return (
        <div>
           
           <div className="border-menu-section" id="menu-section">
                    <div className="content-menu-section">
                        <h6>Menu</h6>
                        <hr className="hr-for-menu"/>
                        <div className="div-for-menu-buttons">
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                            <button className="menu-button">
                                Dinner
                            </button>
                        </div>
                        <hr className="hr-for-menu"/>
                        <h5>Market Salads &amp; Starters</h5>
                        <ul className="ul-for-menu">
                            <ResMenuItem/>
                        </ul>

                        <div className="button-view-full-menu" style={{display: "none"}}>
                            <a href>View Full Menu</a>
                         </div>
                    </div>
                </div>
            
        </div>
    )
}