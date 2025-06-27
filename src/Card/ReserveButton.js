import styles from "./Card.module.css";

export const CardReserveButton = () => {
  const button = document.createElement("button");
  button.className = styles.reserve;
  button.innerHTML = "Reserve Now";
  return button;
};
