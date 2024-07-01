const tareaInput = document.querySelector("#nuevaTarea");
        const contadorTareas = document.querySelector("#contador");
        const tareas = [
            {id: 100, nombre: "Seleccionar OA", realizada:false},
            {id: 101, nombre: "Seleccionar indicadores de evaluación", realizada: false},
            {id: 102, nombre: "Diseñar instrumento de evaluación", realizada: false},
            {id: 103, nombre: "Planificar clases", realizada:false}
        ];

        const btnAgregar = document.querySelector("#agregarTarea");
        const listaDeTareas = document.querySelector("#tareas");

        const actualizar = (id) => {
            let tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
            tareas[tareaIndex].realizada = !tareas[tareaIndex].realizada;
            let tareasRealizadas = tareas.filter(tarea => tarea.realizada == true);
            document.querySelector("#realizadas").innerHTML = `Tareas Realizadas: ${tareasRealizadas.length}`;
            tareaActual();
        }

        const eliminar = (id) => {
            let tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
            tareas.splice(tareaIndex, 1);
            tareaActual();
        }

        const tareaActual = () => {
            let html = "";
            tareas.forEach((tarea) => {
                html += `
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-md-2">ID: ${tarea.id}</div>
                            <div class="col-md-4">${tarea.nombre}</div>
                            <div class="col-md-2">
                                <input type="checkbox" onclick="actualizar(${tarea.id})" ${tarea.realizada ? 'checked' : ''}>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-danger btn-sm" onclick="eliminar(${tarea.id})">Eliminar</button>
                            </div>
                        </div>
                    </li>`;
            });
            document.querySelector("#contador").innerHTML = `Total tareas: ${tareas.length}`;
            listaDeTareas.innerHTML = html;
        }

        btnAgregar.addEventListener("click", () => {
            let value = tareaInput.value.trim();
            if (value) {
                let nuevaTarea = {
                    id: Date.now(),
                    nombre: value,
                    realizada: false,
                };
                tareas.push(nuevaTarea);
                tareaInput.value = ""; 
                tareaActual();
            }
        });

        tareaActual();


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

