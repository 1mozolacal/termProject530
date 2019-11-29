import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfo } from "../../actions/centerAction";

export class center extends Component {
  static propTypes = {
    object: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getInfo();
  }

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

export default connect(mapStateToProps, { getInfo })(center);
