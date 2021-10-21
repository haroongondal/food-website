import arrowImg from '../images/grey-arrow.svg'
import '../styles/SignUp.css'
import 'react-responsive-modal/styles.css'

function SignUp() {

    return (
       
       
        <div className="row">
        <div className="col-md-12">
 
                {/* Modal */}
               {/* <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"> */}
                    <div className="modal-dialog" role="document">
                        <div className="modal-content clearfix">
                            {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> */}
                            <div className="modal-body">
                                <h3 className="title">Welcome to FoodApp!</h3>
                                <hr className="hr-for-sign-in-form"/>
                                <div className="content-of-form">
                                    <div className="form-group" style={{marginTop: "30px"}}>
                                        <span className="input-icon"><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" placeholder="First Name *"/>
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" placeholder="Last Name *"/>
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-envelope"></i></span>
                                        <input type="email" className="form-control" placeholder="Enter email *"/>
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-key"></i></span>
                                        <input type="password" className="form-control" placeholder="Enter password *"/>
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-key"></i></span>
                                        <input type="password" className="form-control" placeholder="Re-enter password *"/>
                                    </div>
                                    <div className="form-location">
                                        <span style={{marginTop:"3px"}} className="input-icon" ><i className="bi bi-geo-alt"></i></span>
                                        <select>
                                            <option className="option">Primary Dining Location *</option>
                                            <option className="option">Argentina</option>
                                            <option className="option">Andorra</option>
                                            <option className="option">Algeria</option>
                                            <option className="option">Northwest Territories</option>
                                            <option className="option">Saskatoon / Saskatchewan</option>
                                        </select>
                                        <span>
                                            <img alt="alttt" src={arrowImg}/>
                                        </span>
                                    </div>
                                    <div className="form-group checkbox" style={{margiTop: "30px"}}>
                                        <input type="checkbox"/>
                                        <label>I am an administrative professional who books reservations for others.</label>
                                    </div>
                                    <div className="form-group checkbox">
                                        <input type="checkbox"/>
                                        <label>Sign me up to receive exclusive dining offers and news
                                            on hot new restaurants on FoodApp.</label>
                                    </div>
                                    <div className="form-group checkbox">
                                        <input type="checkbox"/>
                                        <label>Remember me</label>
                                    </div>
                                    <button className="btn">Create Account</button>
                                    <hr className="hr-for-sign-in-form"/>
                                    <h6 className="text-dont-want-form">Don't want to complete the form?</h6>
                                    <button className="social-button">
                                        <span>Continue with Booking.com</span>
                                    </button>
                                    <button className="social-button">
                                        {/* <img src="social_facebook_icon.svg" class="button-icon"> */}
                                        <span>Continue with Facebook</span>
                                    </button>
                                    <button className="social-button">
                                        {/* <img src="social_facebook_icon.svg" class="button-icon"> */}
                                        <span>Continue with Google</span>
                                    </button>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
</div>

    )
}

export default SignUp;