import peliculas from './peliculas.js'

/*3. Haz que en cada sección aparezca la imagen y el título de la pelicula filtrado por el genero */

const accion = peliculas.filter(p => p.genre_ids.find(g => g ==28) != undefined);
const imagenCompleta = accion.map(imagen => `https://image.tmdb.org/t/p/w500` + imagen.poster_path);
const peliculasAccion = accion.map(pelicula => 
    {return '<li>'+pelicula.title+'</li>' })

document.getElementById("genero-28").innerHTML = peliculasAccion;



const Thriller = peliculas.filter(p => p.genre_ids.find(g => g ==53) != undefined);
const peliculasThriller = Thriller.map(pelicula => 
    {return '<li>'+pelicula.title+'</li>' })

document.getElementById("genero-53").innerHTML = peliculasThriller;

const Aventura = peliculas.filter(p => p.genre_ids.find(g => g ==12) != undefined);
const peliculasAventura = Aventura.map(pelicula => 
    {return '<li>'+pelicula.title+'</li>' })

document.getElementById("genero-12").innerHTML = peliculasAventura;
