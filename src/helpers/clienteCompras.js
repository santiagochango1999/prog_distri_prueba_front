import axios from "axios";

const insertar = async (body) => {
    const data=axios.post(`http://localhost:7070/orden/ordenCompras`, body).then(r => r.data);
    console.log(data);
}

const consultarTodo = async () => {
    const data = axios.get(`http://localhost:7070/orden/ordenCompras`).then(r => r.data)
    console.log(data)
    return data
}   

const buscar = async (id) => {
    const data = axios.get(`http://localhost:7070/orden/ordenCompras/${id}`).then(r => r.data)
    console.log(data)
    return data
}

const eliminar = async (id) => {
    const data = axios.delete(`http://localhost:7070/orden/ordenCompras/${id}`).then(r => r.data);
    console.log(data);
}



export const insertarfachada = async (body) => {
    await insertar(body);
}   

export const consultarFachada = async () => {
    return await consultarTodo();
}

export const buscarFachadaf = async (id) => {
    return await buscar(id)
}

export const eliminarFachada = async (id) => {
    await eliminar(id);
}