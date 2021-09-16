import React, { useEffect , useState } from "react";
import {  Text, Image, View,  TouchableOpacity, onPress, PermissionsAndroid} from "react-native"; 
import { dimension } from '../utils'


const Splash =({navigation , onPress})=> {


   

 
//navigation.replace('login');
    useEffect(() => {
        setTimeout(()=> {
            navigation.navigate("TutorialScreen")
        }, 3000)
    },[] )

    return (
        <View  style={{  backgroundColor: "#fff", flex:1}}>
  
            <View style={{  width: "100%",height: "100%",  alignItems: "center", justifyContent:'center',alignContent:'center',
}}>


<Image 
source={require('../../assets/logo.png')}
style={{
    height:dimension.width*0.40,
    width:dimension.width*0.50,
    alignSelf:'center',
    alignItems:'center'
}} />

            {/* <Text  style={{fontSize: 20,  color: "#EC2F55",  fontWeight: "bold"}}  >
             
                </Text>  */}
            </View>
        
        </View>
    
);
}
export default Splash;