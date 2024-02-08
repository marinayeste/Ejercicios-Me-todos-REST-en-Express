fetch('/personas').then((response) => response.json()).then((data) => {
    data.forEach(persona => {
        console.log(persona)
        document.getElementById('lista').innerHTML += `<div><h3>${persona.nombre}</h3><ul><li>${persona.apellido}</li><li>${persona.edad}</li></ul></div>`
    })


})

