export default async function Cliente() {
    const receberAPI = await fetch('../../api/cliente');
    const convertejson = await receberAPI.json();

    return(
        <>
        <ul>{
            convertejson.map((cliente) => (
                <li key={Cliente.id}>
                    {Cliente.id}
                    {Cliente.nome}
                </li>
            ))}
        </ul>
        </>
    )
    
}