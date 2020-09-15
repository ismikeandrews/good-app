import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Cadastro , CadastroCurriculo} from './pages'

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Cadastro" component={Cadastro}/>
                <AppStack.Screen name="CadastroCurriculo" component={CadastroCurriculo}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}