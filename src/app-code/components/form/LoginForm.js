import React from 'react';
import Divider from '../commons/Divider'

export default class LoginForm extends React.Component{
    render(){
     return(
      <form>
        <div className="form-input-layout">
          <p>User name or Email</p>
          <input type="name" className="form-input-text" />
        </div>
        <div className="form-input-layout">
          <p>Password</p>
          <input type="password" className="form-input-text" />
        </div>
        <a className="form-forget-pass" href="/">Forget Password?</a>
        <button className="form-signin-button">Sign in</button>
        <Divider/>
        <button className="form-signup-button">
          <div className="form-signup-button-layout">
            <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-5.png" alt="Google Logo" />
            <p>Sign in with Google</p>    
          </div>
        </button>
        <p>New Invision? <a href="/">Create Account</a></p>
      </form> 
     );
    }
  }