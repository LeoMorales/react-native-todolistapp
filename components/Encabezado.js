import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Encabezado = ({ titulo }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{titulo}</Text>
        </View>
    );
};

Encabezado.defaultProps = {
    titulo: 'Lista de tareas',
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        marginTop: 23,
        padding: 15,
        backgroundColor: '#20232a',
    },
    text: {
        color: '#61dafb',
        fontSize: 23,
        textAlign: 'center',
    },
});

export default Encabezado;