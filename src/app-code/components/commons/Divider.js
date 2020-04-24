import React from 'react';

export default class Divider extends React.Component{
    render(){
     return(
        <div className="form-divider">
          <div className="form-divider-line" />
          <span>Or</span>
          <div className="form-divider-line" />
        </div>
     );
    }
  }