import React from 'react'
import {Text,
View,
TextInput,
TouchableOpacity,
StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { dimension } from '../utils'

const AddCash = () => {
    return(
       <View
       style={{
           flex : 1,
           backgroundColor : "white",
           

       }}>

       <View
       style={{
           backgroundColor : "#4cd4ca",
           height : dimension.height*0.5,
           position : "absolute",
           
       }}>
       
       </View>

       <StatusBar backgroundColor = "white"/>
       <View
       style={{
           
           flexDirection : "row",
          marginLeft : "5%",
           alignSelf : "center",
           marginTop : "4%",
           width : dimension.width,
          
           alignItems : "center"
           

       }}>
       <View
       style={{
        padding : 8,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor :  "rgba(194, 194, 194, 0.2)",
        borderRadius : 100,
        
       }}>
       <Icon2
       style={{
           color : "#4cd4ca"
       }} name = "arrowleft" size ={20}/>
       </View>
       <View
       style={{
          
          width : "80%",
          alignItems : "center",
          
       }}>
       <Text>Add Cash</Text>
       </View>
        </View>



       </View>
    )
}
export default AddCash;