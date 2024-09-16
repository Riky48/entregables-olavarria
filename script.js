const apiurl = "https://rickandmortyapi.com/api/character";

const fetchPersonajes = async() => {

    try {

        // hacer soli de la data
        const respuesta = await fetch (apiurl);


        //verificar la solicitud
        if (!respuesta.ok) {
            throw new Error("Errorrrr en la reeed");


        }
        // convertir la respuesta en jason
        const data = await respuesta.json();

        //obtener el contenedor donde se muestran los datos

        const contenedor = document.getElementById('contenedor');


        // almacenar el html
        let contenidoHtml = '';

        //for each para recorrer datos
        data.results.forEach(character => {

            //generar el html para el personaje 
            contenidoHtml += `
                <div>
                    <h2>${character.name}</h2>
                    <img src="${character.image}" alt="${character.name}" />
                    <p>Estado: ${character.status}</p>
                </div>
            `;
            
        });
        //inserto el html generado en el contenido
        contenedor.innerHTML = contenidoHtml;

    } catch (error) {
        console.error("hubo alto drama con la soli: ", error);
    }

    
}


//llamar la funcion para obtener datos
fetchPersonajes();




