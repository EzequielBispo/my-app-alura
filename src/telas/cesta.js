import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
const width = Dimensions.get('screen').width;

export default function cesta(){
    return<>
        <Image source={topo} style={estilos.width}></Image>
        <Text style={estilos.titulo}>Detalhe da cesta</Text>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}></Image>
            <Text style={estilos.nomeFazenda}>Jenny Jack Farms</Text>
        </View>
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 7 * width,
        fontFamily: "MontSerrat"  
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        paddingLeft: 12,
        fontFamily: "Montserrat"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "green",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
    
})