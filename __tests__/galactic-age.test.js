import { Age } from "../src/galactic-age.js";

describe("Age", () => {

  test("this should confirm earth age input", () => {
    let age = new Age("40");
    expect(age.checkAgeInput()).toEqual(true)
  });

  test("this should confirm input does not take string input", () => {
    let age = new Age("hello")
    expect(age.parseAge()).toEqual(false)
  })
})