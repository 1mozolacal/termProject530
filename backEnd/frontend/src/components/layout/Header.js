import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <h5 className="text-white h4">Visit our other pages</h5>
            <a href="http://scs.ryerson.ca/~akhrulev/page1.html">
              <button type="button" className="btn btn-primary">
                Page 1
              </button>
            </a>

            <a href="http://scs.ryerson.ca/~akhrulev/page2.html">
              <button type="button" className="btn btn-success">
                Page 2
              </button>
            </a>

            <a href="http://scs.ryerson.ca/~akhrulev/page3.html">
              <button type="button" className="btn btn-warning">
                Page 3
              </button>
            </a>

            <a href="http://scs.ryerson.ca/~akhrulev/page5.html">
              <button type="button" className="btn btn-info">
                Page 5
              </button>
            </a>

            <a href="http://scs.ryerson.ca/~akhrulev/page6.html">
              <button type="button" className="btn btn-danger">
                Page 6
              </button>
            </a>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    );
  }
}

export default Header;
