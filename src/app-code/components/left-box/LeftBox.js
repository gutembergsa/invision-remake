import React from 'react';
import image from '../../../assets/Data.png';

export default class LeftBox extends React.Component{

    imageButton = <span className="left-box-content-button" />;
    imageButtonSelected = <span className="left-box-content-button select" />;

    ButtonGroup(props){
        let loopData = [];
        for (let index = 0; index < props; index++) {
            if(index == 0) loopData.push(this.imageButtonSelected)
            loopData.push(this.imageButton)  
        }
        return(
        <div className="left-box-content-button-group">
            {loopData}
        </div>
        );
    }

    render(){
      return(
      <div className="box left">
        <img className="left-box-image" src={image} alt="left" />
        <div className="left-box-content">
          <h1>Marcenas mattis egestas</h1>
          <div className="left-box-content-text">
            <p>Erdum et malesuada fames ac ante ileum primmer in</p>
            <p>faucibus uspendisse porta.</p>    
          </div>
          {this.ButtonGroup(3)}
        </div>
      </div>      
      );
    }
  }