import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const ItemLista = ({item, borrarItem}) => {

    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {item.tarea}
                </Text>

                <View style={styles.iconView}>
                    <Text 
                        style={styles.deleteText}
                        onPress={ () => borrarItem(item.id, item.tarea) }>x</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 50,
    },
    deleteText: {
        color: 'firebrick',
        fontSize: 20
    }
});

export default ItemLista;
