import styles from "../styles/styles.css";

function CircleButton({ onClick, marginLeft, imageUrl }) {
  return (
    <button className={`circle-button ${marginLeft}`}>
      <img src={imageUrl} className="button-icon"></img>
    </button>
  );
}

export default CircleButton;
