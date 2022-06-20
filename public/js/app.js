
console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input') 
const messageOne = document.querySelector('#msg-1')
const messageTwo = document.querySelector('#msg-2')

// messageOne.textContent = 'JavaScript'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    messageOne.textContent='Loading....'
    messageTwo.textContent = ''

    const location = search.value
    fetch('/weather?address='+location).then((response) =>{
    response.json().then((data)  => {
        if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.address
                messageTwo.textContent = data.forecast
            }
    })
})

})