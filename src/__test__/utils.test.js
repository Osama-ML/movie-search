import { generarID } from "../utils";
import { test, expect } from "@jest/globals";

test("Prueba de generadir de IDs randoms", () => {
    let data = generarID("game");
    expect(data.length).toBe(6);
});
