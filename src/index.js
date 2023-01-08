import bootstrapLinks from "./bootstrap";
import { observeContainer, observerBars } from "./observer.js";
import getImage from "./unsplash";

observeContainer();
observerBars();

bootstrapLinks();
getImage("note", "lista-de-tareas");
getImage("calculator", "calculadora");
