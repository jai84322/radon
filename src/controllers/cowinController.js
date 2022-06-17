const axios = require('axios')

let getVaccine = async function (req, res) {
    let district = req.query.district
    let date = req.query.date
    let result = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`) // template literal
    let data= result.data
    return res.status(200).send({msg : data})
}

module.exports.getVaccine = getVaccine   

let londonWeather = async function (req, res) {
    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=27899f5be4cdd787eb306e01685056a0`) 
    let data= result.data
    return res.status(200).send({msg : data})
}

module.exports.londonWeather = londonWeather 

let londonTemp = async function (req, res) {
    let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=27899f5be4cdd787eb306e01685056a0`) 
    let data= result.data.main.temp
    return res.status(200).send({msg : data})
}

module.exports.londonTemp = londonTemp 

let getSortedCities = async function (req, res) {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let cityObjArray = []

    for (let i = 0; i<cities.length;i++ ) {
        let obj = {city : cities[i]} // city : Bengaluru
        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=27899f5be4cdd787eb306e01685056a0`)
        obj.temp = result.data.main.temp
        cityObjArray.push(obj)
    }
    let sorted = cityObjArray.sort(function (a,b){return a.temp - b.temp })
    return res.status(200).send({data : sorted})
}

module.exports.getSortedCities = getSortedCities 

let allMemes = async function (req, res) {
    let result = await axios.get(`https://api.imgflip.com/get_memes`) 
    let data= result.data
    return res.status(200).send({msg : data})
}

module.exports.allMemes = allMemes  

let createMemes = async function (req, res) {
    let template_id = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let username = req.query.username
    let password = req.query.password
    let result = await axios.post(`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`) 
    let data= result.data
    return res.status(200).send({msg : data})
}

module.exports.createMemes = createMemes    