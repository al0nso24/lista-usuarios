import { useQuery } from "@tanstack/react-query"
import { obtenerUsuarios } from "../api/usuarios"

export default function ListaUsuarios() {
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey: ["usuarios"],
        queryFn: obtenerUsuarios
    })

    if(isLoading){
        return <p>Cargando usuarios...</p>
    }

    if(isError) return (
        <div>
            <p>Ocurrió un error: {error.message}</p>
            <button onClick={() => refetch()}>Reintentar</button>
        </div>
    );

    return(
        <div>
            {data.map((u) => (
                <p key={u.id}>{u.name} - {u.email}</p>
            ))}
        </div>
    )
}