import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTodos());
  }

  render() {
    return <h1>Welcome to todos</h1>;
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}
export default connect(mapStateToProps)(App);
