import React from 'react';
import { Image, StyleSheet } from 'react-native';
import topo from '../../assets/topo.png';

export default function cesta(){
    return(
        <Image source={topo} style={estilo.width}></Image>
    );
}

const estilo = StyleSheet.create({
    
})