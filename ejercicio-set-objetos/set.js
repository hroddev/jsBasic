/* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */

const arr = ["Perro", "Gato", "Conejo"]

const nombresFamilia = new Set(arr)
console.log(nombresFamilia)

nombresFamilia.add("Perro")
console.log(nombresFamilia)

nombresFamilia.add("JavaScript")
console.log(nombresFamilia)