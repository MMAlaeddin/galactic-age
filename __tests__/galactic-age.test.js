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

  test("this should show user how old they are and how long they've lived past earth years in Mercury", () => {
    let age = new Age(40, "yes")
    expect(age.totalMercury()).toEqual(211 + " and you've lived " + 122 + " years past your expected age on Earth.")
  })
  })

