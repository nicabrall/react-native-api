import { api } from "./api";

export async function buscaUsuario(nome){
    try{
        const resultado = await api.get(`/users/${nome}`)
        return resultado
    }catch (erro){
        console.log(erro)
        return('')
    }
}