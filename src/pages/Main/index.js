import React from 'react';
import { View,Text,Image,FlatList,TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native'
import { products as Produtos} from '../../database/produtos.json';
import Style from './styles' 

function Main() {
    const navigation = useNavigation()
    // criando componente de produto
    const renderizarLista = ({item}) => 
        (
            <TouchableOpacity onPress={ () => {navigateToDescricao(item)}} key={item.id} style = {Style.card}>
                <Text style={Style.texto}>{item.name}</Text>
                <Image 
                    resizeMode='cover'
                    style={Style.image} 
                    source ={{uri:item.image}} 
                />
            </TouchableOpacity>
        )
    // passando parametros para navegação de produtos
    function navigateToDescricao(item){
        const produto = { 
            id:item.id,
            name:item.name,
            description:item.description,
            image:item.image
        }
        navigation.navigate('Descricao',{produto})
    }
    // criação de listagem de produtos
    return (
        <View style = {Style.container}>
            <FlatList 
                numColumns={2} 
                horizontal={false} 
                renderItem={renderizarLista} 
                data={Produtos}
            />  
        </View>      
    )}
export default Main;
