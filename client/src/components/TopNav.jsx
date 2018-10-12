import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Caretaking</NavbarBrand>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Medications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Logs</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </Navbar>
      </div>
    );
  }
}