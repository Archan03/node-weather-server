
console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input') 
const messageOne = document.querySelector('#msg-1')
const messageTwo = document.querySelector('#msg-2')

// messageOne.textContent = 'JavaScript'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    messageOne.textContent='Loading....'
    const location = search.value
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid=66662c8f99857d855a7803978ccceba3').then((response) =>{
    response.json().then((data)  => {
            
        messageOne.textContent='Loading....'
        messageTwo.textContent=''

        if( data.cod==200){
            messageOne.textContent=data.city.name
            messageTwo.textContent='It is currently '+ (data.list[0].main.temp - 273.15 ).toFixed(2) +'. And weather is '  +data.list[0].weather[0].description
        }
        else{
            messageOne.textContent= data.message
        }
    })
})

})