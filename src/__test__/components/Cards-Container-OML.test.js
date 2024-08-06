/**
 * @jest-environment jsdom
 */
import { CardsContainerOML } from "../../components/Cards-Container/Cards-Container-OML";
import { test, expect } from "@jest/globals";

test("Test cards container component to be defined in DOM", () => {
  const cardsContainerOML = new CardsContainerOML();
  let data = document.createElement("div");
  data.appendChild(cardsContainerOML);
  let newComponent = data.querySelector("cards-container-oml");
  expect(newComponent).toBeDefined();
});
