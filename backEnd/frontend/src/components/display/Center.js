import React, { Component, Fragment } from "react";
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
      <Fragment>
        <h1>title</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>ticker</th>
              <th>op</th>
              <th>close</th>
              <th>volume</th>
            </tr>
          </thead>
          <tbody>
            {this.props.object.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.ticker}</td>
                <td>{item.op}</td>
                <td>{item.close}</td>
                <td>{item.volume}</td>
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
