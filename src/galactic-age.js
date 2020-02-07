export class Age {
  constructor(earthAge, exercise) {
    this.earthAge = earthAge,
    this.exercise = exercise
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

  exerciseInput() {
    let yesExercise = 5
    let noExercise = 0
    if (this.exercise === "yes") {
      return yesExercise
    } else if (this.exercise === "no") {
      return noExercise
    }
  }
  
  humanYears() {
    let human = 79
    return human
  
  }
  remainingYears() {
    let remain = this.humanYears() - this.earthAge
    let totalRemain = remain + this.exerciseInput() 
    return totalRemain
  }
  totalMercury() {
    let exerMerc = this.exerciseInput() + this.earthAge + this.mercuryYears()
    let totalMerc = this.mercuryYears() - this.remainingYears()
    return (exerMerc + " and you've lived " + totalMerc + " years past your expected age on Earth.")
  }
  totalVenus() {
  let exerVenus = this.exerciseInput() + this.venusYears()
    let totalVenus = this.humanYears() - this.venusYears()
    return (exerVenus + " and you've got " + totalVenus + " years left to live!")

}
}