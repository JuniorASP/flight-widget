const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: '08:11',
        Destination: 'PUERTO PLATA',
        flight: 'OX 203',
        gate: ' A 01',
        remarks: 'ONE TIME'

    },

    {
        time: '10:11',
        Destination: 'RIO DE JANEIRO',
        flight: 'OX 203',
        gate: ' A 01',
        remarks: 'CANCELLED'

    },

    {
        time: '12:41',
        Destination: 'MEDELLIN',
        flight: 'OX 203',
        gate: ' A 01',
        remarks: 'ONE TIME'

    },

    {
        time: '13:22',
        Destination: 'SANTO DOMINGO',
        flight: 'OX 203',
        gate: ' A 01',
        remarks: 'ONE TIME'

    },

    {
        time: '14:00',
        Destination: 'SAO PAOLO',
        flight: 'OX 203',
        gate: ' A 01',
        remarks: 'DELAYED'

    }


]

function populateTab(){
    for(const flight of flights){
        const tableRow = document.createElement('tr')
        tableBody.appendChild(tableRow)
        
        for(const flightDetail in flight){
            const tableCell = document.createElement('td')
            const word = Array.from(flight[flightDetail])

            for(const letter of word){
                const letterElement = document.createElement('div')
                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableBody.appendChild(letterElement)
            }
            tableBody.appendChild(tableCell)
        }
    }
    
}
populateTab()