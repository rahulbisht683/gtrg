import React from 'react'
import {Text,
View,
Image,
TouchableOpacity,
SafeAreaView} from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { dimension } from '../src/utils'
import SystemNavigationBar from "react-native-system-navigation-bar";


export function DrawerContent({navigation, props}) {
   

    return(
        <SafeAreaView
        style={{
            flex : 1,
            backgroundColor : "#4cd4ca",
            
        }}>
        <View
        style ={{
            marginTop : "10%"
        }}
        >
        
        <View
        style={{
            flexDirection : "row",
            justifyContent : "space-between",
            marginHorizontal: "5%",
            marginTop : "7%"
        }}>
        <Text style={{
            fontFamily : "LuckiestGuy-Regular",
            fontSize : 36,
            color : "white",
        }}>Cootz</Text>

        <View
        style ={{
            height : 40,
            width : 40,
            borderRadius : 40/2,
            backgroundColor : "white"
        }}>
        
        </View>
        
        
        </View>

{/* 
//////////////////////////// user Detail View ///////////////////// */}
        <View
        style={{
            flexDirection : "row",
            marginLeft : "5%",
            marginTop : "10%",
            alignItems : "center"
        }}>
        <View
        style={{
            padding : "0.5%",
            backgroundColor : "white",
            borderRadius : 5,
        }}>
            <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
        <Image
        style ={{
            height : dimension.height*0.07,
            width : dimension.width*0.16,
            borderRadius : 5,
        }} source = {require('../assets/Home/image.png')} />
        </TouchableOpacity>
        </View>
        <View
        style ={{
            marginLeft : "5%"
        }}>
        <Text
        style ={{
            fontFamily : "Poppins-Regular",
            fontSize : 14,
            color : "white",
            lineHeight : 15

        }}>Hello</Text>
        <Text
        style ={{
            fontFamily : "Poppins-Regular",
            fontWeight : "600",
            color : "white",
            fontSize : 17,
            
        }}>Andres Holland</Text>
        </View>
        
        
        </View>
        {/*////////// Navigation View////////*/}

        <View
        style={{
            marginTop : "12%",
            marginLeft : "8%"
        }}>

        <TouchableOpacity  onPress={()=> navigation.navigate('Wallet')}>
        <View
        style ={{
            flexDirection : "row",
            alignItems : "center"
        }}>
        <Icon
        style={{
            padding : "3%",
            backgroundColor : "rgba(255, 255, 255, 0.4)",
            borderRadius : 50,
            color : "white",
        }}
         name = "wallet" size = {23}/>
        <Text
        style = {{
            marginLeft : "5%",
            fontFamily : "Poppins-Regular",
            fontSize : 14,
            fontWeight : "600",
            color : "white"
        }}>Wallet</Text>
        </View>
        </TouchableOpacity>


        
        <TouchableOpacity
        style ={{
            marginTop : "4%"
        }}>
        <View
        style ={{
            flexDirection : "row",
            alignItems : "center",
            
        }}>
        <Icon2
        style={{
            padding : "3%",
            backgroundColor : "rgba(255, 255, 255, 0.4)",
            borderRadius : 50,
            color : "white",
        }}
         name = "game-controller" size = {23}/>
        <Text
        style = {{
            marginLeft : "5%",
            fontFamily : "Poppins-Regular",
            fontSize : 14,
            fontWeight : "600",
            color : "white"
        }}>How To Play</Text>
        </View>
        </TouchableOpacity>



        <TouchableOpacity
        onPress={()=> navigation.navigate('Settings')}
        style ={{
            marginTop : "4%"
        }}>
        <View
        style ={{
            flexDirection : "row",
            alignItems : "center",
            
        }}>
        <Icon2
        style={{
            padding : "3%",
            backgroundColor : "rgba(255, 255, 255, 0.4)",
            borderRadius : 50,
            color : "white",
        }}
         name = "settings" size = {23}/>
        <Text
        style = {{
            marginLeft : "5%",
            fontFamily : "Poppins-Regular",
            fontSize : 14,
            fontWeight : "600",
            color : "white"
        }}>Settings</Text>
        </View>
        </TouchableOpacity>



        <TouchableOpacity
        style ={{
            marginTop : "4%"
        }}>
        <View
        style ={{
            flexDirection : "row",
            alignItems : "center",
            
        }}>
        <Icon3
        style={{
            padding : "3%",
            backgroundColor : "rgba(255, 255, 255, 0.4)",
            borderRadius : 50,
            color : "white",
        }}
         name = "currency-usd-circle-outline" size = {23}/>
        <Text
        style = {{
            marginLeft : "5%",
            fontFamily : "Poppins-Regular",
            fontSize : 14,
            fontWeight : "600",
            color : "white"
        }}>Refer And Earn</Text>
        </View>
        </TouchableOpacity>



        <TouchableOpacity
        style ={{
            marginTop : "4%"
        }}>
        <View
        style ={{
            flexDirection : "row",
            alignItems : "center",
            
        }}>
        <Icon2
        style={{
            padding : "3%",
            backgroundColor : "rgba(255, 255, 255, 0.4)",
            borderRadius : 50,
            color : "white",
        }}
         name = "headset" size = {23}/>
        <Text
        style = {{
            marginLeft : "5%",
            fontFamily : "Poppins-Regular",
            fontSize : 14,
            fontWeight : "600",
            color : "white"
        }}>Support</Text>
        </View>
        </TouchableOpacity>



        <TouchableOpacity
        style ={{
            marginTop : "4%"
        }}>
        <View
        style ={{
            flexDirection : "row",
            alignItems : "center",
            
        }}>
        <Icon2
        style={{
            padding : "3%",
            backgroundColor : "rgba(255, 255, 255, 0.4)",
            borderRadius : 50,
            color : "white",
        }}
         name = "chatbox" size = {23}/>
        <Text
        style = {{
            marginLeft : "5%",
            fontFamily : "Poppins-Regular",
            fontSize : 14,
            fontWeight : "600",
            color : "white"
        }}>Feedback</Text>
        </View>
        </TouchableOpacity>



        <TouchableOpacity
        style ={{
            marginTop : "4%"
        }}>
        <View
        style ={{
            flexDirection : "row",
            alignItems : "center",
            
        }}>
        <Icon2
        style={{
            padding : "3%",
            backgroundColor : "rgba(255, 255, 255, 0.4)",
            borderRadius : 50,
            color : "white",
        }}
         name = "ios-sunny" size = {23}/>
        <Text
        style = {{
            marginLeft : "5%",
            fontFamily : "Poppins-Regular",
            fontSize : 14,
            fontWeight : "600",
            color : "white"
        }}>Dark Mode</Text>
        </View>
        </TouchableOpacity>

        </View>
        <View
        style={{
            overflow : "hidden"
        }}>
        <View
        style={{
            height : dimension.height*0.43,
            width : dimension.width*0.93,
            backgroundColor : "rgba(255, 255, 255, 0.3)",
            borderRadius : 1000,
            justifyContent : "flex-end",
            left : dimension.width*-0.2,
            bottom : dimension.height*-0.18
        }}>
        <View
        style ={{
        backgroundColor : "black"
    }}>
        <Text
        style={{
          
            elevation : 2,
        }}>Terms</Text>
        </View>
        
        </View>
        </View>

       

        
        </View>
        </SafeAreaView>

    )




}
