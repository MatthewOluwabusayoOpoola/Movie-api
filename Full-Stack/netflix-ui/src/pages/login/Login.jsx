import "./Login.scss"

export default function Login() {
    
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="" className="logo" />
            </div>
        <div className="container">
           <form >
            <h1>Sign In</h1>
            <input type="email" placeholder="email or phone number" />
            <input type="password" placeholder="password" />
            <button className="loginButton">Sing In</button>
            <span>New to Netflix <b>Sign up now.</b></span>
            <small>
                This is protected by Google reCAPCHA to ensure you're not a bot. <b>Learn more</b>
            </small>
           </form>
            
        </div>
    </div>
    </div>
  )
}
