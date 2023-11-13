import peliculas from './peliculas.js'
console.log(peliculas);

const accion = peliculas.filter((elemento) => elemento.genre_ids.some((elemento) => elemento === 28));
const thriller = peliculas.filter((elemento) => elemento.genre_ids.some((elemento) => elemento === 53));
const aventura = peliculas.filter((elemento) => elemento.genre_ids.some((elemento) => elemento === 12));

const accionID = document.getElementById('genero-28');
const thrillerID = document.getElementById('genero-53');
const aventuraID = document.getElementById('genero-12');

accion.forEach((pelis) =>{
    let poster = 'https://image.tmdb.org/t/p/w500' + pelis.poster_path;
    let hija = document.createElement('div');
    hija.innerHTML = `<img src=${poster} alt="poster" /> ${pelis.original_title}`
    accionID.appendChild(hija);
})

thriller.forEach((pelis)=>{
    let poster = 'https://image.tmdb.org/t/p/w500' + pelis.poster_path;
    let hija = document.createElement('div');
    hija.innerHTML = `<img src=${poster} alt="poster" /> ${pelis.original_title}`
    thrillerID.appendChild(hija);       
})

aventura.forEach((pelis)=>{
    let poster = 'https://image.tmdb.org/t/p/w500' + pelis.poster_path;
    let hija = document.createElement('div');
    hija.innerHTML = `<img src=${poster} alt="poster" /> ${pelis.original_title}`
    aventuraID.appendChild(hija);       
})

console.log(aventuraID);

