import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './style'
import firebase from '../../config/firebase';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
const db = getFirestore(firebase);

export default function EditProduct({ navigation, route }) {
  const { produto } = route.params;
  const [descricao, setDescricao] = useState(produto.descricao);
  const [valor, setValor] = useState(produto.valor);

  const confirmEdit = async () => {
    const produtoRef = doc(db, 'products', produto.id);
    const updatedData = {
      descricao: descricao,
      valor: valor,
    };

    try {
      await updateDoc(produtoRef, updatedData);
      navigation.navigate('Tabs');
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };

  const goBack = () => {
    navigation.navigate('Tabs');
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.formInput}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descrição"
      />
      <TextInput
        style={styles.formInput}
        value={valor}
        onChangeText={setValor}
        placeholder="Valor"
      />
      <TouchableOpacity
      style={styles.formBtn}
      onPress={confirmEdit}
      >
        <Text style={styles.textBtn}>Confirmar Edição</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.formBtnBack}
      onPress={(goBack)}
      >
        <Text style={styles.textBtnBack}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
