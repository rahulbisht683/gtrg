import React, {useState} from 'react'
import {Text,
View,Image, ScrollView, StatusBar
} from 'react-native'
import { dimension } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const upcoming = () => {

const dataArray =[
    {
        winningPrice:'2500',
        name:'mario forever United Contest',
        image:'https://image.freepik.com/free-vector/wooden-boat-float-forest-lake-pond-river_107791-7370.jpg'
    },

    {
        winningPrice:'2000',
        name:'mario forever United Contest',
        image:'https://image.freepik.com/free-vector/space-game-background-neon-night-alien-landscape_107791-1624.jpg'
    },

    {
        winningPrice:'3000',
        name:'mario forever United Contest',
        image:'https://image.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg'
    },

    {
        winningPrice:'500',
        name:'mario forever United Contest',
        image:'https://image.freepik.com/free-photo/greet-final-battle-alone-illustration_456031-4.jpg'
    },

    {
        winningPrice:'250',
        name:'mario forever United Contest',
        image:'https://image.freepik.com/free-vector/vector-game-room-with-people-playing-digital-entertainment-modern-esports-concept_33099-1204.jpg'
    },

    {
        winningPrice:'300',
        name:'mario forever United Contest',
        image:'https://image.freepik.com/free-photo/videogamer-winning-first-person-shooter-tournament-using-rgb-keyboard-professional-headphones-pro-player-man-talking-with-other-players-online-game-competition-powerful-computer_482257-3933.jpg'
    },


]

    return(
       <View
       style = {{
           flex : 1,
           backgroundColor: "white",
       }}>

<StatusBar backgroundColor={'#23B4A9'}></StatusBar>
{/* 
////////////////////// card design start ////////////////////// */}

<ScrollView showsVerticalScrollIndicator={false}>
{dataArray.map((item,index) =>

<View style={{
backgroundColor:'#fff',
elevation:2,
marginBottom:5,
width:dimension.width*0.90,

alignSelf:'center',
marginTop:'3%',
overflow:'hidden',
borderRadius:8
}}>

<View style={{
    marginTop:'2%',
    alignSelf:'center'
}}>
    <Image style={{
        borderRadius:10,
        width:dimension.width*0.85,
        height:dimension.height*0.14
    }} source ={{uri:item.image}} />
</View>


<View style={{
    flexDirection:'row',
    overflow:'hidden'
}}>

<View style={{
    width:dimension.width*0.60,
    marginLeft:'3%',
    marginTop:'3%',
    marginBottom:'2%'
}}>
    <Text 
    numberOfLines ={1}
    style={{
        fontFamily:'Poppins-Medium',
        fontWeight:'600',
        fontStyle:'normal',
        fontSize:RFValue(13),
        color:'#A6A6A6'
    }}>{item.name}</Text>
    <Text  style={{
        fontFamily:'Poppins-Medium',
        fontWeight:'600',
        fontStyle:'normal',
        fontSize:RFValue(12),
        color:'#B7B7B7'
    }}>Winning Cash</Text>
    <Text  style={{
        fontFamily:'Poppins-Medium',
        fontWeight:'600',
        fontStyle:'normal',
        fontSize:RFValue(13),
        color:'#2C3590'
    }}>Rs.{item.winningPrice}</Text>
</View>


<LinearGradient
colors={['#FEB800', '#FA7202ff']}
style={{
    width:dimension.width*0.40,
    height:dimension.width*0.40 ,
    borderRadius:300,
    position:'absolute',
    top:'40%',
    left:'65%',
    paddingTop:20,
    
}}
>
<Text style={{
    fontFamily:'LuckiestGuy-Regular',
    color:'#FFFFFF',
    fontSize:RFValue(14),
  textAlign:'center',

    
}}>Start Now</Text>
</LinearGradient>
</View>
</View>
    

    )}

</ScrollView>

{/* 
    ///////////////////////////// card code end //////////////////////// */}
    
       </View>
    )
}
export default upcoming;