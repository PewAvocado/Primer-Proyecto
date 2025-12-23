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

const doce = document.querySelector("#doce");
const twelve = document.createElement("p");
twelve.textContent = "Dia 12, sigo usando DOM, quizas olvide un ida xd";
twelve.classList.add("twelve");
doce.appendChild(twelve);

const trece = document.querySelector("#trece");
const thirteen = document.createElement("p");
thirteen.textContent = "Dia 13, aunque me sale varios dias, ya estoy algo mas de vuelta";
trece.appendChild(thirteen);

const catorce = document.querySelector('#catorce');
const fourteen = document.createElement("h3");
fourteen.textContent = "Dia catorce, me he saltado varios porque ya no veo neccesaria esta rutina, pero intentare seguir";
catorce.appendChild(fourteen);

const quince = document.querySelector('#quince');
const fifteen = document.createElement("h4");
fifteen.textContent = "Dia 15, 15 15 15, pero ya no hago mucho, me volvi peresozo"
quince.appendChild(fifteen);

const dieciseis = document.querySelector("#dieciseis");
const sixteen = document.createElement("h2");
sixteen.textContent = "Dia 16, paso mucho tiempo pero ya estoy de vuelta, necesito mejorar mucho mis habilkidades de javascript, recordar leer todos los mensajes tambien";
dieciseis.appendChild(sixteen);