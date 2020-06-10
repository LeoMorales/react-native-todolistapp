import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';


const AgregarTarea = ({ nuevoItem }) => {
    const [text, setText] = useState('');
    
    return (
        <View style={styles.nuevaContenedor}>
            <TextInput
                placeholder="Nueva tarea..."
                style={styles.input}
                value={text}
                onChangeText={(texto) => setText(texto)}
            />
            <TouchableOpacity
                style={styles.boton}
                onPress={() => {
                    nuevoItem(text);
                    setText('');
                }}>
                <Text style={styles.botonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    nuevaContenedor: {
        padding: 10
    },
    input: {
        height: 60,
        padding: 8,
        margin: 5,
    },
    boton: {
        backgroundColor: '#61dafb',
        padding: 9,
        margin: 5,
    },
    botonText: {
        color: '#20232a',
        fontSize: 24,
        textAlign: 'center',
    },
});

export default AgregarTarea;
