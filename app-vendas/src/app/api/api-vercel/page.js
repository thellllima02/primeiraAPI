import { Ultra } from "next/font/google";

export default async function Produtos(){
    const receberAPI = await fetch('https://api.vercel.app/products');
    const convertejson = await receberAPI.json();

    return (
        <>
        <ul>{
            convertejson.map((produto) => (
                <li key={produto.id}>
                    {produto.name}
                    {produto.price}
                </li>
            ))}
        </ul>
        </>
    )
}