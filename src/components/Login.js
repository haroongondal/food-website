import React,{ useState} from 'react'
export default function Login(props) {

   


    const [username, setUserName] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("")
   
    
    function Login(e){
        e.preventDefault()
        
        const object = {
            grant_type: "password",
            Username: username,
            Password: password
        }


        const formBody = Object.keys(object).map(key => encodeURIComponent(key) + '='
         + encodeURIComponent(object[key])).join('&');

        fetch("https://api.masairapp.com/token",{
            method:"POST",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
                
            },
            body:formBody
        }).then((result)=>{
            return result.json()
        })
        .then((res) => {
            console.log(res)
            if(res.error) {
                setError(res.error_description)
            } else {
                localStorage.setItem("jwt", res.access_token)
                localStorage.setItem("username", res.userName)
                localStorage.setItem("isLogedin", true)
                props.setLogedIn(true)
            }
        })
        .catch((error)=>{
            setError(error.message)
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
                    <form>
                    <div className="content-of-form">
                    
                        <div className="form-group" style={{marginTop: "30px"}}>
                            <span className="input-icon"><i className="bi bi-person"></i></span>
                            <input type="text" className="form-control" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <span className="input-icon"><i className="bi bi-key"></i></span>
                            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
                        </div>
                        {error && <h6 className="title">{error}</h6>}
                        <a href="/" className="forgot-pass">Forgot Password?</a>
                        <button className="btn" onClick={(e) => Login(e)}>Sign In</button>
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
                    
                    </form>
                </div>

            </div>
        </div>
    </div>
    </div>
    // </div>
    )
}