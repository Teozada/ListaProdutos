import React from 'react'
import { ScrollView,Text,Image,View } from 'react-native';
import { useRoute } from '@react-navigation/native'
import Style from './style'

function Descricao() {
    const route=useRoute()
    const produto=route.params.produto
    // retornando os valores passados para a variavel e exibindo 
    return (
       <ScrollView style={Style.scroll}>
            <View style={Style.view}>

                <Text style={Style.titulo}>{produto.name}</Text>
                <Image resizeMode='cover' style={Style.imagem} source={{uri:produto.image}}/>
                <Text style={Style.descricao}>{produto.description}</Text>

            </View>
       </ScrollView>
    )
}

export default Descricao;


