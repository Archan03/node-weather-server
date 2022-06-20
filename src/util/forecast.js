const request = require('request')

const forecast = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q='+ address +'&appid=66662c8f99857d855a7803978ccceba3'

    request({url, json: true},(error,  {body }={}) =>{
        // console.log(error)
        if(error){
            callback(undefined,'Unable to connect!!')

        }
        else if(body.cod == 404){
            callback(undefined,'Unable to find location!!')
        }
        else{
            // console.log( (body.list[0].main.temp-273.15) )
            callback(undefined,'It is currently '+ (body.list[0].main.temp-273.15).toFixed(2) +'. And weather is '  +body.list[0].weather[0].description+'. Today high is '+(body.list[0].main.temp_max-273.15 ).toFixed(2)+' and low is '+(body.list[0].main.temp_min-273.15 ).toFixed(2))
        }
    })
}

module.exports = forecast