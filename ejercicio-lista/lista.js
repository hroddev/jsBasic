/* Enunciado del ejercicio:

Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) */

let contacto = [
    "Hector Rodriguez", 
    42, 
    true, 
    "1980/10/13", {
        titulo: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        autor: 'Robert C. “Uncle Bob” Martin',
        fecha: '2008/08/01',
        url: 'https://www.amazon.com/'
    }
]

console.log(contacto)