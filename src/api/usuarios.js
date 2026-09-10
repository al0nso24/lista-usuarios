export async function obtenerUsuarios() {
    const r = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!r.ok){
        throw new Error("Error al obtener los usuarios");
    }
    return r.json();
}