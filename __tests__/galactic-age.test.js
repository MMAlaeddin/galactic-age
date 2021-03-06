import { Age } from "../src/galactic-age.js";

describe("Age", () => {

  test("this should confirm earth age input", () => {
    let age = new Age("40", "no");
    expect(age.checkAgeInput()).toEqual(true)
  });

  test("this should confirm input age is parseInt", () => {
    let age = new Age(40, "no")
    expect(age.parseAge()).toEqual(40)
  });

  test("this should calculate and return how old user is on Mercury", () => {
    let age = new Age(40, "no")
    expect(age.mercuryYears()).toEqual(166)
  });

  test("this should calculate and return how old user is on Venus", () => {
    let age = new Age(40, "no")
    expect(age.venusYears()).toEqual(64)
  });

  test("this should calculate and return how old user is on Mars", () => {
    let age = new Age(40, "no")
    expect(age.marsYears()).toEqual(21)
  });

  test("this should calculate and return how old user is on Jupiter", () => {
    let age = new Age(40, "no")
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
    expect(age.totalMercury()).toEqual(171 + " and you've lived " + 92 + " years past your expected age on Earth.")
  });

  test("this should show user how old they are and how long they've lived past earth years in Venus", () => {
    let age = new Age(40, "yes")
    expect(age.totalVenus()).toEqual(69 + " and you've got " + 10 + " years left to live!")
  });

  test("this should show user how old they are and how long they have left on Mars", () => {
    let age = new Age(40, "yes")
    expect(age.totalMars()).toEqual(26 + " and you've got " + 53 + " years left to live!")
  });

  test("this should show user how old they are and how long they have left on Jupiter", () => {
    let age = new Age(40, "no")
    expect(age.totalJupiter()).toEqual(3 + " and you've got " + 76 + " years left to live!")
  });

  test("this should show life expectancy on Jupiter", () => {
    let age = new Age(40, "no")
    expect(age.expectJupiter()).toEqual(3 + " and you've lived " + 76 + " years past your expected age on Earth.")
  });

  test("this should show life expectancy on Mars", () => {
    let age = new Age(40, "no")
    expect(age.expectMars()).toEqual(21 + " and you've lived " + 58 + " years past your expected age on Earth.")
  });

  test("this should show life expectancy on Venus", () => {
    let age = new Age(40, "no")
    expect(age.expectVenus()).toEqual(64 + " and you've lived " + 15 + " years past your expected age on Earth.")
  });

  test("this should show how many years left to live on Mercury", () => {
    let age = new Age (40, "no")
    expect(age.leftOnMerc()).toEqual("you have " + 3.5 + " left to live on Mercury")
  });
});