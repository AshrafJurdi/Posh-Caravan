import React from "react";
import ReactDOM from "react-dom";
import "./LandingSplash.css";
import Image from "react-bootstrap/Image";

class LandingSplash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: true,
      image: "/splashimg.jpg"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        popup: false
      });
    }, 3000);
  }

  render() {
    return (
      <div className="popup">
        {this.state.popup ? (
          <div className="popup2">
            <div className="contentpopup">
              <Image
                className="splashimg elementToFadeInAndOut"
                src={process.env.PUBLIC_URL + this.state.image}
                fluid
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<LandingSplash />, rootElement);

export default LandingSplash;
