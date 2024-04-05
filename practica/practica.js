console.log("-----------Elementos----------------")

/*Punto 1*/
let elementoid=document.getElementById('descripcion')
console.log(elementoid)

/*Punto 2*/

let elementoid2=document.querySelector('#descripcion') 
console.log(elementoid2)

/*Punto 3*/
console.log("Punto 3")
let elementoli=document.querySelectorAll('li') 
console.log(elementoli)

/*Punto 4*/

console.log("Hay "+elementoli.length+" cantidad de elementos li en la lista")

/*Punto 5*/

console.log(" ")
console.log("Despliegue de los elementos li")

for (let j=0;j<elementoli.length;j++){
console.log(`El ${j+1} elemento de listas es: `)
console.log(elementoli[j].textContent)}

/*Punto 6*/

document.querySelector("#descripcion").textContent=document.querySelector("#descripcion").textContent+" En el año 2008 la competición fue llevada a cabo en el Reino Unido en la Universidad deReading en donde se presentaron 13 candidatos de los cuales se seleccionaron 6 programasfinalistas: Alice, Brother Jerome, Elbot, Eugene Goostman, Jabberwacky y Ultra Hal. Los seisprogramas tuvieron que interactuar con los 12 jueces manteniendo una conversaciónmediante un computador durante cinco minutos en donde se plantean una serie de preguntascon el fin de determinar si es un computador o un humano. En la edición del 2008 ningunologré pasar el Test de Turing, aunque el ganador de la medalla de bronce fue el programaElbot, que estuvo muy cerca de pasar esta prueba ya que consiguió convencer a 3 de los 12jueces, es decir el 25% de los jueces pensó que estaba conversando con un ser humano.";

/*Punto 7*/
let elemento=document.querySelector('a') 
let texto='Enlace principal'
elemento.innerHTML=texto

/*Punto 8*/

let ol = document.querySelector('ol') 
ol.insertAdjacentHTML('afterend', '<h3>MESES DEL AÑO.</h3><li>Enero</li><li>Febrero</li>    <li>Marzo</li><li>Abril</li><li>Mayo</li><li>Junio</li><li>Julio</li><li>Agosto</li><li>Septiembre</li><li>Octubre</li><li>Noviembre</li><li>Diciembre</li>')



