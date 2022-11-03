var fetchedData
var selectedCategory

const fetcData = async () => {
    const url = 'https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b'
    await fetch(url)
        .then((response) => response.json())
        .then((data) => fetchedData = data)
        .catch(err => console.log(err))

    var selectCategory = document.getElementById('categoryId');
    renderOptions(fetchedData, selectCategory)
}

fetcData();

