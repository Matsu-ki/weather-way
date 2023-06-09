import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './src/screens/Login/';
import CreateUser from './src/screens/CreateUser/';
import CreateNote from './src/screens/CreateNote';
import Home from './src/screens/Home/';
import Wheater from './src/screens/Weather';
import Account from './src/screens/Account/';
import AboutApp from './src/screens/AboutApp/';
import { MaterialIcons } from "@expo/vector-icons"
import EditDescription from "./src/screens/EditDescription/EditDescription";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#F60' }, //Cor de de fundo do topo
                    headerTintColor: '#FFF', // Cor da fonte no topo
                    headerTitleAlign: 'center' // Alinhamento do texto
                }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="CreateUser" component={CreateUser} options={{ headerShown: false }} />
                <Stack.Screen name="CreateProduct" component={CreateNote} options={{ headerShown: false }} />
                <Stack.Screen name="EditDescription" component={EditDescription} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;
                    if(route.name == "Início"){
                        iconName = "notes";
                    }else if(route.name == "Clima"){
                        iconName = "public";
                    }else if (route.name == "Sobre"){
                        iconName = "info";
                    }else if(route.name == "Conta"){
                        iconName = "account-circle";
                    }
                    return <MaterialIcons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: "#16d1e1", //Cor de ícones ativos
                tabBarInactiveTintColor: "#595a7d", //Cor de ícones inativos
                tabBarStyle: {backgroundColor: "#292a4c"}, //Cor de fund da Tab Navigator
                headerShow: true, // Exibição do cabecalho da página interna
                headerTintColor: "#FFF", //Cor do texto do topo
                headerTitleAlign: "center", //alinhamento do texto do topo
                headerStyle: {backgroundColor: '#292a4c'} //Cor de fundo do topo
            })}
        >
            <Tab.Screen name="Início" component={Home}/>
            <Tab.Screen name="Clima" component={Wheater}/>
            <Tab.Screen name="Conta" component={Account}/>
        </Tab.Navigator>
    );
}

