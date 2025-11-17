const name = "Alvaro";
let age = 27;

console.log(name + " has " + age + " years old ");

const apellido = "Ruiz";
const año = 2025;

let alive = true;

function saludo (nombre){
    console.log("Hola " + nombre + ", espero que tengas un buen dia.");
}
saludo("Ricardo");

//FUNCTION REGULAR
function alimentos(verdura){
    console.log("La " + verdura + " es muy rica y nutritiva");
}
alimentos ("Espinaca");

//ARROW FUNCTIONS
const chatarra = (fritura) => console.log("La " + fritura + " es insalubre en exceso.");
chatarra("hamburguesa");

//FUNCTION EXPRESSIONS
let division = function (a, b){
    console.log(a/b);
};
division(30, 5);

function magia(hechizo){
    console.log("Acabas de castear " + hechizo);
}
magia("bombarda");

magia ("expelliermus");
magia("ABADA KEDABRA");

magia("CRUCIO");
magia("IMPERIO");

const once = document.querySelector("#once");
const eleven = document.createElement("p");

eleven.textContent = "Dia 11, ahora usando el dom";
eleven.classList.add("siete");

once.appendChild(eleven);