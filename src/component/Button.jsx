import "../style/Button.css"

export default function Button({ name,onClick }) {
  return <button className="button background-yellow-linear" onClick={onClick}>{name}</button>;
}
