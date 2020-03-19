const React = require("react");

const Navbar = props => {
  const selectedOption = props.selectedOption;
  //   console.log(selectedOption);
  return (
    <div>
      <ul
        id="nav"
        style={{
          listStyleType: "none",
          padding: "20px",
          fontColor: "grey"
        }}
      >
        <li className={selectedOption === "about-us" ? "active" : ""}>
          <a href="#" onClick={props.handleClick("about-us")}>
            About
          </a>
        </li>
        <li className={selectedOption === "team" ? "active" : ""}>
          <a href="#" onClick={props.handleClick("team")}>
            The team
          </a>
        </li>
        <li className={selectedOption === "FAQ" ? "active" : ""}>
          <a href="#" onClick={props.handleClick("FAQ")}>
            FAQ
          </a>
        </li>
        <li className={selectedOption === "contact" ? "active" : ""}>
          <a href="#" onClick={props.handleClick("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

module.exports = Navbar;
