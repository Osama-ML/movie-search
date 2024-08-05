/**
 * @jest-environment jsdom
 */
import { ButtonOML } from "../../components/Button/Button-OML";
import { test, expect } from "@jest/globals";

test("Test button component to be defined", () => {
    const buttonOML = new ButtonOML();
    let data = document.createElement("div");
    data.appendChild(buttonOML);
    let newComponent = data.querySelector("button-oml");
    expect(newComponent).toBeDefined();
});
