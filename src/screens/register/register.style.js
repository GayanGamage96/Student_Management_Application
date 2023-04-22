import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%'
    },

    imageContainer: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    regLogo: {
        width: 150,
        height: 150
    },

    formWrapper: {
        paddingHorizontal: 25
    },

    registerText: {
        fontSize: 28,
        fontWeight: 500,
        color: COLORS.primary,
        marginBottom: 40,
        textAlign: 'center'
    },

    inputFiledWrapper: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25

    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

    registerButton: {
        backgroundColor: "#FE7654",
        padding: 12,
        borderRadius: 16,
        marginBottom: 30,
        marginTop: 20
    },

    regbuttonText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        color: 'white'
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
       // marginBottom: 30,
        gap:10
    },

    footerText: {
        color: "#FE7654",
        fontWeight: '700',
        fontSize:16
    },

});

export default styles;
