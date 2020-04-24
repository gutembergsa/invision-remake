import React from 'react';
import LoginForm from '../form/LoginForm'
import RegisterForm from '../form/RegisterForm'

export default class RightBox extends React.Component{

    checkUserisRegistered(isRegistered){
      if (isRegistered) {
        return <LoginForm/> 
      }
      else {
        return <RegisterForm/>         
      }      
    }

    render(){
      return(
      <div className="box right">
        <div className="right-box-title">
          <p>Invision</p>
        </div>
        <div className="right-box-content">
          <div className="sub-title">
            <p>Welcome to invision</p>
          </div>
          {this.checkUserisRegistered(false)}
        </div>
      </div>    
      );
    }
  }