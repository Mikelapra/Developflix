import peliculas from './peliculas.js'

/*3. Haz que en cada sección aparezca la imagen y el título de la pelicula filtrado por el genero */

const accion = peliculas.filter(p => p.genre_ids.find(g => g ==28));

const peliculasAccion = accion.map(pelicula => 
    {return `<div><img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/><li>${pelicula.title}</li></div>`})

document.getElementById("genero-28").innerHTML = peliculasAccion;

const Thriller = peliculas.filter(p => p.genre_ids.find(g => g ==53));
const peliculasThriller = Thriller.map(pelicula => 
    {return `<div><img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/><li>${pelicula.title}</li></div>`})

document.getElementById("genero-53").innerHTML = peliculasThriller;

const Aventura = peliculas.filter(p => p.genre_ids.find(g => g ==12));
const peliculasAventura = Aventura.map(pelicula => 
    {return `<div><img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/><li>${pelicula.title}</li></div>`})

document.getElementById("genero-12").innerHTML = peliculasAventura;
