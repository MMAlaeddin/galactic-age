export class Age {
  constructor(earthAge, sex) {
    this.earthAge = earthAge,
    this.sex = sex
  }

  checkAgeInput() {
    if (this.earthAge.includes("")) {
      return true
    }
  }
  parseAge() {
    let ageInput = parseInt(this.earthAge)
    return ageInput
    }

  mercuryYears() {
    let yearsOnMerc = parseInt(this.parseAge() / .24)
    return yearsOnMerc
  }
  venusYears() {
    let yearsOnVenus = parseInt(this.parseAge() / .62)
    return yearsOnVenus
  }

  marsYears() {
    let yearsOnMars = parseInt(this.parseAge() / 1.88)
    return yearsOnMars
  }

  jupiterYears() {
    let yearsOnJupiter = parseInt(this.parseAge() / 11.86)
    return yearsOnJupiter
  }
  femaleInput() {
    let female = 81
    if (this.sex === "female") {
      return female
    }
  }
  }



  
