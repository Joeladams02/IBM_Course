function temp_conversion() {
    var celcius = document.getElementById("c").value
    var farenheit = (celcius.value * 5/9) + 32 
    document.getElementById('f').value = farenheit
}

function weight_conversion() {
    var kilograms = document.getElementById("kg")
    var pounds = (kilograms.value * 2.205)
    document.getElementById('lb').value = pounds
}

function distance_conversion() {
    var kilometres = document.getElementById("km")
    var miles = (kilometres.value * 0.621)
    document.getElementById('ml').value = miles
}