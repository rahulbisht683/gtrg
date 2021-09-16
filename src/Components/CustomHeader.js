import 'react-native-gesture-handler'
import React from 'react'
import {StyleSheet,
Text,
TouchableOpacity,
View,} from 'react-native'
import {dimension} from '../utils'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'






const CustomHeader = ({navigation,route}) => {


    return(
        <View
        style = {styles.cointainer}>
       
        <View
        style={{
            alignItems : "center",
            paddingVertical:9,
            paddingHorizontal:9,
            borderRadius:100,
            justifyContent:'center',
            backgroundColor : "rgba(255, 255, 255, 0.25)"
        }}>
        <Icon
        style = {{
            color : "white",
            
        }}
         name = "youtube-play" size = {25}/>
         </View>
         <Text
         style ={{
             marginLeft : 20,
             fontWeight : "bold",
             fontSize : 18,
             color : "#4cd4ca"
         }}>
         Cootz
         </Text>
         <View
         style = {{
             
             backgroundColor : "rgba(255, 255, 255, 0.25)",
             paddingVertical:9,
             paddingHorizontal:10,
             borderRadius:100,
             justifyContent:'center'
         }}>
         <TouchableOpacity
        >
        <Icon
        onPress={()=>navigation.openDrawer()}
        style = {styles.icons}
         name = "bars" size = {24}/>
        </TouchableOpacity>
         </View>

        </View>
    )
}

const styles = StyleSheet.create({

    cointainer: {
        height : dimension.height*0.06,
        
        flexDirection : "row",
        width : dimension.width,
        alignItems : "center",
        paddingHorizontal : "5%",
        position : "absolute",
        left : -16,
        top : 13,
        justifyContent: "space-between"

    },
    icons : {
        color : "white",
        alignSelf:'center'
    }
})

export default CustomHeader;