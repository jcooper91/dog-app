const getDogs = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    if(response.status === 200) {
        const data = await response.json()
         return data.message
    } else {
        throw new Error('Error retrieving data')
    }
}

export { getDogs as default }