const React = require("react");
const Navbar = require("./nav");
const AboutContent = require("./aboutContent");

class About extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = { selectedOption: "about-us" };

    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(newOption) {
    const newState = Object.assign(this.state, { selectedOption: newOption });
    this.setState({ selectedOption: "yfkjfkjhkjhkjh" }, () => {
      console.log(this.state);
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={{ border: "2px solid red" }}>
            <Navbar
              selectedOption={this.state.selectedOption}
              handleClick={this.updateSelected}
            />
          </div>
          <div className="col-md-8" style={{ border: "2px solid red" }}>
            <AboutContent selectedOption={this.state.selectedOption} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = About;
