import '../styles/Reservation_Item.css'
import calenderIcon from '../images/calender.svg'
import downArrowIcon from '../images/grey-arrow.svg'
import personsIcon from '../images/persons.svg'

export default function ReservationItem() {

    return (
        <div>
           
            
           <div className="section-right-reservation">
                <div className="border-reservation">
                    <div className="content-reservation">
                        <h6>Make a reservation</h6>
                    </div>
                    <div className="section-select-reservation">
                        
                        <div className="border-select-sections">
                            <img className="image-calender" alt="calender-icon" src={calenderIcon}/>
                            <div className="date-picker">
                                <div className="selected-date" data-value="Wed Oct 13 2021 05:00:00 GMT+0500 (Pakistan Standard Time)">13 / 10 / 2021</div>
                        
                                <div className="dates">
                                    <div className="month">
                                        <div className="arrows prev-mth">&lt;</div>
                                        <div className="mth">October 2021</div>
                                        <div className="arrows next-mth">&gt;</div>
                                    </div>
                        
                                    <div className="days"><div className="day">1</div><div className="day">2</div><div className="day">3</div><div className="day">4</div><div className="day">5</div><div className="day">6</div><div className="day">7</div><div className="day">8</div><div className="day">9</div><div className="day">10</div><div className="day">11</div><div className="day">12</div><div className="day selected">13</div><div className="day">14</div><div className="day">15</div><div className="day">16</div><div className="day">17</div><div className="day">18</div><div className="day">19</div><div className="day">20</div><div className="day">21</div><div className="day">22</div><div className="day">23</div><div className="day">24</div><div className="day">25</div><div className="day">26</div><div className="day">27</div><div className="day">28</div><div className="day">29</div><div className="day">30</div><div className="day">31</div></div>
                                </div>
                            </div>
                            <img className="reservation-image-down-arrow" alt="down-arrow-icon" src={downArrowIcon}/>
                        </div>
                        


                        <div className="content-two-persons">
                            <span className="two-persons-image">
                                <img alt="person-icon" src={personsIcon}/>
                            </span>
                            <select>
                                <option value="2-persons">2 Persons</option>
                                <option value="3-persons">3 Persons</option>
                                <option value="4-persons">4 Persons</option>
                                <option value="5-persons">5 Persons</option>
                                <option value="6-persons">6 Persons</option>
                                <option value="7-persons">7 Persons</option>
                                <option value="8-persons">8 Persons</option>
                                <option value="9-persons">9 Persons</option>
                            </select>
                            <span className="two-persons-down-arrow">
                                <img alt="down-arrow-icon" src={downArrowIcon}/>
                            </span>
                        </div>
                        <div className="border-find-table">
                            <h6>Find a table</h6>
                        </div>
                        <h6 className="text-booked-reservation">Booked <span>148</span> times today</h6>
                        <hr/>
                        <h6 className="text-special-offers">Special offers available. <span>See details</span></h6>
                    </div>
                </div>
            </div> 
                
            
        </div>
    )
}