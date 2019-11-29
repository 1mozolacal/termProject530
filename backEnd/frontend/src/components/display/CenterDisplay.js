import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfo } from "../../actions/testAction";

export class centerDisplay extends Component {
  static propTypes = {
    testObjGot: PropTypes.array.isRequired,
    getInfo: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    return (
      <Fragment>
        <h1>Header :)</h1>
        <tabel className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>ticker</th>
              <th>op</th>
              <th>close</th>
              <th>volume</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.testObjGot.map(dataItem => (
              <tr key={dataItem.id}>
                <td>{dataItem.id}</td>
                <td>{dataItem.ticker}</td>
                <td>{dataItem.op}</td>
                <td>{dataItem.close}</td>
                <td>{dataItem.volume}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </tabel>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  testObjGot: state.centerReducer.testObjects
});

export default connect(mapStateToProps, { getInfo })(centerDisplay);
//export default centerDisplay;
