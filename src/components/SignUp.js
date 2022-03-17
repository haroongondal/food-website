import arrowImg from '../images/grey-arrow.svg'
import '../styles/SignUp.css'
import 'react-responsive-modal/styles.css'
import React from 'react'
import useFetch from '../Utils/useFetch'
import { useState } from 'react'

function SignUp(props) {
   
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [city, setCity] = useState();
      
    
    const {data, isPending, error} = useFetch("/Lov/GetCities");

    function validate() {
        
        if (!check1) {
            console.log(" Check 1 is false")
           return false
        }
        if (!check2) {
            console.log(" Check 2 is false")
            return false;
        }
        if (password !== confirmPassword) {
            console.log(" Password Mismatch")
            return false
        }
            return true;

    }

    function handleSignUp(e) {
        e.preventDefault();
        if(validate()) {
            console.log("validated")
            const values = {
                userName: userName,
                fullName: fullName,
                email: email,
                password: password,
                AccountTypeId: 5,
            }
            fetch("https://api.masairapp.com/api/User/Signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                    
                },
                body:JSON.stringify(values)
             
            }).then((result)=>{
              
              return result.json()
            })
            .then((data) => {
             if (!data.ResponseMessage) {
                
             }
            })
            .catch((error)=>{
                console.log(error)
            })
        } 
    }
   
    return (
       
       
        <div className="row">
        <div className="col-md-12">
 
                {/* Modal */}
               {/* <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"> */}
                    <div className="modal-dialog" role="document">
                        <div className="modal-content clearfix">
                            {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> */}
                            <div className="modal-body">
                                <h3 className="title">Welcome to DeaseApp!</h3>
                                <hr className="hr-for-sign-in-form"/>
                                <form >
                                <div className="content-of-form">
                                
                                    <div className="form-group" style={{marginTop: "30px"}}>
                                        <span className="input-icon"><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" placeholder="UserName" value={userName} required
                                         onChange={(e) => setUserName(e.target.value)} />
                                        
                                    </div>
                                    
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-person"></i></span>
                                        <input type="text" className="form-control" Value={fullName} required
                                         onChange={(e) => setFullName(e.target.value)} placeholder="FullName"  />
                                        
                                    </div>
                                    
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-envelope"></i></span>
                                        <input type="email" className="form-control" value={email} required
                                            onChange={(e) => setEmail(e.target.value)} placeholder="Enter email *" />
                                         
                                    </div>
                                   
                                   
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-key"></i></span>
                                        <input type="password" className="form-control" value={password} required
                                         onChange={(e) => setPassword(e.target.value)} placeholder="Enter password *"/>
                                        
                                    </div>
                                    
                                    <div className="form-group">
                                        <span className="input-icon"><i className="bi bi-key"></i></span>
                                        <input type="password" className="form-control"value={confirmPassword} required
                                         onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter password *"/>
                                        
                                    </div>
                                    
                                    <div className="form-location">
                                        <span style={{marginTop:"3px"}} className="input-icon" ><i className="bi bi-geo-alt"></i></span>
                                        <select onChange={(e) => setCity(e.target.value)} >
                                        
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
                                        <input type="checkbox" onChange={(e) => setCheck1(e.target.checked)} />
                                        <label>I am an administrative professional who books reservations for others.</label>
                                    </div>
                                    <div className="form-group checkbox" onChange={(e) => setCheck2(e.target.checked)}>
                                        <input type="checkbox"/>
                                        <label>Sign me up to receive exclusive dining offers and news
                                            on hot new restaurants on DeaseApp.</label>
                                    </div>
                                    <div className="form-group checkbox">
                                        <input type="checkbox"/>
                                        <label>Remember me</label>
                                    </div>
                                    <button className="btn" onClick = {(e) => handleSignUp(e)}>Create Account</button>
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
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
</div>

    )
}

export default SignUp;