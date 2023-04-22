import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    imageContainer: {
        marginBottom: 30
    },

    coverImage: {
        width: '100%',
        height: 200,
      
    },

    loginText:{
        fontSize:25,
        color:COLORS.primary,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:30
    },

    inputFieldWrapper: {
        paddingHorizontal: 25
    },

    formInputWrapper: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },

    textInput: {
        flex: 1,
        paddingVertical: 0
    },

    loginButton: {
        backgroundColor: "#FE7654",
        padding: 12,
        borderRadius: 16,
        marginBottom: 30,
        marginTop:20
    },

    loginButtonText:{
        textAlign:'center',
        fontWeight:'700',
        fontSize:18,
        color:'white'
    },

    textStyle:{
        textAlign:'center',
        color:"#FE7654",
        marginBottom:30
    },

    googleIconButton:{
        alignItems:'center',
        marginBottom:30
    },

    googleImage:{
        width:24,
        height:24
    },

    footer:{
        flexDirection:'row',
        gap:5,
        justifyContent:'center',
        marginBottom:30
    },

    footerText:{
        color:"#FE7654",
        fontWeight:'700'
    }
});


export default styles;