import React from 'react';

import LeftBox from './components/left-box/LeftBox';
import RightBox from './components/right-box/RightBox';

export default class App extends React.Component{
  render(){
    return(
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <div className="flex-wrapper">
        <div className="inner-content">
          <LeftBox/>
          <RightBox/>
        </div>
      </div>
    </div>
    );
  }
}
