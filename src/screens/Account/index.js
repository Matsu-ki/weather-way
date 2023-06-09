import { Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native'
import firebase from '../../config/firebase'
import { getAuth, signOut } from "firebase/auth";
import styles from './style';

export default function Account({navigation}) {
    const signOutFirebase = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (

        <View style={styles.container}>
        <TouchableOpacity
                style={styles.formBtn}
                onPress={signOutFirebase}
            >
                <Text style={styles.textBtn}>Sair</Text>
            </TouchableOpacity>
            </View>
    );
}


/**<View style={styles.container}>
        <TouchableOpacity
                style={styles.formBtn}
                onPress={signOutFirebase}
            >
                <Text style={styles.textBtn}>Sair</Text>
            </TouchableOpacity>
            </View> */