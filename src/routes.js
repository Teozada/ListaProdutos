import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Main from './pages/Main';
import Descricao from './pages/Descrição';

const Stack = createStackNavigator()

function Routes(){
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen 
                component={Main} 
                name='Main'
                options={{
                    headerStyle:{
                        backgroundColor: '#DC464B',
                    },
                    headerTintColor: '#333436',
                    headerTitleStyle:{
                        fontSize: 25,
                    },
                    title:'Lista de Produtos'
                }}/>
                <Stack.Screen 
                component={Descricao} 
                name='Descricao'
                options={{
                    headerStyle:{
                        backgroundColor: '#DC464B',
                    },
                    headerTintColor: '#333436',
                    headerTitleStyle:{
                        fontSize: 25,
                    },
                    title:'Informações'
                }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Routes;
