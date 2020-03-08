import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        {/* MODAL START */}
        <button
          type="button"
          className="btn btn-outline-info"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {user.name}
        </button>
        <div className="modal fade" id="exampleModal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Full name: </strong>
                  {user.name}
                </p>
                <p>
                  <strong>Location: </strong>
                  {user.location ? user.location : "No locaiton"}
                </p>
                <p>
                  <strong>Followers: </strong>
                  {user.followers}
                </p>
                <p>
                  <strong>Following: </strong>
                  {user.following}
                </p>
                <img
                  src={user.avatar_url}
                  height="200"
                  width="200"
                  alt="profile_pic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* MODAL ENDS */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Modal);
