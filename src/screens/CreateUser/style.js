import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            padding: 30,
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },

        alert: {
            fontSize: 18,
            textAlign: "center",
            color: "#F60",
            marginBottom: 20
        },

        formInput: {
            fontSize: 18,
            borderRadius: 10,
            backgroundColor: "#DDD",
            padding: 20,
            marginBottom: 20,
            width: "100%"
        },

        formButton: {
            backgroundColor: "#090A52",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "100%"
        },

        textButton: {
            fontSize: 24,
            textAlign: "center",
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

          overlay: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Define a cor de fundo semi-transparente
          },

          teste: {
            flexDirection: 'row',
            borderBottomColor: '#FFF',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }
    }
)

export default styles;