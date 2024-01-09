import "../style/Button.css"

export default function Button({ name,onClick, styles }) {
  return <button style={styles} className="button background-yellow-linear" onClick={onClick}>{name}</button>;
}
