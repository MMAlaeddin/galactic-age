export class Age {
  constructor(earthAge) {
    this.earthAge = earthAge
  }

  checkAgeInput() {
    if (this.earthAge.includes("")) {
      return true
    }
  }
  parseAge() {
    if(isNaN(this.earthAge)) {
      return false
    }
  }
}