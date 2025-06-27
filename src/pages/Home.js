import "./Home.css";
import { Card } from "../Card/Card";
import { title } from "../../utils/titleGenerator/title";

export const Home = () => {
  const section = document.createElement("section");
  section.classList.add("page-holder");

  title("home.js", section);

  const cardHolder = document.createElement("div");
  cardHolder.classList.add("card-holder");
  cardHolder.append(
    Card("Las mejores vistas de Suiza", "Clara Kent"),
    Card("Esto es una prueba", "Componetizado")
  );

  section.appendChild(cardHolder);

  return section;
};
