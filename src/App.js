import React from "react";
import "./App.css";
import { TodoForm, TodoList } from "./components/todo/";
import {
  addTodo,
  generateId,
  findById,
  toggleTodo,
  updateTodo
} from "./lib/todoHelpers";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, name: "Learn JSX", isComplete: true },
      { id: 2, name: "Build an app", isComplete: false },
      { id: 3, name: "Ship it!", isComplete: false }
    ],
    currentTodo: ""
  };

  handleEmptySubmit = evt => {
    evt.preventDefault();
    this.setState({
      errorMessage: "Please supply a todo name"
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = {
      name: this.state.currentTodo,
      isComplete: false,
      id: newId
    };
    const updatedTodo = addTodo(this.state.todos, newTodo);
    this.setState({ todos: updatedTodo, currentTodo: "", errorMessage: "" });
  };

  handleInputChange = evt => {
    this.setState({ currentTodo: evt.target.value });
  };

  render() {
    const submitHandler = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;
    return (
      <div className="App">
        <header className="App-header">
          <h2>React todos</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div className="todo-app">
          <TodoForm
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          {this.state.errorMessage && (
            <span className="error">{this.state.errorMessage}</span>
          )}
          <br />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
