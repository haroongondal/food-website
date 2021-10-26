import React,{ useState} from 'react'

import useFetch from "../Utils/useFetch"
import usePostFetch from "../Utils/usePostFetch"

export default function Login() {

   


    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
   
    
    function Login(){
        // console.log(email,password)
        
        const object = {
            grant_type: "password",
            Username: username,
            Password: password
        }


        const formBody = Object.keys(object).
        map(key => encodeURIComponent(key) + '='
         + encodeURIComponent(object[key])).join('&');

        fetch("https://api.masairapp.com/token",{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
                
            },
            body:formBody
        }).then((result)=>{
            result.json()
        }).catch((error)=>{
            console.log(error)
        })
        
    }

    return (
        
        <div className="row" style={{width: "500px"}}>
            <div className="col-md-12">
    
    {/* <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> */}
        <div className="modal-dialog" role="document">
            <div className="modal-content clearfix">
                {/* <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button> --> */}
                <div className="modal-body">
                    <h3 className="title">Please sign in</h3>
                    <hr className="hr-for-sign-in-form"/>
                    <div className="content-of-form">
                        <div className="form-group" style={{marginTop: "30px"}}>
                            <span className="input-icon"><i className="bi bi-person"></i></span>
                            <input type="email" className="form-control" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <span className="input-icon"><i className="bi bi-key"></i></span>
                            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                        <a href="/" className="forgot-pass">Forgot Password?</a>
                        <button className="btn" onClick={Login}>Sign In</button>
                        <hr className="hr-for-sign-in-form"/>
                        <h6 className="text-dont-want-form">Don't want to complete the form?</h6>
                        <button className="social-button">
                            <span>Continue with Booking.com</span>
                        </button>
                        <button className="social-button">
                            {/* <!-- <img src="social_facebook_icon.svg" class="button-icon"> --> */}
                            <span>Continue with Facebook</span>
                        </button>
                        <button className="social-button">
                            {/* <!-- <img src="social_facebook_icon.svg" class="button-icon"> --> */}
                            <span>Continue with Google</span>
                        </button>
                        <div className="text-create-account">
                            <span>New to FoodApp? </span><a href="/">Create an account</a>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    // </div>
    )
}