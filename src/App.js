import React from "react";
import "./App.css";
import { connect } from "react-redux";
// Components
import SearchInput from "./components/Input";
import List from "./components/List";

function App({ user }) {
  return (
    <div className="App">
      Use github API
      {console.log(user)}
      <SearchInput />
      <List items={["apple", "banana", "orange"]} />
      {/* THINGS to get from profile items: Name,pic,githublink */}
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.user.user
});
export default connect(mapStateToProps)(App);
