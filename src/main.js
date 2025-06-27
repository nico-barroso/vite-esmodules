import "./style.css";
import { Card } from "./Card/Card";
import { Home } from "./pages/home";
import { title } from "../utils/titleGenerator/title";

const main = () => {
  title("main.js", document.body);
  const cardHolder = document.createElement("div");
  cardHolder.classList.add("card-holder");
  cardHolder.append(
    Card("Las mejores vistas de Suiza", "Clara Kent"),
    Card("Esto es una prueba", "Componetizado")
  );
  document.body.append(cardHolder);
};

main();
