import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../actions";
import { getByPriority } from "../actions";
import { getByCategory } from "../actions";
import { getCompleted } from "../actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      priority: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to todos</h1>
        <button>Completed</button> &nbsp; &nbsp;
        <button onClick={() => this.props.getByPriority(this.state.priority)}>
          Priority
        </button>
        <select onChange={e => this.setState({ priority: e.target.value })}>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="5">5</option>
        </select>
        &nbsp; &nbsp;
        <button>Category</button>
        <select>
          <option value="work">Work</option>
          <option value="home">Home</option>
          <option value="misc">Misc</option>
        </select>
        {/* <ul>
          {this.props.todos.map(todo => {
            return <li>{todo.task.text}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompleted: () => dispatch(getCompleted(completed)),
    getByPriority: priority => dispatch(getByPriority(priority)),
    getByCategory: () => dispatch(getByCategory(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
