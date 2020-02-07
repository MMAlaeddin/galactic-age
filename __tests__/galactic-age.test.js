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
    expect(age.venusYears()).toEqual(64)
  });

  test("this should calculate and return how old user is on Mars", () => {
    let age = new Age(40)
    expect(age.marsYears()).toEqual(21)
  });

  test("this should calculate and return how old user is on Jupiter", () => {
    let age = new Age(40)
    expect(age.jupiterYears()).toEqual(3)
});
  
  test("this should confirm users exercise input if they do exercise", () => {
    let age = new Age(40, "yes")
    expect(age.exerciseInput()).toEqual(5)
  });

  test("this should confirm users input if they do not exercise", () => {
    let age = new Age(40, "no")
    expect(age.exerciseInput()).toEqual(0)
  });

  test("this should show how long user will live on Mercury if they exercise", () => {
    let age = new Age(40, "no")
    expect(age.exerMerc()).toEqual(166)
  })
  })

