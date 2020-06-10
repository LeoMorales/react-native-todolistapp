import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Encabezado from './components/Encabezado'
import ItemLista from './components/ItemLista'
import AgregarTarea from './components/AgregarTarea'
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [todos, setTodos] = useState([
    { id: uuidv4(), tarea: 'Hacer las compras' },
    { id: 'todo-002', tarea: 'Rutina de ejercicio' },
    { id: 'todo-003', tarea: 'Leer un capitulo de un libro' },
    { id: 'todo-004', tarea: 'Escribir artículo' },
    { id: 'todo-005', tarea: 'Terminar trabajo práctico' },
    { id: 'todo-006', tarea: 'Mirar una serie' },
    { id: 'todo-007', tarea: 'Sacar a pasear al perro' },
  ]);

  const borrarTarea = (id, tarea) => {
    //alert(`Borrar ${tarea} [${id}]`);
    setTodos(tareasPrevias => {
      return tareasPrevias.filter(item => item.id !== id);
    });
  };

  const agregarTarea = (tarea) => {
    alert(`Agregar ${tarea}`);
    setTodos(tareasPrevias => {
      return [{ id: uuidv4(), tarea: tarea }, ...tareasPrevias];
  });
  };


  return (
    <View style={styles.container}>
      <Encabezado titulo="Lista de tareas" />
      <AgregarTarea nuevoItem={agregarTarea}/>
      <FlatList
        data={todos}
        renderItem={
          ({ item }) => (
            <ItemLista 
              item={item}
              borrarItem={borrarTarea}

            />
          )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
