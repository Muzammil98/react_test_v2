import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <div className="bg-light p-2 pl-4 d-flex justify-content-center align-items-center">
        <img
          src={user.avatar_url}
          style={{ borderRadius: "50%" }}
          height="100"
          width="100"
          alt=""
        />
        <div className="pl-3">
          {user.name ? <Modal /> : ""}
          <code>
            <a href={user.html_url} target="_blank">
              {user.html_url}
            </a>
          </code>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Item);
