let express = require('express')
let app = express()

let personas = require('./personas')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'))


app.get('/personas', function (request, response) {
    response.send(personas)

})

app.post('/sumar', function (request, response) {
    let { nombre, apellido, edad } = request.body
    personas.push({ nombre, apellido, edad })
    response.send(personas)
})


app.put('/actualizar', function (request, response) {
    let index = personas.findIndex((persona) => {
        persona.nombre === request.body.nombre
    })
    if (index < 0) {
        response.send("El nombre" + request.body.nombre + "no existe")
    } else {
        personas[index].apellido = request.body.apellido
        personas[index].edad = request.body.edad
        response.send(`${request.body.nombre} ha sido modificado correctamente.`)
    }
})


app.delete('/eliminar', function (request, response) {
    let index = personas.findIndex((persona) => {
        persona.nombre === request.body.nombre
    })
    if (index < 0) {
        response.send("El nombre" + request.body.nombre + "no existe")
    } else {
        personas.splice(index, 1)

        response.send(`${request.body.nombre} ha sido borrado correctamente.`)
    }
})


app.listen(3000);



