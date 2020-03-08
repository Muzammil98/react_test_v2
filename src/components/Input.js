import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "./actions/userAction";

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    // Set the initial timer
    this.timer = null;
  }
  onSubmit(e) {
    e.preventDefault();
  }
  handleChange(e) {
    // Clear time on key enter
    clearTimeout(this.timer);
    this.setState({ [e.target.name]: e.target.value });
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }
  // Check if enter key is pressed
  handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange();
    }
  };

  //   Call action to get user here
  triggerChange = () => {
    console.log(
      "Change triggerred after 1s of inactiviy or enter key pressed",
      this.state.username
    );
    this.props.getUser(this.state.username);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              onKeyDown={this.handleKeyDown}
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              placeholder="Enter GitHub username"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { getUser })(Input);
