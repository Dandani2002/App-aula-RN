import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
    fontSize:30,
        fontWeight: 'bold',
    },

    logo:{
        width: 320,
        height:80,
    },
    input:{
        width:300,
        height:50,
        borderColor:'#ccc',
        borderWidth:1,
        marginTop:20,
        padding:10,
    },
    buttonContainer:{
        width:'90%',
        height: 20,
        paddingTop:20,
    },
    loginButton:{
        width: '50%',
    }
});

export default styles;