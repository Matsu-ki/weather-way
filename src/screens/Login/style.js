import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            backgroundColor: "#F60",
            flex: 1,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
        },

        logo: {
            width: 230,
            height: 100,
            marginBottom: 30,
        },
        
        alert: {
            height: 50,
            fontSize: 18,
            color: "red",
            textAlign: "center",
            marginBottom: 20
        },

        formInput: {
            fontSize: 18,
            borderRadius: 10,
            backgroundColor: "#FFF",
            padding: 20,
            marginBottom: 20,
            width: "100%"
        },

        InputField: {
            color: "#FFF"
        },

        formButton: {
            backgroundColor: "#070A52",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "100%",
        },

        textButton: {
            color: "#FFF",
            fontSize: 24,
            textAlign: "center",
        },

        btnCreate: {
            marginBottom: 10,
        },

        btnCreateText: {
            color: "#FFF"
        },

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 0,
            paddingBottom: 0,
            opacity: 0.9,
          },

          backgroundImage: {
            flex: 1,
            resizeMode: 'cover',
            position: 'absolute',
            width: '100%',
            height: '100%',
          },

          backgroundImageWeather: {
            flex: 1,
            resizeMode: 'cover',
            position: 'absolute',
            width: '100%',
            height: '102%',
          },


          overlay: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Define a cor de fundo semi-transparente
          },
    }
);

export default styles;