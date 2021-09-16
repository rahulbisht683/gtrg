import React , {useState} from 'react'
import {View,
Text,
Image,
Animated,
FlatList,
StatusBar,
SafeAreaView,
TouchableOpacity} from 'react-native'
import { dimension , widthToDp , heightToDp } from '../utils'
import Icons from 'react-native-vector-icons/AntDesign'
import { Easing } from 'react-native-reanimated'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import ImmersiveMode from 'react-native-immersive-mode';

import changeNavigationBarColor, {
    hideNavigationBar,
    showNavigationBar,
  } from 'react-native-navigation-bar-color';





const TutorialScreen = ({navigation,route}) => {

    

const [num , setNum] = useState(0)
const [nav , setNav] = useState("1%")
const [dotW , setDotW] = useState(true)
const [dotWidth , setDotWidth] = useState(new Animated.Value(dimension.width*0.02))
const [dotWidth0 , setDotWidth0] = useState(new Animated.Value(dimension.width*0.2))
const [xValue , setXValue] = useState(new Animated.Value(dimension.height*0.5))
    const Data = [
        {image : require('../../assets/TutorialScreenasset/Frame.png'),
         key :1,},
        {image : require('../../assets/TutorialScreenasset/Frame5.png'),
         key : 2,},

    ]

    const TutorialFlow = () => {
        if (num == 0 && dotW == true ) {
            setDotW(false)
            Animated.timing(xValue,{
                toValue:dimension.height*0.08,
                duration: 600,
                easing : Easing.linear
            }).start();
            Animated.timing(dotWidth,{
                toValue:dimension.width*0.2,
                duration: 1200,
            }).start();
            Animated.timing(dotWidth0,{
                toValue:dimension.width*0.02,
                duration: 1200,
            }).start();
            setNum(1)
        
        } else {
            navigation.navigate("SignUp")
        }
    }

    const DotSize = ()=> {
        
    }

    return(
        <SafeAreaView
        style={{flex : 1,}}>
        <StatusBar backgroundColor = "#4cd4ca"/>
        
        <View
        style ={{
            flex  : 1,

        }}>

        <View
        style={{
            height : dimension.height*0.6,
            width : dimension.width,
            backgroundColor : "#4cd4ca",
            alignItems : "center",
            
        }}>
        <View
        style={{
            height : dimension.width*0.71,
            width : dimension.width*0.71,
            backgroundColor: "rgba(250, 251, 255, 0.2)",
            borderRadius :700/2,
            marginTop : dimension.height*0.07,
            position : "absolute"
    

        }}>
        </View>

        
        <FlatList
        style = {{
            width : dimension.width,
            
        }}
        data = {Data.slice(num,num+1)}
        keyExtractor={item => `key${item.key}`}
        pagingEnabled = {true}
        horizontal
        showsHorizontalScrollIndicator = {false}
        onScroll = {()=>setNum(num+1)}
        renderItem={({item}) => (
        <View
        style={{
            width : dimension.width,
            alignItems : "center"
        }}> 
             <Animated.Image
        style={{
            marginTop : dotW ? dimension.height*0.08 : xValue,
           height : dimension.height*0.32,
           width  : dimension.width*0.6
            
        }}
         source={item.image}  />
    
       
         </View>
        )}></FlatList>
        <View
        style ={{
            flexDirection : "row"
        }}>
        
            
        
        <Animated.View
        
        style={{
            flexDirection : "row",
            backgroundColor : "white",
            marginLeft : 2,
            height : dimension.height*0.004,
            width :  dotWidth0 ,
            borderRadius : 10,
        }}></Animated.View>
        <Animated.View
        
        style={{
            flexDirection : "row",
            backgroundColor : "white",
            marginLeft : 2,
            height : dimension.height*0.004,
            width : dotWidth,
            borderRadius : 10,
        }}></Animated.View>
        
        
        
        </View>
       
        

         <View
         style={{
             marginTop : "5%",
             alignItems : "center",
             
         }}>
         <Text
         style={{
             fontSize : 20,
             fontWeight : "900",
             color : "white"

         }}> Give Your Exams By</Text>
         <Text
         style={{
            fontSize : 20,
            fontWeight : "900",
            color : "white",

        }}>Playing Games</Text>
         </View>


        
        </View>


        <View style={{
            backgroundColor : '#4cd4ca',
            width : dimension.width,
            height : dimension.height*0.4,
            
        
            
            
        }}>
        <TouchableOpacity
        style={{
            
            position  : "absolute",
            left: dimension.width*-0.09,
            top: dimension.height*0.159,
        }}
        onPress={()=> navigation.navigate("SignUp")}>
        <View
        style={{
            backgroundColor : "white",
            height : dimension.width*0.46,
            width  : dimension.width*0.46,
            borderRadius : 800,
            alignItems : "center",
            justifyContent : "center",
            flexDirection : "row",
            elevation  : 20,
            
        }}>
       

        
        <Text
        style = {{
            fontSize  : RFValue(18),
            color : "#2D3690"
            
        }}>Skip</Text>
        
        
        <Icons  name = "arrowright" size = {17}
        style={{
            alignSelf : "center",
            color: "#2D3690",
            marginLeft  : 4,
        }}/>
       


        </View>
        </TouchableOpacity
        
        >


        <TouchableOpacity
        style={{
            position : "absolute",
            top: dimension.height*0.22,
            left  : dimension.width*0.81,}}
        onPress={()=> TutorialFlow()}>
        <View
        style={{
            backgroundColor : "rgba(255, 255, 255, 0.2)",
            height  : dimension.width*0.15,
            width  : dimension.width*0.15,
            borderRadius : 500,
            alignItems  : "center",
            justifyContent : "center",
           
            elevation : 40,
           
            alignSelf : "flex-end",

        }}>
      
        <Text>Next</Text>

        
        </View>
        </TouchableOpacity>
        
        
        </View>







        </View>



        </SafeAreaView>


    )



}

export default TutorialScreen