import React, {useState} from 'react'
import {View,
 Text,
StyleSheet,
SafeAreaView,
StatusBar,Image,Pressable,
TouchableOpacity,FlatList,
ScrollView,
Modal,
TextInput,
ImageBackground,
ImageEditor,} from 'react-native'
import ScratchView from 'react-native-scratch'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { dimension } from '../../utils';
import { RFValue } from 'react-native-responsive-fontsize'

const contest =({navigation , route , onPress})=>{

const dataArray=[
{
image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
name:'Ram Kumar',
amount:'1000',
},                                                   
{
    image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
    name:'Ram Kumar',
    amount:'1000',
    },
    {
        image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
        name:'Ram Kumar',
        amount:'1000',
        },
        {
            image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
            name:'Ram Kumar',
            amount:'1000',
            },        
            {
                image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
                name:'Ram Kumar',
                amount:'1000',
                },            

                {
                    image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
                    name:'Ram Kumar',
                    amount:'1000',
                    },                                                   
                    {
                        image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
                        name:'Ram Kumar',
                        amount:'1000',
                        },
                        {
                            image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
                            name:'Ram Kumar',
                            amount:'1000',
                            },
                            {
                                image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
                                name:'Ram Kumar',
                                amount:'1000',
                                },        
                                {
                                    image:'https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg',
                                    name:'Ram Kumar',
                                    amount:'1000',
                                    },            
                       
]
    return (
    <View style={{
        flex:1,
        backgroundColor:'#fff'
    }}>


<StatusBar backgroundColor={'#fff'}></StatusBar>       


<View style={{
    height:dimension.height*0.35,
    backgroundColor:'#fff'
}}>

{/* 
/////////////////////////////  arrow code ///////////// */}
<View style={{
  flexDirection:'row',
marginTop:'1%',
alignSelf:'center',
width:dimension.width*0.92
}}>

<Pressable onPress={()=> navigation.navigate('LeaderBoard')}>
<View style={{
width:dimension.width*0.12,
height:dimension.width*0.12,
borderRadius:100,
justifyContent:'center',
backgroundColor:"rgba(194, 194, 194, 0.2)",

}}>
  
<Icon style={{alignSelf:'center',}} name="arrow-back" color={'#20B3A8'} size={25}/>
</View>
</Pressable>

<View style={{
  
  width:dimension.width*0.70,
  alignSelf:'center',
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(18),
  fontWeight:'600',
  fontStyle:'normal',
  textAlign:'center'

}}>Contest Winners</Text>
</View>
</View>


{/* 
////////////////////// arrow code end  /////////////////////////////// */}

{/* 
////////////////////////// back shape code start ///////////////////////////// */}

<View style={{
    position:'absolute',
    width:dimension.width*1.5,
    marginLeft:'-25%',
    height:dimension.height*0.08,
    backgroundColor:'#20B0A5',
    top:dimension.height*0.12,
    transform: [{ rotate: '-19deg'}]
    
}}>

</View>



{/* 
////////////////////////// back shape code end ///////////////////////////// */}


{/* 
/////////////////////// image code start /////////////////////////////////// */}

<View style={{
    position:'absolute',
    top:dimension.height*0.09,
    alignSelf:'center',
    width:dimension.width*0.34,
    height:dimension.height*0.17,
    justifyContent:'center',
}}>
    <Image style={{
     resizeMode:'contain',
     width:'100%',
     height: '100%',
    }} source={require('../../../assets/trophy.png')}/>
</View>

<View style={{
    position:'absolute',
    width:dimension.width*0.13,
    height:dimension.width*0.13,
    backgroundColor:'#fff',
    elevation:4,
    borderRadius:100,
    top:dimension.height*0.15,
    left:dimension.width*0.07,
    justifyContent:'center',
    alignItems:'center',
    
}}>
<Image style={{
    width:dimension.width*0.06,
    height:dimension.height*0.04,
    alignSelf:'center'
}} source={require('../../../assets/win1.png')} />
</View>



<View style={{
    position:'absolute',
    width:dimension.width*0.13,
    height:dimension.width*0.13,
    backgroundColor:'#fff',
    elevation:4,
    borderRadius:100,
    top:dimension.height*0.12,
    left:dimension.width*0.78,
    justifyContent:'center',
    alignItems:'center',
    
}}>
<Image style={{
    width:dimension.width*0.06,
    height:dimension.height*0.04,
    alignSelf:'center'
}} source={require('../../../assets/win2.png')} />
</View>

<View style={{
    position:'absolute',
    top:dimension.height*0.28,
  alignSelf:'center'

}}>
    <Text style={{
        fontFamily:'LuckiestGuy-Regular',
        color:'#20B3A8',
        fontWeight:'400',
        fontSize:RFValue(36)
    }}>SSC WINNER</Text>
</View>
{/* 
/////////////////////////// image code end ////////////////////////// */}

</View>


<View style={{
    height:dimension.height*0.65,
    backgroundColor:'#fff'
}}>
{/* 
//////////////// label code start //////////////////////// */}


    <ImageBackground 


    borderRadius={10}
    source={require('../../../assets/label.png')}
    style={{
    width:dimension.width*0.90,
    marginTop:'5%',
    alignSelf:'center',
    padding:3,
    justifyContent:'center',
    alignItems:'center'
    }}>
        

   <View style ={{
width:dimension.width*0.80,
flexDirection:'row',
justifyContent:'space-between'
   }}>    


<View style={{
             width:dimension.width*0.25,
             elevation:10,
             alignSelf:'center',
             justifyContent:'center',
            
        }}>
           <Image style={{
               backgroundColor:'#fff',
               padding:2,
               width:dimension.width*0.15,
               height:dimension.width*0.15,
               borderRadius:100
           }} source={require('../../../assets/user.png')} /> 
        </View>

<View style={{
    width:dimension.width*0.30,
}}>
    <Text style={{
        fontFamily:'LuckiestGuy-Regular',
        fontSize:RFValue(24),
        fontStyle:'normal',
        fontWeight:'400',
        color:'#fff'
    }}>PREET KAUR</Text>
</View>

<View style={{
     width:dimension.width*0.15,
     alignItems:'center'
}}>
    <Text style={{
        fontFamily:'LuckiestGuy-Regular',
        fontSize:RFValue(17),
        fontStyle:'normal',
        fontWeight:'400',
        color:'#fff'
    }}>Rank</Text>
    <Text style={{
        fontFamily:'LuckiestGuy-Regular',
        fontSize:RFValue(18),
        fontStyle:'normal',
        fontWeight:'400',
        color:'#fff'
    }}>#1</Text>
    
</View>

</View>
         </ImageBackground>


{/* 
///////////////////////////////// label code end ///////////////////////////// */}


{/* 
//////////////////////////// Array code start ///////////////////////////// */}


<View style={{
    width:dimension.width*0.90,
    height:dimension.height*0.36,
    backgroundColor:'#fff',
    elevation:5,
    borderRadius:14,
    marginTop:'2%',
    alignSelf:'center'
}}>


{/* 
//////////////////////////  map or scroll data start here //////////////////// */}

<ScrollView showsVerticalScrollIndicator ={false}>
{dataArray.map((item,index)=> 
<View>

<View style={{
    width:dimension.width*0.90,
    height:dimension.height*0.06,
    alignSelf:'center',
    flexDirection:'row',
    marginTop:'3%',
    alignItems:'center',
    justifyContent:'center'
    
}}>

<View style={{
    width:dimension.width*0.20,
}}>
<Image
style={{
    width:dimension.width*0.12,
    height:dimension.height*0.05,
    borderRadius:100
}}
source={{uri:item.image
}}/>
</View>


<View style={{
    width:dimension.width*0.45,
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    color:'#A6A6A6',
    fontWeight:'700',
    fontStyle:'normal'
}}>{item.name}
</Text>
</View>

<View style={{
    
    width:dimension.width*0.20,
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    color:'#20B3AB',
    fontWeight:'700',
    fontStyle:'normal'
}}>{item.amount}
</Text>
</View>
</View>

{/* 
///////////////////////  box code end /////////////////////// */}

{/* 
////////////////////////// borderline /////////////////////////// */}

<View style={{
    borderBottomWidth:1,
    borderBottomColor:'#DCDCDC99',
    marginHorizontal:'4%'
}}></View>

</View>)}
</ScrollView>

</View>

</View>
{/* 
///////////////////////////////// borderline end////////////////// */}


    </View>)
}

export default contest;