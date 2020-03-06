import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { addTodo } from "../../actions";

class AddBar extends React.Component {
  renderTextInput = ({ input }) => {
    return (
      <div className="col-8">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-plus"></i>
            </span>
          </div>
          <input
            {...input}
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="Adicionar tarefa"
          ></input>
        </div>
      </div>
    );
  };

  renderTimeInput = ({ input }) => {
    return (
      <div className="col">
        <input
          {...input}
          type="time"
          className="form-control"
          id="hour"
          name="hour"
        />
      </div>
    );
  };

  renderDateInput = ({ input }) => {
    return (
      <div className="col">
        <input
          {...input}
          type="date"
          className="form-control"
          id="birthday"
          name="birthday"
        />
      </div>
    );
  };

  onSubmit = (formProps, dispatch) => {
		const newProps = {...formProps, userId: this.props.userId};
    console.log(newProps);
    if (formProps.todoText == null || !formProps.todoText.trim()) return;
    dispatch(addTodo(newProps));
    dispatch(reset("createTodo"));
	}

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-row align-items-center mb-3">
          <Field name="todoText" component={this.renderTextInput} />
          <Field name="todoTime" component={this.renderTimeInput} />
          <Field name="todoDate" component={this.renderDateInput} />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
	userId: state.userActions.userId
})

export default reduxForm(
  {
    form: "createTodo"
  },
  { addTodo }
)(connect(mapStateToProps)(AddBar));
