let userAge = prompt("How old are you?")
let userTravelDistance = prompt("How far will you be travelling? (in kilometers please)")

let pricePerTravelledKilometer = .21

let travellingPrice

if (userAge < 18) {
    travellingPrice = 0.8*(userTravelDistance * pricePerTravelledKilometer)
} if (userAge > 65) {
    travellingPrice = 0.6*(userTravelDistance * pricePerTravelledKilometer)
} else {
    travellingPrice = userTravelDistance * pricePerTravelledKilometer
}

console.log(`The cost of your fare is ` + travellingPrice + ` pounds`)
