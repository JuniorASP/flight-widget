const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: '08:11',
        Destination: 'PUERTO PLATA',
        flight: 'JA 243',
        gate: ' A 01',
        remarks: 'ONE TIME'

    },

    {
        time: '10:11',
        Destination: 'RIO DE JANEIRO',
        flight: 'OX 203',
        gate: ' C 24',
        remarks: 'CANCELLED'

    },

    {
        time: '12:41',
        Destination: 'MEDELLIN',
        flight: 'LX 903',
        gate: ' B 11',
        remarks: 'ONE TIME'

    },

    {
        time: '13:22',
        Destination: 'SANTO DOMINGO',
        flight: 'OB 703',
        gate: ' A 09',
        remarks: 'ONE TIME'

    },

    {
        time: '14:00',
        Destination: 'SAO PAOLO',
        flight: 'EX 603',
        gate: ' B 02',
        remarks: 'DELAYED'

    }


]

const Destinations = ['SAO PAOLO', 'SANTO DOMINGO', 'RIO DE JANEIRO', 'MEDELLIN', 'PUERTO PLATA']
const remarks = ['ON TIME', 'CANCELLED', 'DELAYED']
let hour = 15

function populateTab(){
    for(const flight of flights){
        const tableRow = document.createElement('tr')
        tableBody.appendChild(tableRow)
        
        for(const flightDetail in flight){
            const tableCell = document.createElement('td')
            const word = Array.from(flight[flightDetail])

            for(const [index,letter] of word.entries()){
                const letterElement = document.createElement('div')

                setTimeout(() =>{

                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableCell.appendChild(letterElement)

                },100* index)

                
            }
            tableBody.appendChild(tableCell)
        }
    }
    
}
populateTab()

function generateRandomLetter(){
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
return alphabet.charAt(Math.floor(Math.random()* alphabet.length))

}

 function generateRandomNumber(maxNumber){
    const numbers = '0123456789'
    if(maxNumber){
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random()* newNumbers.length))

    }
return numbers.charAt(Math.floor(Math.random()* numbers.length))

 }

 function generateTime(){

    let displayHour = hour

    if(hour < 24){
        hour++
    }
    if(hour >= 24){
        hour = 1
        displayHour = hour
    }
    if(hour < 10){
        displayHour = '0' + hour
    }

    return displayHour + ':'+ generateRandomNumber(5) + generateRandomNumber()
 }



function shuffleUp(){
    flights.shift()
    flights.push({
        time: generateTime(),
        Destination: Destinations[Math.floor(Math.random()* Destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + ''+ generateRandomNumber() +generateRandomNumber(),
        gate: generateRandomLetter() + ''+ generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random()* remarks.length)]
    })
    tableBody.textContent = ''
    populateTab()
}
setInterval(shuffleUp, 9000)