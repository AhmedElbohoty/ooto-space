import React from "react";

function Checkbox({ id, value, setValue }) {
  return (
    <label
      htmlFor={id}
      className={`checkbox-container ${value && "checkbox-active"}`}
    >
      <span className="checkbox-bar"></span>
      <span className="checkbox-indicator"></span>
      <input
        type="checkbox"
        id={id}
        className="checkbox-input"
        value={value}
        onChange={e => setValue(e.target.checked)}
      />
    </label>
  );
}

export default Checkbox;
