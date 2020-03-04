'use strict';

const e = React.createElement;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
        <div className="footer" 
        style={{position: "fixed", left: 0, bottom: 0, width: "100%", background: "red", color: "white", textAlign: "center",}}
        >
        <p>Footer</p>
      </div>
    );
  }
}

const domContainer = document.querySelector('#react-footer');
ReactDOM.render(e(Footer), domContainer);