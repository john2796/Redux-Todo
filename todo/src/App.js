import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "./store/actionCreator/todoAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtext: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { inputtext } = this.state;
    if (!inputtext.length) return;
    const timestamp = new Date().getUTCMilliseconds();
    const newTodo = {
      id: parseInt(timestamp),
      text: this.state.inputtext
    };
    this.props.addTodo(newTodo);
    this.setState({ inputtext: "" });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            name="inputtext"
            value={this.state.inputtext}
            onChange={this.handleChange}
            type="text"
            placeholder="add todo"
          />
          <button type="submit">add todo</button>
        </form>
        {this.props.todos.map(todo => (
          <>
            <p>{todo.text}</p>
            <button onClick={() => this.props.deleteTodo(todo.id)}>
              delete todo
            </button>
          </>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo }
)(App);
