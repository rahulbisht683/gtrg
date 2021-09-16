import 'react-native-gesture-handler'
import React from 'react'
import {StyleSheet,
Text,
TouchableOpacity,
View,} from 'react-native'
import {dimension} from '../utils'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'






const TabHeader = ({navigation,route}) => {


    return(
        <View
        style = {styles.cointainer}>
       
        <View
        style={{
            alignItems : "center",
            width:dimension.width*0.13,
            height:dimension.width*0.13,
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
             width:dimension.width*0.13,
             height:dimension.width*0.13,
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
        flex:1,
        backgroundColor:'#23B4A9',
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

export default TabHeader;