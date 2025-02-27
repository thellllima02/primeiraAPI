export default async function Cliente() {
    const receberAPI = await fetch('http://localhost:3000/api/cliente');
    const convertejson = await receberAPI.json();

    return(
        <>
        <ul>{
            convertejson.map((cliente) => (
                <li key={cliente.id}>
                    {cliente.nome}
                    {cliente.endereco}
                    {cliente.cidade}
                </li>
            ))}
        </ul>
        </>
    )
    
}