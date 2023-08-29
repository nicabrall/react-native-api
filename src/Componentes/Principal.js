import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image, Alert } from "react-native";
import { buscaUsuario } from "../Servicos/buscaUsuario";

export function Principal() {
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState({});

    async function busca() {
        const resultado = await buscaUsuario(nome)
        console.log(resultado)
        setNome('')
        if (resultado) {
            setUsuario(resultado)
        }
        else {
            Alert.alert('Usuario não encontrado')
            setUsuario({})
        }
    }
    return (
        <View style={estilos.container}>
            {
                usuario.data?.name &&
                <>
                    <Image style={estilos.imagem} source={{ uri: usuario.data?.avatar_url }} />
                    <View style={estilos.dados}>
                        <Text style={estilos.texto}> Nome: {usuario.data?.name}</Text>
                        <Text style={estilos.texto}> Seguidores: {usuario.data?.followers} </Text>
                    </View>
                </>
            }
            <View>
                <TextInput style={estilos.textoInput} placeholder="Digite o nome do usuário" value={nome} onChangeText={setNome} />
                <Button title="Buscar" onPress={busca}></Button>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        color: '#fff',
    },
    dados: {
        alignItems: 'center',
        borderColor: '#fff',
    },
    imagem: {
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    textoInput: {
        borderWidth: 1,
        height: 40,
        width: 300,
        margin: 8,
        backgroundColor: '#fff'
    }
})