import { useEffect } from "react";
import "../style/Input.css";

export default function Input({
  name,
  value,
  maxLength,
  placeholder,
  onChange,
  validate,
}) {

  return (
    <div className="container_input">
      <label>
        {`${name}: `}
        <span className="color_red">*</span>
      </label>
      {validate && <span className="input_validate">{validate}</span>}
      <div className="input_wrap">
        <input onChange={onChange} value={value} placeholder={placeholder} />
        {maxLength && (
          <span>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}
