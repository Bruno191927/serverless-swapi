import axios from 'axios'
const PEOPLE_SWAPI_URL = 'https://r3tjnwa02b.execute-api.us-west-2.amazonaws.com/dev/swapi/getPeople'
const SPECIES_SWAPI_URL = 'https://r3tjnwa02b.execute-api.us-west-2.amazonaws.com//dev/swapi/getSpecies'
test('responsePeople',async() => {
    await axios.get(PEOPLE_SWAPI_URL).then((response) => {
        expect(response.status).toBe(200)
    })
})

test('responseSpecies',async() => {
    await axios.get(SPECIES_SWAPI_URL).then((response) => {
        expect(response.status).toBe(200)
    })
})