function loadCountry() {
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => displayCountry(data));
}

loadCountry()

const displayCountry = (countries) => {
    const countriesContainer = document.getElementById("countries");
    countries.forEach(country => {
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('thumbnail');

        const img = document.createElement('img');
        img.src = country.flags.svg;
        thumbnailDiv.appendChild(img);
        const h6Tag = document.createElement('h6');
        h6Tag.innerText = country.name.common;
        thumbnailDiv.appendChild(h6Tag);
        countriesContainer.appendChild(thumbnailDiv);
    });
}