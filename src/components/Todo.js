import React from "react";

class Todo extends React.Component {
  // isCompleted = false;

  todoText = () => (
    <div className="col-8">
      <div className="input-group">
        <div className="input-group-prepend">
          <span
            onClick={this.props.onClick}
            className="input-group-text"
            id="basic-addon1"
          >
            <i id="checkbox" className="far fa-square"></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          style={{
            textDecoration: this.props.isCompleted ? "line-through" : "none"
          }}
          value={this.props.text}
          readOnly
        ></input>
      </div>
    </div>
  );

  todoTime = () => (
    <div className="col">
      <input
        type="time"
        className="form-control"
        id="hour"
        name="hour"
        value={this.props.time}
        readOnly
      />
    </div>
  );

  todoDate = () => (
    <div className="col">
      <input
        type="date"
        className="form-control"
        id="birthday"
        name="birthday"
        value={this.props.date}
        readOnly
      />
    </div>
  );

  render() {
    return (
      <div className="form-row align-items-center mb-1">
        {this.todoText()}

        {this.todoTime()}

        {this.todoDate()}
      </div>
    );
  }
}

export default Todo;
