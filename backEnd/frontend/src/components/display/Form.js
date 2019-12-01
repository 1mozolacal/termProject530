import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPicture } from "../../actions/centerAction";

export class Form extends Component {
  state = {
    cap: "",
    url: "",
    des: "",
    author: ""
  };

  static propTypes = {
    addPicture: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
<<<<<<< HEAD
    const { cap, url, des, author } = this.state;
    const object = { cap, url, des, author };
    this.props.makePicture(object);
=======
    const { caption, url, description, author } = this.state;
    const object = { caption, url, description, author };
    this.props.addPicture(object);
>>>>>>> 4b9fe2aea8afbfc923e6eed04841b71f1ecf8956
    console.log("Submitted");
  };

  render() {
    const { cap, url, des, author } = this.state;
    return (
      <div className="car card-body mat-4 mr-4">
        Add a Picture
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPicture })(Form);
