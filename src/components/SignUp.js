import arrowImg from '../images/grey-arrow.svg'
import '../styles/SignUp.css'
import 'react-responsive-modal/styles.css'
import React,{ useState, useEffect } from 'react'
import useFetch from '../Utils/useFetch'
import { validEmail, validUser } from '../regex.js';
function SignUp() {
    const [userName , setUserName] = useState('');
    const [fullName , setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [enterPassword, setEnterPassword] = useState('');
    const [reEnterPass, setReEnterPass] = useState('');
    const [valid, setValid] = useState({userName,fullName,email,enterPassword});

    function signUp(){
      
    const object = {
        userName: userName,
        fullName: fullName,
        email: email,
        enterPassword: enterPassword,
        // reEnterPass: reEnterPass,
        AccountTypeId: 2,
    }

    const formBody = Object.keys(object).
    map(key => encodeURIComponent(key) + '='
     + encodeURIComponent(object[key])).join('&');

    const data = fetch("https://api.masairapp.com/api/User/Signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
            
        },
        body:JSON.stringify(formBody)
    }).then((result)=>{
        result.json(data)
    }).catch((error)=>{
        console.log(error)
    })
   
}
    const {data, isPending, error} = useFetch("https://api.masairapp.com/api/Lov/GetCities");
      
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
                                <form>
                                    <div className="form-group" style={{marginTop: "30px"}}>
                                        <span className="input-icon"><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" Value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="UserName" required />
                                    </div>
                                   
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" Value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder="FullName" required />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-envelope"></i></span>
                                        <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email *" required />
                                        
                                    </div>
                                   
                                   
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-key"></i></span>
                                        <input type="password" className="form-control" Value={enterPassword} onChange={(e)=>setEnterPassword(e.target.value)} placeholder="Enter password *" required/>
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-key"></i></span>
                                        <input type="password" className="form-control"  Value={reEnterPass} onChange={(e)=>setReEnterPass(e.target.value)} placeholder="Re-enter password *" required/>
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
                                    <button className="btn" onClick={signUp}>Create Account</button>
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