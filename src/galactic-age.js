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
  let exerMerc = this.exerciseInput() + this.mercuryYears()
  let totalMerc = exerMerc - this.humanYears()
  return (exerMerc + " and you've lived " + totalMerc + " years past your expected age on Earth.")
}
totalVenus() {
  let exerVenus = this.exerciseInput() + this.venusYears()
  let totVenus = this.humanYears() - this.venusYears()
  let totalVenus = totVenus - this.exerciseInput()
  return (exerVenus + " and you've got " + totalVenus + " years left to live!")
}
totalMars() {
  let exerMars = this.exerciseInput() + this.marsYears()
  let totMars = this.humanYears() - this.marsYears()
  let totalMars = totMars - this.exerciseInput()
  return (exerMars + " and you've got " + totalMars + " years left to live!")
}
totalJupiter() {
  let exerJupiter = this.exerciseInput() + this.jupiterYears()
  let totJupiter = this.humanYears() - this.jupiterYears()
  let totalJupiter = totJupiter - this.exerciseInput()
  return (exerJupiter + " and you've got " + totalJupiter + " years left to live!")
}
expectJupiter() {
  let exerJup = this.exerciseInput() + this.jupiterYears()
  let totalJup = this.humanYears() - exerJup
  return (exerJup + " and you've lived " + totalJup + " years past your expected age on Earth.")
}
expectMars() {
  let exerMars = this.exerciseInput() + this.marsYears()
  let totalMars = this.humanYears() - exerMars
  return (exerMars + " and you've lived " + totalMars + " years past your expected age on Earth.")
}
expectVenus() {
  let exerVenus = this.exerciseInput() + this.venusYears()
  let totalVenus = this.humanYears() - exerVenus
  return (exerVenus + " and you've lived " + totalVenus + " years past your expected age on Earth.")
}

}