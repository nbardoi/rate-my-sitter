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
          <div
            className="col-md-4"
            style={{
              marginTop: "100px",

              fontSize: "20px",
              padding: "10px",
              listStyleType: "none"
            }}
          >
            <Navbar
              selectedOption={this.state.selectedOption}
              handleClick={this.updateSelected}
            />
          </div>
          <div
            className="col-md-8"
            style={{
              marginTop: "80px",
              fontSize: "20px",
              fontWeight: "300",
              padding: "40px 80px 40px 80px"
            }}
          >
            <AboutContent selectedOption={this.state.selectedOption} />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = About;
