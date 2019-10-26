import getDogs from './request';

const dogs = async () => {
    const retriveDogs = await getDogs()
    const allDogs = Object.keys(retriveDogs)
    displayDogList(allDogs)
}

const displayDogList = ((dogList) => {
    let output = ''
    dogList.forEach((dog) => {
        output += `<option value="${dog}">${dog}</option>`
    })
    document.getElementById('dogDropdown').innerHTML = output
})

dogs()