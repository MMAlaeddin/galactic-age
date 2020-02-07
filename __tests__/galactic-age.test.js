import { Age } from "../src/galactic-age.js";

describe("Age", () => {

  test("this should confirm earth age input", () => {
    let age = new Age("40");
    expect(age.checkAgeInput()).toEqual(true)
  });

  test("this should confirm input age is parseInt", () => {
    let age = new Age(40)
    expect(age.parseAge()).toEqual(40)
  });

  test("this should calculate and return how old user is on Mercury", () => {
    let age = new Age(40)
    expect(age.mercuryYears()).toEqual(166)
  });

  test("this should calculate and return how old user is on Venus", () => {
    let age = new Age(40)
    expect(age.venusYears()).toEqual(64.5)
  })
})