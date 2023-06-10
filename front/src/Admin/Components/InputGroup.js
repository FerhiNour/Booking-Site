import React from "react";
import classnames from "classnames";

const InputGroup = (props) => {
  return (
    <div className="mb-3 col">
      <label htmlFor={props.for} className="form_label">
        {props.label}
      </label>
      <input
        type={props.InputType}
        className={classnames("form-control", {
          "is-invalid": props.errors,
        })}
        name={props.InputName}
        onChange={props.onChangeHandler}
        value={props.value}
        placeholder={props.placeholder}
      />
      {props.errors && <div class="invalid-feedback">{props.errors}</div>}
    </div>
  );
};

export default InputGroup;
