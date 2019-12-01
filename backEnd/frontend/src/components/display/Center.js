import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfo, deletePicture } from "../../actions/centerAction";

export class center extends Component {
  static propTypes = {
    object: PropTypes.array.isRequired,
    getInfo: PropTypes.func.isRequired,
    deletePicture: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    return (
      <Fragment>
        <h1>title</h1>

        {this.props.object.map(item => (
          <div className="content_blk" key={item.id}>
            <h3>Reactjs</h3>
            <div className="row">
              <div className="col sm_box">
                <p>{item.des}</p>
              </div>
              <div className="col-md-auto">
                <div className="img_blk">
                  <img src={item.url}></img>
                </div>
              </div>
            </div>
            <div className="button">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.props.deletePicture.bind(this, item.id)}
              >
                delete Picture
              </button>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  object: state.centerReducer.object
});

export default connect(mapStateToProps, { getInfo, deletePicture })(center);
