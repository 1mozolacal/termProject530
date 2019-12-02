import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makePicture } from "../../actions/centerAction";

export class Form extends Component {
  state = {
    cap: "",
    url: "",
    des: "",
    author: ""
  };

  static propTypes = {
    mak44ePicture: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { cap, url, des, author } = this.state;
    const object = { cap, url, des, author };
    this.props.makePicture(object);
    console.log("Submitted");
  };

  render() {
    const { cap, url, des, author } = this.state;
    return (
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Add a picture
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Caption:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="cap"
                    onChange={this.onChange}
                    value={cap}
                  ></input>
                </div>
                <br />
                <div className="form-group">
                  <label>URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="url"
                    onChange={this.onChange}
                    value={url}
                  ></input>
                </div>
                <br />
                <div className="form-group">
                  <label>Description:</label>

                  <textarea
                    type="text-area"
                    className="form-control"
                    name="des"
                    onChange={this.onChange}
                    value={des}
                  ></textarea>
                </div>
                <br />
                <div className="form-group">
                  <label>Author:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    onChange={this.onChange}
                    value={author}
                  ></input>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { makePicture })(Form);
