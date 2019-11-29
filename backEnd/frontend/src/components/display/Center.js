import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfo } from "../../actions/centerAction";

export class center extends Component {
  static propTypes = {
    object: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <h1>Center form</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  object: state.centerReducer.object
});

export default connect(mapStateToProps)(center);
