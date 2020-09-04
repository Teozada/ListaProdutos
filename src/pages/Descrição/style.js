import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    imagem:{
        width: 240,
        height: 220,
        borderRadius: 10,
        marginTop: 50
    },
    titulo:{
        fontSize: 20,
        textAlign:'center',
        color:'#333436',
        fontWeight: 'bold',
        marginTop: 20
    },
    descricao:{
        fontSize:15,
        color:'#333436',
        marginTop: 55,
        marginHorizontal: 10
    },
    view:{
        flex: 1,
        display: 'flex',
        paddingTop: '20%',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    scroll:{
        display:'flex',
        flex:1,
        backgroundColor:'#fff',
    }
})
