import "./title.css";

export const title = (titleName, container) => {
  const message = document.createElement("h2");
  message.classList.add("title");
  message.innerHTML = `${titleName}`;
  container.append(message);
  return message;
};
