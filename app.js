var contenido = document.querySelector('#contenido')

function traer() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => {
            console.log(data) F


        })
}