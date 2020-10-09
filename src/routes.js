import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Cadastro , CadastroCurriculo, Curriculo, Vagas, Processos, ProcessosVaga } from './pages'

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Cadastro" component={Cadastro}/>
                <AppStack.Screen name="Curriculo" component={Curriculo}/>
                <AppStack.Screen name="CadastroCurriculo" component={CadastroCurriculo}/>
                <AppStack.Screen name="Vagas" component={Vagas}/>
                <AppStack.Screen name="Processos" component={Processos}/>
                <AppStack.Screen name="ProcessosVaga" component={ProcessosVaga}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}