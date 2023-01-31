import bootstrapLinks from "./bootstrap";
import { observeContainer, observerBars } from "./observer.js";
import getImage from "./unsplash";
import preventClick from "./preventClick";
import openImgModal from "./openImgModal";

openImgModal();
observeContainer();
observerBars();
preventClick();
bootstrapLinks();
getImage("note", "lista-de-tareas");
getImage("calculator", "calculadora");
getImage("calculator", "calculadora");
getImage("battleship", "battleship");
