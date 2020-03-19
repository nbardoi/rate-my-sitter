const React = require("react");
const Navbar = require("./nav");

class AboutContent extends React.Component {
  render() {
    return (
      <div>
        <h1>Team Overview</h1>

        <p>
          {" "}
          Rate my sitter was founded February of 2020 brought to you by a
          dedicated group of developers who aim to give you the best experience
          at finding a responsible person to take care of the ones you love
          making it easier for a job we know is hard. We also give the
          oppurtunity for a sitter to find a job and be reviewed to enhance
          their qualifications and place them in the perfect position for
          everyone. We are always making room for improvement and hope to add
          features so you can find sitters for not just your babies but your
          furbabies as well. We aim to find something for everyone and are
          always open to suggestions. We hope this site will find the right
          person for you.
        </p>
      </div>
    );
  }
}

module.exports = AboutContent;
