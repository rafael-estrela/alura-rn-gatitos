
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Carrinho from './telas/Carrinho';
import Servicos from './telas/Servicos';

const Tab = createBottomTabNavigator();

import { cores } from './estilos';

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: cores.roxo,
            tabBarInactiveTintColor: cores.claro,
            tabBarActiveBackgroundColor: cores.roxo,
            tabBarInactiveBackgroundColor: cores.laranja,
            tabBarIconStyle: {
                display: "none"
            },
            tabBarLabelStyle: {
                fontWeight: "bold",
                fontSize: 16,
                lineHeight: 21,
                width: '100%',
                flex: 1,
                backgroundColor: cores.laranja,
                marginTop: 3,
                paddingTop: 12
            },
            tabBarHideOnKeyboard: true
        }}>
            <Tab.Screen name="Serviços" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>;
}