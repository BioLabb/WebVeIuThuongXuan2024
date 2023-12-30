import "../style/Input.css";

export default function Input({ name, value, placeholder, onChange }) {
  return (
    <div className="container_input">
      <label>{`${name}: `}<span className="color_red">*</span> </label>
      <div className="input_wrap">
        <input onChange={onChange} value={value} placeholder={placeholder} />
      </div>
    </div>
  );
}
