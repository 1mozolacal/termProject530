import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getInfo, deletePicture } from "../../actions/centerAction";
import "../../../templates/frontend/style.css";

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
        <h1>Gallary</h1>

        {this.props.object.map(item => (


          <div className="pb-4" key={item.id}>
            <div className="content_blk">
              <h3>{item.cap}</h3>
              <div className="row">
                <div className="col-6">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="sm_box flip-card-front">
                        <p>{item.des}</p>
                      </div>
                      <div className="sm_box flip-card-back">
                        <p>By:{item.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img src={item.url}></img>
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
