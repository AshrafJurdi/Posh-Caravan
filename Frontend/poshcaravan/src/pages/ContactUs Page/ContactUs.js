import React, { Component } from "react";
import "./ContactUs.css";
import ContactUs1 from "../../components/Contact/ContactUs";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <ContactUs1 {...this.props} />
      </div>
    );
  }
}

export default ContactUs;
