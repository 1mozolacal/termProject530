import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makePicture } from "../../actions/centerAction";

export class Form extends Component {
  state = {
    caption: "",
    url: "",
    description: "",
    author: ""
  };

  static propTypes = {
    makePicture: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { caption, url, description, author } = this.state;
    const object = { caption, url, description, author };
    this.props.makePicture(object);
    console.log("Submitted");
  };

  render() {
    const { catpion, url, description, author } = this.state;
    return (
      <div className="car card-body mat-4 mr-4">
        Add a Picture
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Caption:</label>
            <input
              type="text"
              className="form-control"
              name="caption"
              onChange={this.onChange}
              value={catpion}
            ></input>
          </div>
          <div className="form-group">
            <label>URL:</label>
            <input
              type="url"
              className="form-control"
              name="url"
              onChange={this.onChange}
              value={url}
            ></input>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text-area"
              className="form-control"
              name="description"
              onChange={this.onChange}
              value={description}
            ></input>
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

export default connect(null, { makePicture })(Form);
