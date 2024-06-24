"use strict"

function describeCountry(country, population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const country1 = describeCountry("Brasil", 203, "Brasilia")
const country2 = describeCountry("EUA", 333, "Washington")
const country3 = describeCountry("Marrocos", 37, "Rabat")

console.log(country1)
console.log(country2)
console.log(country3)
