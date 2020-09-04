import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    image:{
        width: 90,
        height: 70,
        borderRadius: 10,
    },
    card:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginHorizontal: 40,
        height: 150,
        marginTop: 20,
        borderWidth: 1.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    texto:{
        textAlign:'center',
        color: '#333436'
    }
})
