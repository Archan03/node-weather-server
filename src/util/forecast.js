const request = require('request')

const forecast = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q='+ address +'&appid=66662c8f99857d855a7803978ccceba3'
    const callbackString={}
    request({url, json: true},(error,  {body }={}) =>{
        // console.log(error)
        if(error){
            callback('Unable to connect!!',undefined)

        }
        else if(body.cod == 404){
            callback('Unable to find location!!',undefined)
        }
        else{
            callbackString.value1= ('It is currently '+ (body.list[0].main.temp-273.15).toFixed(2) +' in '+body.city.name+' . And weather is '  +body.list[0].weather[0].description+'. Today high is '+(body.list[0].main.temp_max-273.15 ).toFixed(2)+' and low is '+(body.list[0].main.temp_min-273.15 ).toFixed(2))
            callbackString.value2=body.city.name
            callback(undefined,callbackString)
        }
    })
}

module.exports = forecast