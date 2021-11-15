import '../styles/SecResMenu.css'

export default function ResMenuItem(props) {

    return (
        <div>
            <h5 key = {props.data && props.data.Id}>{props.data && props.data.Name}</h5>
            <ul className="ul-for-menu">
        {props.data.MenuItemsBySubCusine && props.data.MenuItemsBySubCusine.map((m) => 
        <li className="hide-show" style={{display: "list-item"}}>
                                <h4>
                                    <span>{props.data.MenuName}</span>
                                    <span>{`Rs ${m.Price}`}</span>
                                </h4>
                                {/* <div className="div-for-rating-menu">
                                <div className="rate-for-menu">
                                    <input type="radio" id="star5" name="rate" value="5"/>
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4"/>
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3"/>
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2"/>
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1"/>
                                    <label for="star1" title="text">1 star</label>
                                </div>
                                <p><span>123</span> Ratings</p>
                                </div> */}
                                <p className="text-menu-desc">{m.MenuName}</p>
                                <p className="text-menu-review">{m.MenuDescription}</p>    
                            </li>
                            )}
                            </ul>
                            </div>
    )
}