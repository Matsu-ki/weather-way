/*import { TextInput, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './style';
import firebase from '../../config/firebase'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErroLogin] = useState(null);

    const validate = () => {
        if (email == "" || password == "") {
            setErroLogin("Informe e-mail e senha!")
        } else {
            setErroLogin(null)
            loginFirebase();
        }
    }

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const uid = user.uid
                navigation.navigate('Tabs')
            }
        })
    }, [])

    const loginFirebase = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigation.navigate('Tabs')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErroLogin(errorMessage)
            });
    }

    return (
        <View style={styles.login}>

            <Image style={styles.logo} source={require('../../../assets/logo_achou_white.png')} />

            {errorLogin != null &&
                <Text style={styles.alert}>{errorLogin}</Text>
            }

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
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateUser')}>
                <Text style={styles.btnCreateText}>Criar Usuário</Text>
            </TouchableOpacity>
        </View>
    );
}*/

import { ImageBackground, SafeAreaView, TextInput, Text, Touch, TouchableOpacity, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './style';
import firebase from '../../config/firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import InputField from '../../Input/InputField'
import CustomButton from '../../CustomButton/CustomButton'
import LoginLogo from '../../../assets/logo.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(null);

    const validate = () =>{
        if(email == "" || password == ""){
            setErrorLogin("Informe e-mail e senha!");
        }else {
            setErrorLogin(null)
            loginFirebase();
        }
    }

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid
                navigation.navigate('Tabs');
            }
        })
    }, [])

    const loginFirebase = () =>{
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigation.navigate('Tabs');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorLogin(errorMessage);
          });
    }

    return (
        <ImageBackground style={styles.container}>

          <Image
                source={require('../../../assets/another.jpg')}
                style={styles.backgroundImage}
          />
          <View style={styles.overlay} />
          <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}>
            <Image source={LoginLogo} style={{ height: 300, width: 350}} />
            </View>

            {errorLogin != null &&
                <Text style={styles.alert}>{errorLogin}</Text>
            }
    
            <Text
              style={{
                fontSize: 28,
                fontWeight: '500',
                color: '#000000',
                marginBottom: 30,
              }}>
              Login
            </Text>
    
            <InputField
              label={'Email'}
              value={email}
              onChangeText={setEmail}
              icon={
                <MaterialIcons
                name="person"
                size={20}
                color="#7aeee0"
                style={{marginRight: 5}}
              />
              }
              keyboardType="email-address"
            />
    
            <InputField
              value={password}
              onChangeText={setPassword}
              label={'Senha'}
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


            
            <CustomButton label={"Login"} onPress={validate}/>
    
    
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text style={{color: "#FFF"}}>Não possui conta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
                <Text style={{color: '#bf92de', fontWeight: '700'}}> Registre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      );
    };