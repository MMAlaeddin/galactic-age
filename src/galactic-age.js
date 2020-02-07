export class Age {
  constructor(earthAge) {
    this.earthAge = earthAge
  }

  checkAgeInput() {
    if (this.earthAge.includes("")) {
      return true
    }
  }
}