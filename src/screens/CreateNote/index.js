import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
const db = getFirestore(firebase)

export default function CreateProduct({navigation}){
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [errorCreateProduct, setErrorCreateProduct] = useState(null)

    const validade = () => {
        if(descricao == "" || valor == ""){
            setErrorCreateProduct("Informe o Título e a Anotação!")
        }else{
            setErrorCreateProduct(null)
            createProduct()
        }
    }

    const createProduct = () => {
        const newProduct = addDoc(collection(db, 'products'), {
            descricao: descricao,
            valor: valor,
            data_registro: serverTimestamp()
        });

        navigation.navigate('Tabs')
    }

    const goBack = () =>{
        navigation.navigate('Tabs')
    }

    return(
        <View style={styles.container}>
            {errorCreateProduct != null &&
                <Text style={styles.alert}>{errorCreateProduct}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='Título da Anotação'
                value={descricao}
                onChangeText={setDescricao}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Anotação'
                value={valor}
                onChangeText={setValor}
            />

            <TouchableOpacity
                style={styles.formBtn}
                onPress={validade}
            >
                <Text style={styles.textBtn}>Criar anotação</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.formBtnBack}
                onPress={(goBack)}
            >
                <Text style={styles.textBtnBack}>Voltar</Text>
                
            </TouchableOpacity>
        </View>
    );
}