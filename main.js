/**    Segunda pre entrega     **/

  
  // Definir las notas de los estudiantes en un objeto
const notas = {
    "Juan": {
      "matematicas": null,
      "lenguaje": null,
      "ciencias": null
    },
    "Ana": {
      "matematicas": null,
      "lenguaje": null,
      "ciencias": null
    },
    "Pedro": {
      "matematicas": null,
      "lenguaje": null,
      "ciencias": null
    }
  };
  
  // Pedir al usuario que ingrese las notas de cada estudiante y materia
  for (const estudiante in notas) {
    if (notas.hasOwnProperty(estudiante)) {
      for (const materia in notas[estudiante]) {
        if (notas[estudiante].hasOwnProperty(materia)) {
          let notaValida = false;
          let nota = 0;
          while (!notaValida) {
            nota = prompt(`Ingrese la nota de ${materia} para ${estudiante}`);
            if (!isNaN(nota) && Number(nota) >= 10 && Number(nota) <= 70 && Number(nota) % 1 === 0) {
              notaValida = true;
            } else {
              alert("La nota debe ser un número entero entre 10 y 70. Inténtelo de nuevo.");
            }
          }
          notas[estudiante][materia] = parseFloat(nota);
        }
      }
    }
  }
  
  
  // Definir una función para calcular el promedio de una materia
  function calcularPromedioMateria(materia) {
    let sumatoriaNotas = 0;
    let cantidadEstudiantes = 0;
    for (const estudiante in notas) {
      if (notas.hasOwnProperty(estudiante)) {
        const nota = notas[estudiante][materia];
        sumatoriaNotas += nota;
        cantidadEstudiantes++;
      }
    }
    return sumatoriaNotas / cantidadEstudiantes;
  }
 
  
  // Crear un array con los promedios de cada materia
  const promediosMaterias = [
    calcularPromedioMateria("matematicas"),
    calcularPromedioMateria("lenguaje"),
    calcularPromedioMateria("ciencias")
  ];
  
  // Calcular el promedio general
  const promedioGeneral = promediosMaterias.reduce((a, b) => a + b) / promediosMaterias.length;
  
  // Imprimir resultados
  console.log("Promedio de matemáticas:", promediosMaterias[0]);
  console.log("Promedio de lenguaje:", promediosMaterias[1]);
  console.log("Promedio de ciencias:", promediosMaterias[2]);
  console.log("Promedio general:", promedioGeneral);

  
  