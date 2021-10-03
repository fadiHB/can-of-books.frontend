import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';


class Footer extends React.Component {
  render() {
    return (
      <div className="footer-layout">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>&copy; Best Books</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
