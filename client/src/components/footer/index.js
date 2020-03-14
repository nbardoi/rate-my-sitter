'use strict';
import React from React;

const e = React.createElement;

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {


    return e(
     <h1>"footer</h1>
    );
  }
}

const domContainer = document.querySelector('#footer');
ReactDOM.render(e(Footer), domContainer);