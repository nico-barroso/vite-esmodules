import styles from "./Card.module.css";
import { CardRatings } from "./CardRatings";
import { CardReserveButton } from "./ReserveButton";
/**
 *
 * @param {*} title - Título de la tarjeta | String
 * @param {*} author - Autor de la tarjeta | String
 * @param {*} contentText - Texto descriptivo | String
 * @param  {...any} ratings | Etiqueta de valoración gris
 * @returns Elemento Card reutilizable
 */
export const Card = (title, author, contentText, ...ratings) => {
  const card = document.createElement("article");
  card.className = styles.card;

  const heading = document.createElement("div");
  heading.className = styles.heading;
  heading.innerHTML = `<h1>${title}</h1><h2>${author}</h2>`;

  const paragraph = document.createElement("p");
  paragraph.className = styles.text;
  const content = contentText?.trim()?.length
    ? contentText
    : "Esta hermosa villa localizada en el mar Aegean, ofrece una puesta de sol de ensueño y eleva la relacación a una experiencia inolvidable.";
  paragraph.textContent = content;

  const blur = document.createElement("div");
  blur.className = styles.blur;

  const image = document.createElement("img");
  image.className = styles.imgBg;
  image.src = "/bg-sea.png";
  image.alt = "Fondo del mar";

  card.append(heading, paragraph, blur, image);
  card.append(CardRatings(...ratings));
  card.append(CardReserveButton());
  return card;
};
