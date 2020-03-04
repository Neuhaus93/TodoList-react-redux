import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter, FilterTypes } from "../../actions";

const Footer = ({ setVisibilityFilter }) => {
  return (
    <div
      className="btn-group btn-group-toggle"
      style={{ marginTop: "20px" }}
      data-toggle="buttons"
    >
      <label className="btn btn-secondary active">
        <input
          onClick={() => setVisibilityFilter(FilterTypes.SHOW_ALL)}
          type="radio"
          name="options"
          id="option1"
          autoComplete="off"
          checked
        />
        Todas
      </label>
      <label className="btn btn-secondary">
        <input
          onClick={() => setVisibilityFilter(FilterTypes.SHOW_ACTIVE)}
          type="radio"
          name="options"
          id="option2"
          autoComplete="off"
        />
        Pendentes
      </label>
      <label className="btn btn-secondary">
        <input
          onClick={() => setVisibilityFilter(FilterTypes.SHOW_COMPLETED)}
          type="radio"
          name="options"
          id="option3"
          autoComplete="off"
        />
        Concluídas
      </label>
    </div>
  );
};

export default connect(null, { setVisibilityFilter })(Footer);
