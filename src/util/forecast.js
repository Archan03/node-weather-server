const request = require('request')

const forecast = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q='+ address +'&appid=66662c8f99857d855a7803978ccceba3'

    request({url, json: true},(error,  {body }={}) =>{
        // console.log(error)
        if(error){
            callback('Unable to connect',undefined)

        }
        else if(body.cod == 404){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined,'It is currently '+ body.list[0].main.temp +'. And weather is '  +body.list[0].weather[0].description)
        }
    })
}


module.exports = forecast