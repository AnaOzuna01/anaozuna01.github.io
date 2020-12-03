const URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const ciudades = [];

fetch(URL)
    .then(blob => blob.json())
    .then(data => ciudades.push(...data));

function encontrarCoincidencias(wordToMatch, ciudades) {
    return ciudades.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) ||
            place.state.match(regex) ||
            place.population.match(regex);
    });
}

function mostrarCoincidenciass(e) {
    const matchedArray = encontrarCoincidencias(e.target.value, ciudades);
    const html = matchedArray.map(place => {
        const regex = new RegExp(e.target.value, 'gi');
        const nombreCiudad = place.city.replace(regex,
            `<span class=hl>${e.target.value}</span>`)
        const nombreEstado = place.state.replace(regex,
            `<span class=hl>${e.target.value}</span>`)
        const NumeroPoblacion = place.population.replace(regex,
            `<span class=hl>${e.target.value}</span>`)
        return `
            <label>
                <span class="name">${nombreCiudad}, ${nombreEstado}, ${NumeroPoblacion}</span>
            </label>
        `
    }).join('');
    opciones.innerHTML = html;
}

const busqueda = document.querySelector('.search');
const opciones = document.querySelector('.options');

busqueda.addEventListener('change', mostrarCoincidenciass);
busqueda.addEventListener('keyup', mostrarCoincidenciass);