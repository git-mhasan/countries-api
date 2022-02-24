function loadCountry() {
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => displayCountry(data));
}

loadCountry()

const displayCountry = (countries) => {
    const countriesContainer = document.getElementById("countries");
    countries.forEach(country => {
        // const thumbnailDiv = document.createElement('div');
        // thumbnailDiv.classList.add('thumbnail');

        // const img = document.createElement('img');
        // img.src = 
        console.log(country.name.common);

    });
}