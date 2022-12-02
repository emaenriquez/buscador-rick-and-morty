
const contenedor = document.querySelector('.contenedor-card')
const input_buscar = document.querySelector('.input-buscar')
let contenedor_div_element;
let element_name;
let get_data;

const getPersonajes = async () =>{

    try {

        const personajes_rick = await fetch('https://rickandmortyapi.com/api/character')
        const personajes_data = await personajes_rick.json()
        get_data = personajes_data.results

        get_data_personajes(get_data)

    } catch (error) {
        console.log(error)
    }
}
// obtiene la data de los personajes
const get_data_personajes = (personaje_name) =>{
    personaje_name.forEach(item => {
        contenedor_div_element = document.createElement('div')

        element_name = document.createElement('p')
        element_name.innerHTML = `${item.name}`
        element_name.classList.add('nombre_personaje')

        let element_img = document.createElement('img')
        element_img.src = item.image

        let element_tierra = document.createElement('p')
        element_tierra.innerHTML = `${item.origin.name}`

        let element_species = document.createElement('p')
        element_species.innerHTML = `${item.species}`
        
        contenedor_div_element.classList.add('contenedor_div-elementos')
        contenedor_div_element.appendChild(element_img)
        contenedor_div_element.appendChild(element_name)
        contenedor_div_element.appendChild(element_tierra)
        contenedor_div_element.appendChild(element_species) 

        contenedor.appendChild(contenedor_div_element)
    });
}

getPersonajes()

// buscador

input_buscar.addEventListener('keyup',(e)=>{
    let valor = e.target.value
    
    if(e.target.matches('.input-buscar')){
    
    document.querySelectorAll('.nombre_personaje').forEach((item)=>{
        item.textContent.toLowerCase().includes(valor.toLowerCase()) ? 
        contenedor_div_element.classList.remove('ocultar') : contenedor_div_element.classList.add('ocultar') 
    })
    
    }
})


