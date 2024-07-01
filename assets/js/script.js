
const tareaInput = document.querySelector("#nuevaTarea");

const contadorTareas = document.querySelector("#contador");
const tareas = [
    {id: 100, nombre: "Seleccionar OA"},
    {id: 101, nombre: "Seleccionar indicadores de evaluación"},
    {id: 102, nombre: "Diseñar instrumento de evaluación"},
    {id: 103, nombre: "Planificar clases"}
];

const btnAgregar = document.querySelector("#agregarTarea");
const listaDeTareas = document.querySelector("#tareas");
const eliminar=(id)=>{
    let tareaIndex = tareas.findIndex((tarea)=> tarea.id === id);
    tareas.splice(tareaIndex,1);
    tareaActual()
}

const tareaActual = ()=>{
    let html = ""
    tareas.forEach((tarea)=>{
        html += `<li>${tarea.nombre} <button onclick="eliminar(${tarea.id})">Eliminar</button></li>`;
    })
    document.querySelector("#contador").innerHTML = `Total tareas: ${tareas.length} `
    listaDeTareas.innerHTML = html
}



btnAgregar.addEventListener("click", ()=>{
   
    let value = document.querySelector ("input").value;
    let nuevaTarea = {id:Date.now(),nombre:value};
    tareas.push(nuevaTarea);
    tareaActual();
    
})

tareaActual ();


/*
function renderTareas() {
    let html = "";
    for (let tarea of tareas) {
        html += `<li>${tarea.nombre} <button onclick="borrar(${tarea.id})">eliminar</button></li>`;
    }
    listaDeTareas.innerHTML = html;
}

function actualizarContador() {
    contadorTareas.textContent = tareas.length;
}

btnAgregar.addEventListener("click", () => {
    const nuevaTarea = { id: Date.now(), nombre: tareaInput.value };
    tareas.push(nuevaTarea);
    tareaInput.value = "";
    renderTareas();
    actualizarContador(); // Actualiza el contador después de agregar una tarea
});

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    renderTareas();
    actualizarContador(); // Actualiza el contador después de eliminar una tarea
}

// Inicializa el contador en 0
actualizarContador(); */

