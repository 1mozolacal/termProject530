import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfo, deletePicture } from "../../actions/centerAction";

export class center extends Component {
  static propTypes = {
    object: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    return (
      <Fragment>
        <h1>title</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Cap</th>
              <th>URL</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.object.map(item => (
              <tr key={item.id}>
                <td>{item.caption}</td>
                <td>{item.url}</td>
                <td>{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  object: state.centerReducer.object
});

export default connect(mapStateToProps, { getInfo })(center);
