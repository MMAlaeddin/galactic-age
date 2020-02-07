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
    let noExercise = this.earthAge
    if (this.exercise === "yes") {
      return yesExercise
    } else if (this.exercise === "no") {
      return noExercise
    }
    }
  exerMerc() {
    let mercExercise = this.exerciseInput() + this.mercuryYears()
    return mercExercise
  }
  }

 