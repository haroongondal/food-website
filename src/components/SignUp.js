import arrowImg from '../images/grey-arrow.svg'
import '../styles/SignUp.css'
import 'react-responsive-modal/styles.css'
import React from 'react'
import useFetch from '../Utils/useFetch'
import validate from '../validateInfo';
import useForm from '../useForm';

function SignUp({submitForm}) {
   
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );
      
    
    const {data, isPending, error} = useFetch("/Lov/GetCities");
      
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
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="form-group" style={{marginTop: "30px"}}>
                                        <span className="input-icon"><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" name='userName' placeholder="UserName" value={values.userName}
                                         onChange={handleChange} />
                                         {errors.userName && <p>{errors.userName}</p>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" name="fullName" Value={values.fullName} onChange={handleChange} placeholder="FullName"  />
                                        {errors.fullName && <p>{errors.fullName}</p>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-envelope"></i></span>
                                        <input type="email" className="form-control" name="email" value={values.email}
                                            onChange={handleChange} placeholder="Enter email *" />
                                          {errors.email && <p>{errors.email}</p>}
                                    </div>
                                   
                                   
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-key"></i></span>
                                        <input type="password" className="form-control" value={values.password}
                                         onChange={handleChange}  name='password' placeholder="Enter password *"/>
                                        {errors.password && <p>{errors.password}</p>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-key"></i></span>
                                        <input type="password" className="form-control" name='password2' value={values.password2}
                                         onChange={handleChange} placeholder="Re-enter password *"/>
                                         {errors.password2 && <p>{errors.password2}</p>}
                                    </div>
                                    
                                    <div className="form-location">
                                        <span style={{marginTop:"3px"}} className="input-icon" ><i className="bi bi-geo-alt"></i></span>
                                        <select >
                                        
                                            {isPending && <option className="option">Pending</option>}
                                            {error && <option className="option">{error}</option>}
                                            {data && data.map((select)=>
                                            <option className="option">{select.Value}</option>
                                        )}
                                            
                                           
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
                                    </form>
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