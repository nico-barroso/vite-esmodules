import styles from "./Card.module.css";

export const CardRatings = (...texts) => {
  const ratingsGroup = document.createElement("div");
  ratingsGroup.className = styles.ratingGroup;

  const content = texts.length ? texts : ["Guest Favorite", "4 Night Stay"];

  content.forEach((text) => {
    const rating = document.createElement("div");
    rating.className = styles.ratings;
    rating.textContent = text;
    ratingsGroup.appendChild(rating);
  });

  return ratingsGroup;
};
