/*import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateUser({navigation}) {
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    const validate = () => {
        if (nome == "" || telefone == "" || email == "" || password == "") {
            setErrorCreateUser("Preencha todos os campos!");
        } else {
            setErrorCreateUser(null)
            createUser();
        }
    }

    const createUser = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // Após criar o usuário, envia para tela interna
                navigation.navigate('Tabs');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Exibe mensagem de erro em caso de erro
                setErrorCreateUser(errorMessage);
            });
    }

    return (
        <View style={styles.login}>
            {errorCreateUser != null &&
                <Text style={styles.alert}>{errorCreateUser}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.formInput}
                placeholder='Telefone'
                value={telefone}
                onChangeText={setTelefone}
            />
            <TextInput
                style={styles.formInput}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.formButton}
                onPress={validate}
            >
                <Text style={styles.textButton}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    );
}*/

import { ImageBackground, TextInput, Text, Touch, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import firebase from '../../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import InputField from '../../Input/InputField'
import CustomButton from '../../CustomButton/CustomButton'
import LoginLogo from '../../../assets/favor.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import { set } from 'react-native-reanimated';

export default function CreateUser({navigation}){
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    const validate = () =>{
        if(nome == "" || telefone == "" || email == "" || password == ""){
            setErrorCreateUser("Preencha todos os campos");
        } else {
            setErrorCreateUser(null)
            createUser();
        }
    }

    const createUser = () =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Tabs');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorCreateUser(errorMessage);
        });
    }

    return (
        <ImageBackground style={styles.container}>

          <Image
                source={require('../../../assets/night.jpg')}
                style={styles.backgroundImage}
          />
          <View style={styles.overlay} />
          <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}>
            <Image source={LoginLogo} style={{ height: 300, width: 350}} />
            </View>
    
            <Text
              style={{
                fontSize: 28,
                fontWeight: '500',
                color: '#FFF',
                marginBottom: 30,
              }}>
              Registrar
            </Text>

            <InputField
              label={'Nome'}
              value={nome}
              onChangeText={setNome}
              icon={
                <MaterialIcons
                name="person"
                size={20}
                color="#7aeee0"
                style={{marginRight: 5}}
              />
              }
            />

            <InputField
              label={'Telefone'}
              value={telefone}
              onChangeText={setTelefone}
              icon={
                <MaterialIcons
                name="call"
                size={20}
                color="#7aeee0"
                style={{marginRight: 5}}
              />
              }
            />
    
            <InputField
              label={'Email'}
              value={email}
              onChangeText={setEmail}
              icon={
                <MaterialIcons
                name="email"
                size={20}
                color="#7aeee0"
                style={{marginRight: 5}}
              />
              }
              keyboardType="email-address"
            />
    
            <InputField
              label={'Senha'}
              value={password}
              onChangeText={setPassword}
              icon={
                <Ionicons
                name="ios-lock-closed-outline"
                size={20}
                color="#7aeee0"
                style={{marginRight: 5}}
              />
              }
              inputType="password"
            />
            
            <CustomButton label={"Registrar"} onPress={validate}/>
    
    
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text style={{color: "#FFF"}}>Voltar ao</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{color: '#ffff00', fontWeight: '700'}}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
    );
}