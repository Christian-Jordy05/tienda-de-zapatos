// // Guardar tarea
//  let guardarTarea = async (tarea, estadoCheckbox = "incompleto") => {  
//     try { 
//         const response = await fetch("http://localhost:3000/api/task", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 task: tarea,
//                 checkbox: estadoCheckbox
//             })
//         });

//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export default guardarTarea



// export let obtenerTareas = async () => {
//     try {
//         const response = await fetch("http://localhost:3000/api/task", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// }