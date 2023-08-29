import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function Cabecalho() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.texto} >GitHub App</Text>
            <Text style={estilos.texto}> Testando API Github - IFAL</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        color: '#fff',
        fontSize: 18,
    },
})