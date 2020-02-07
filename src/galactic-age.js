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
    let jupYears = parseInt(this.earthAge) / 11.86
    return jupYears
    // let yearsOnJupiter = parseInt(this.parseAge() / 11.86)
    // return yearsOnJupiter
  }
  }



  
