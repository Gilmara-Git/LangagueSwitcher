import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:  '#202024',
        width: '100%',     
        alignItems: 'center',
        padding: 25
    },
    innerContainer:{
        alignItems: 'center',
      
    },
    textOutputContainer:{
        alignItems: 'center',
     
        
    },
    outputContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
   
    },
    linearTouch:{
        width: 75,      
        alignItems: 'center',
        borderRadius: 8,
        margin: 10,
        padding:4,
       

    },
    buttons:{
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 20

    },
    buttonText:{
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily:  'Nunito_400Regular'
   
    },
    outputGreet:{
        fontSize: 16,
        color: '#FFFFFF',
        marginRight: 5,
        lineHeight: 35,
        fontFamily:  'Nunito_700Bold',
    },
    nameContainer:{
        borderRadius: 8,
        backgroundColor: '#8c8c8f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    outputName:{
        color: '#FFFFFF',
        fontSize: 16,
        padding: 4,
        fontFamily: 'Nunito_700Bold',
        
        
      
    },
    outputDescription:{
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 35,
        fontFamily:  'Nunito_700Bold',
       
    },
    codingLang:{
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',      
        fontFamily: 'Nunito_800ExtraBold_Italic'
        
    },
    heartContainer:{
        marginTop: 10
    },
    language:{
        fontSize: 22, 
        color: '#FFFFFF',
        marginVertical: 50,
        fontFamily: 'Nunito_700Bold'
    },
    iconsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#454546',
        width: '50%',      
        height:100, 
        marginTop: 20,
        borderRadius: 12
    }
});

export default styles;