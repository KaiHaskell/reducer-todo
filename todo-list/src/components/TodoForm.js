import React from "react";
import "./unite.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  handleChanges = e => {
    this.setState({ newItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newItem}
          onChange={this.handleChanges}
          type="text"
          name="item"
        />
        <div className="btn-container">
          <button class="bttn-unite bttn-md bttn-primary">Add</button>

          <button
            onClick={this.props.clearCompleted}
            class="bttn-unite bttn-md bttn-primary"
          >
            Clear
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
