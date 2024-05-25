// Defino array de peliculas. Esto podria obtenerse de una API mas adelante
const array_peliculas = [
    {
        "titulo": "El Padrino",
        "fecha_estreno": "1972-03-15",
        "descripcion": "La saga épica de la familia Corleone, dirigida por el patriarca Don Vito Corleone. La película sigue la vida de Michael Corleone mientras se sumerge en el mundo del crimen organizado y lucha por mantener el imperio de su familia.",
        "duracion": 175,
        "genero": ["drama", "crimen"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "El Señor de los Anillos: La Comunidad del Anillo",
        "fecha_estreno": "2001-12-19",
        "descripcion": "Basada en la obra maestra de J.R.R. Tolkien, la película sigue a un grupo de nueve compañeros que se embarcan en una búsqueda para destruir un anillo mágico y evitar que caiga en manos del malvado Señor Oscuro Sauron.",
        "duracion": 178,
        "genero": ["fantasía", "aventura", "acción"],
        "imagen": "https://m.media-amazon.com/images/S/pv-target-images/1a4ee89507e9a33c3493ee24b64e56e66b5e48e14a3f707141c6ca0a688320ec.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Forrest Gump",
        "fecha_estreno": "1994-07-06",
        "descripcion": "Forrest Gump, un hombre con un coeficiente intelectual bajo, pero un corazón grande, narra su vida extraordinaria que lo lleva a encontrarse con presidentes, guerras, amor verdadero y la creación del famoso slogan de camisetas.",
        "duracion": 142,
        "genero": ["drama", "comedia"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Matrix",
        "fecha_estreno": "1999-03-31",
        "descripcion": "Un hacker llamado Neo descubre que el mundo en el que vive es una simulación controlada por máquinas inteligentes. Se une a la resistencia para liberar a la humanidad y descubrir su verdadera realidad.",
        "duracion": 136,
        "genero": ["ciencia ficcion", "acción"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "La Lista de Schindler",
        "fecha_estreno": "1993-12-15",
        "descripcion": "Basada en hechos reales, la película cuenta la historia de Oskar Schindler, un empresario alemán que salva a más de mil judíos durante el Holocausto al emplearlos en su fábrica y poner sus vidas por encima del beneficio.",
        "duracion": 195,
        "genero": ["drama", "historia"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "El Rey León",
        "fecha_estreno": "1994-06-15",
        "descripcion": "Esta película animada de Disney sigue la vida del león Simba, quien debe enfrentar su destino como rey de la sabana después de que su padre, Mufasa, es traicionado y asesinado por su tío Scar.",
        "duracion": 88,
        "genero": ["infantil", "aventura", "drama"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "El Gran Hotel Budapest",
        "fecha_estreno": "2014-02-26",
        "descripcion": "El conserje de un famoso hotel europeo y su joven protegido se convierten en cómplices de una trama criminal que involucra el robo de una valiosa pintura renacentista y la lucha por una enorme fortuna familiar.",
        "duracion": 99,
        "genero": ["comedia", "drama"],
        "imagen": "https://hips.hearstapps.com/hmg-prod/images/gran-hotel-budapest-cartel-1513779850.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "El Club de la Pelea",
        "fecha_estreno": "1999-10-15",
        "descripcion": "Un hombre descontento con su vida mediocre forma un club de lucha clandestino con un carismático vendedor de jabón. Pronto se ven envueltos en un submundo oscuro de liberación emocional a través de la violencia.",
        "duracion": 139,
        "genero": ["drama", "suspenso"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "La La Land",
        "fecha_estreno": "2016-12-25",
        "descripcion": "En Los Ángeles, un pianista de jazz y una aspirante a actriz se enamoran mientras persiguen sus sueños en una ciudad conocida por destruir esperanzas y romances. Pero el éxito y el amor pueden ser incompatibles.",
        "duracion": 128,
        "genero": ["romantica", "musical", "drama"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
        "tipo": "pelicula"
    },
    {
        "titulo": "Pulp Fiction",
        "fecha_estreno": "1994-10-14",
        "descripcion": "Esta película entrelaza varias historias de crimen y redención en Los Ángeles. Desde un par de asesinos a sueldo hasta un boxeador en decadencia y una pareja de gánsteres, las vidas de todos se cruzan en un torbellino de violencia y humor negro.",
        "duracion": 154,
        "genero": ["drama", "crimen"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Interestelar",
        "fecha_estreno": "2014-11-05",
        "descripcion": "En un futuro donde la Tierra se está volviendo inhabitable, un grupo de exploradores emprende un viaje a través de un agujero de gusano en busca de un nuevo hogar para la humanidad. Pero el tiempo y el espacio se distorsionan en este viaje cósmico.",
        "duracion": 169,
        "genero": ["ciencia ficcion", "aventura", "drama"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "El Silencio de los Inocentes",
        "fecha_estreno": "1991-02-01",
        "descripcion": "Una joven agente del FBI se alía con un brillante pero perturbado psicópata encarcelado para atrapar a otro asesino en serie. La caza se convierte en un juego mortal de ingenio y supervivencia.",
        "duracion": 118,
        "genero": ["suspenso", "crimen", "drama"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "El Resplandor",
        "fecha_estreno": "1980-05-23",
        "descripcion": "Un hombre acepta un trabajo de cuidador de un hotel aislado durante el invierno con su familia. Pero mientras el hotel se vuelve cada vez más siniestro, su cordura comienza a desmoronarse, llevándolo a un destino aterrador.",
        "duracion": 146,
        "genero": ["terror", "suspenso"],
        "imagen": "https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Titanic",
        "fecha_estreno": "1997-12-19",
        "descripcion": "Una joven aristócrata se enamora de un artista pobre a bordo del Titanic, el lujoso transatlántico que se hunde trágicamente en su viaje inaugural. Su amor se enfrenta a la tragedia mientras luchan por sobrevivir al desastre.",
        "duracion": 195,
        "genero": ["romantica", "drama", "historia"],
        "imagen": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "El Rey Arturo: La Leyenda de la Espada",
        "fecha_estreno": "2017-05-12",
        "descripcion": "Arturo, un joven callejero, descubre su verdadera identidad cuando saca una espada mágica de una roca. Con la ayuda de la resistencia, debe enfrentarse al tirano que mató a su padre y reclamar su derecho de nacimiento al trono.",
        "duracion": 126,
        "genero": ["acción", "aventura", "fantasía"],
        "imagen": "https://m.media-amazon.com/images/S/pv-target-images/6879a12b8d910e32186b3ca136f3f5da77668d03c6cdac926a3c872b9bbc7cf1.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Parasite",
        "fecha_estreno": "2019-05-21",
        "descripcion": "Una familia pobre se infiltra en la vida de una adinerada familia al conseguir empleos en su casa. Pero cuando los secretos de ambas familias salen a la luz, la situación se vuelve cada vez más peligrosa y retorcida.",
        "duracion": 132,
        "genero": ["suspenso", "comedia", "drama"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
        "tipo": "pelicula"
    },
    {
        "titulo": "La Forma del Agua",
        "fecha_estreno": "2017-12-01",
        "descripcion": "En un laboratorio secreto del gobierno, una mujer de limpieza muda se enamora de una criatura anfibia cautiva. Juntos, deben luchar contra fuerzas poderosas y prejuicios sociales para encontrar la libertad y el amor.",
        "duracion": 123,
        "genero": ["fantasía", "romantica", "drama"],
        "imagen": "https://images.cdn3.buscalibre.com/fit-in/360x360/bc/2b/bc2bc8ff4b110376ba8c7273534a4ea5.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Avatar",
        "fecha_estreno": "2009-12-10",
        "descripcion": "En el exuberante planeta Pandora, un exmarine parapléjico se une a la misión de colonización humana y se enamora de la cultura y el pueblo nativo Na'vi. Su lealtad es puesta a prueba cuando se ve atrapado entre dos mundos en guerra.",
        "duracion": 162,
        "genero": ["ciencia ficcion", "aventura", "acción"],
        "imagen": "https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Breaking Bad",
        "fecha_estreno": "2008-01-20",
        "descripcion": "Un profesor de química de secundaria, diagnosticado con cáncer de pulmón terminal, se convierte en fabricante y distribuidor de metanfetaminas para asegurar el futuro financiero de su familia.",
        "duracion": 49,
        "genero": ["drama", "crimen", "suspenso"],
        "imagen": "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg",
        "tipo": "serie"
    },
    {
        "titulo": "Juego de Tronos",
        "fecha_estreno": "2011-04-17",
        "descripcion": "Nobleza y familias luchan por el control del Trono de Hierro en el continente ficticio de Poniente, mientras que antiguos y nuevos enemigos amenazan con destruirlos a todos.",
        "duracion": 57,
        "genero": ["drama", "fantasía", "aventura"],
        "imagen": "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
        "tipo": "serie"
    },
    {
        "titulo": "Stranger Things",
        "fecha_estreno": "2016-07-15",
        "descripcion": "En la década de 1980, un grupo de niños de un pequeño pueblo se encuentra con una niña con poderes sobrenaturales y desentrañan un misterio que involucra experimentos secretos y criaturas de otra dimensión.",
        "duracion": 51,
        "genero": ["ciencia ficcion", "drama", "suspenso"],
        "imagen": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGylal0DCls7T5nbv6VVn1ayU7QWeCsOtZevSNoxiHVwQLy-oUk1GYLmwu3Mr_l9f9cDbs",
        "tipo": "serie"
    },
    {
        "titulo": "La Casa de Papel",
        "fecha_estreno": "2017-05-02",
        "descripcion": "Un grupo de ladrones, liderado por 'El Profesor', lleva a cabo un ambicioso plan para realizar el mayor atraco en la historia de España, asaltando la Fábrica Nacional de Moneda y Timbre.",
        "duracion": 70,
        "genero": ["drama", "crimen", "suspenso"],
        "imagen": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwk0QuiWrfMEopih4s9GkOPu60FVlSnb661crrBZDan5uyz29gCY2IFEh-fgZ-SKZDmHvBiw",
        "tipo": "serie"
    },
    {
        "titulo": "Road House (De profesión: duro)",
        "fecha_estreno": "2024-3-8",
        "descripcion": "Dalton es un exluchador de la UFC en horas bajas que acepta un trabajo como portero en un conflictivo bar de carretera de los Cayos de Florida, sólo para descubrir que este paraíso no es todo lo que parece... Remake de la película de 1989 con Patrick Swayze.",
        "duracion": 114,
        "genero": ["accion", "suspenso"],
        "imagen": "https://image.tmdb.org/t/p/original/wmnVOIaTsGcRpZ9rLv2msbtqi3C.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Matrix Resurrections",
        "fecha_estreno": "2021-12-23",
        "descripcion": "En un mundo compuesto por dos realidades, lo cotidiano y lo oculto tras ella, Thomas Anderson se ve obligado de nuevo a ir tras el conejo blanco. Dicha elección continúa siendo la vía de acceso a Matrix, que esta vez es más poderosa e intrincada que en ocasiones anteriores.",
        "duracion": 147,
        "genero": ["ciencia ficcion", "aventura", "accion"],
        "imagen": "https://image.tmdb.org/t/p/original/dLIwpCTf4QoW01pp85KP9jcfTpu.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Misión: Imposible - Sentencia mortal parte uno",
        "fecha_estreno": "2023-7-13",
        "descripcion": "Ethan Hunt (Tom Cruise) y la IMF emprenden la misión más peligrosa a la que nunca se han enfrentado: rastrear una nueva y aterradora arma que amenaza a toda la humanidad antes de que caiga en las manos de un enemigo todopoderoso y misterioso.",
        "duracion": 163,
        "genero": ["accion", "suspenso"],
        "imagen": "https://image.tmdb.org/t/p/original/83sGKvCv2T2CulYbd40Aeduc7n2.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "John Wick 4 ",
        "fecha_estreno": "2023-03-23",
        "descripcion": "John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.",
        "duracion": 170,
        "genero": ["accion", "crimen", "suspenso"],
        "imagen": "https://image.tmdb.org/t/p/original/mj2Z9HnRSIEk3n7yVPoOY4Uzzfh.jpg",
        "tipo": "pelicula"
    },
    {
        "titulo": "Sobrenatural",
        "fecha_estreno": "2005-09-13",
        "descripcion": "Cuando eran niños, Sam y Dean Winchester, perdieron a su madre debido a una fuerza demoníaca. Su padre les enseño como matar al mal que vive en los rincones obscuros y en las carreteras secundarias de América... Ahora los hermanos Winchester recorren el país luchando contra todo tipo de amenaza sobrenatural.",
        "duracion": 43,
        "genero": ["drama", "misterio", "ciencia ficcion"],
        "imagen": "https://image.tmdb.org/t/p/original/AclV39BzzHNr2vyGpD5yA3am1Na.jpg",
        "tipo": "serie"
    },
    {
        "titulo": "Vikingos",
        "fecha_estreno": "2014-02-27",
        "descripcion": "Ragnar Lothbrok, el héroe más grande de su época. se levanta para convertirse en el rey de las tribus vikingas. Además de ser un guerrero valiente, Ragnar encarna las tradiciones nórdicas de la devoción a los dioses, la leyenda dice que él era un descendiente directo de Odín, el dios de la guerra y los guerreros.",
        "duracion": 46,
        "genero": ["drama", "accion", "aventura"],
        "imagen": "https://image.tmdb.org/t/p/original/uNFSCxeZsZVIQ1TrD6mzu6uMQEb.jpg",
        "tipo": "serie"
    },
    {
        "titulo": "Su Ji and U Ri",
        "fecha_estreno": "2014-03-25",
        "descripcion": "Su Ji es una celebridad en el mundo de la medicina y la televisión, conocida por su belleza y su habilidad como psiquiatra. Sin embargo, su vida perfecta comienza a derrumbarse cuando conoce a U Ri, un médico talentoso y justo que se une al hospital donde ella trabaja",
        "duracion": 30,
        "genero": ["drama", "romantica"],
        "imagen": "https://image.tmdb.org/t/p/original/bGVdZ8nc99GIwCDxmXpGP0oCSzT.jpg",
        "tipo": "serie"
    },
    {
        "titulo": "Los Simpson",
        "fecha_estreno": "1989-12-17",
        "descripcion": "El día a día de una peculiar familia formada por Homero, Marge, Bart, Maggie y Lisa Simpson y otros divertidos personajes de la localidad norteamericana de Springfield.",
        "duracion": 22,
        "genero": ["familia", "animacion", "comedia"],
        "imagen": "https://image.tmdb.org/t/p/original/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg",
        "tipo": "serie"
    },
];
let generosSeleccionados = [];
let tipoSeleccionado = ["pelicula", "serie"];

let peliculasContainer = document.getElementById('peliculas_container');

const renderizarPeliculas = (peliculas) => {
    peliculasContainer.innerHTML = '';  // Limpiar contenedor de películas

    peliculas.forEach(pelicula => {
        const peliculaDiv = document.createElement('div');
        peliculaDiv.classList.add('pelicula_card');

        const tituloH3 = document.createElement('h3');
        tituloH3.textContent = pelicula.titulo;
        peliculaDiv.appendChild(tituloH3);

        const detallesDiv = document.createElement('div');
        detallesDiv.classList.add('detalles');

        const duracionP = document.createElement('p');
        duracionP.classList.add('duracion');
        duracionP.textContent = `Duración: ${pelicula.duracion} min`;
        detallesDiv.appendChild(duracionP);

        const estrenoP = document.createElement('p');
        estrenoP.classList.add('estreno');
        estrenoP.textContent = `Estreno: ${pelicula.fecha_estreno}`;
        detallesDiv.appendChild(estrenoP);

        peliculaDiv.appendChild(detallesDiv);

        const imagenImg = document.createElement('img');
        imagenImg.src = pelicula.imagen;
        imagenImg.alt = `${pelicula.titulo} poster`;
        peliculaDiv.appendChild(imagenImg);

        const descripcionP = document.createElement('p');
        descripcionP.classList.add('descripcion');
        descripcionP.textContent = pelicula.descripcion;
        peliculaDiv.appendChild(descripcionP);

        const generosDiv = document.createElement('div');
        generosDiv.classList.add('generos');

        const generosH5 = document.createElement('h5');
        generosH5.textContent = 'Géneros:';
        generosDiv.appendChild(generosH5);

        pelicula.genero.forEach(genero => {
            const generoP = document.createElement('p');
            generoP.textContent = genero;
            generosDiv.appendChild(generoP);
        });

        peliculaDiv.appendChild(generosDiv);

        if(pelicula.tipo == 'serie'){
            peliculaDiv.classList.add('serie_card')
        }

        // Agregar la película al contenedor
        peliculasContainer.appendChild(peliculaDiv);
    });
}

const handleCheckboxChange = (event) => {
    const checkbox = event.target;
    const genero = checkbox.id;

    // Chequeo si debo agregar/quitar el genero
    if (checkbox.checked) {
        generosSeleccionados.push(genero);
    } else {
        const index = generosSeleccionados.indexOf(genero);
        if (index !== -1) {
            generosSeleccionados.splice(index, 1);
        }
    }

    let peliculasFiltradas = [];
    if(tipoSeleccionado.length==0){
        peliculasFiltradas = [];
    } else {
        peliculasFiltradas = array_peliculas.filter(pelicula =>
            generosSeleccionados.every(genero => pelicula.genero.includes(genero)) &&
            (tipoSeleccionado.length === 0 || tipoSeleccionado.includes(pelicula.tipo))
        );
    }

    // Renderizar las películas filtradas
    renderizarPeliculas(peliculasFiltradas);
}


// EVENTOS
document.querySelectorAll('.generos_container input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckboxChange);
});
document.addEventListener('DOMContentLoaded', () => {
    renderizarPeliculas(array_peliculas);
});

document.getElementById('btn_peliculas').addEventListener('click', (e)=>{
    h1 = e.target;
    h1.classList.toggle('selected');
    if(h1.classList.contains('selected')){
        tipoSeleccionado.push("pelicula");
    } else {
        const index = tipoSeleccionado.indexOf("pelicula");
        tipoSeleccionado.splice(index, 1);
    }
    console.log(tipoSeleccionado)
    // Filtrar las películas segun genero
    let peliculasFiltradas = [];
    if(tipoSeleccionado.length==0){
        peliculasFiltradas = [];
    } else {
        peliculasFiltradas = array_peliculas.filter(pelicula =>
            generosSeleccionados.every(genero => pelicula.genero.includes(genero)) &&
            (tipoSeleccionado.length === 0 || tipoSeleccionado.includes(pelicula.tipo))
        );
    }

    // Renderizar las películas filtradas
    renderizarPeliculas(peliculasFiltradas);
});
document.getElementById('btn_series').addEventListener('click', (e)=>{
    h1 = e.target;
    h1.classList.toggle('selected');
    if(h1.classList.contains('selected')){
        tipoSeleccionado.push("serie");
    } else {
        const index = tipoSeleccionado.indexOf("serie");
        tipoSeleccionado.splice(index, 1);
    }
    console.log(tipoSeleccionado)
    // Filtrar las películas segun genero
    let peliculasFiltradas = [];
    if(tipoSeleccionado.length==0){
        peliculasFiltradas = [];
    } else {
        peliculasFiltradas = array_peliculas.filter(pelicula =>
            generosSeleccionados.every(genero => pelicula.genero.includes(genero)) &&
            (tipoSeleccionado.length === 0 || tipoSeleccionado.includes(pelicula.tipo))
        );
    }

    // Renderizar las películas filtradas
    renderizarPeliculas(peliculasFiltradas);
});
