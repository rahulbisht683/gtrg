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
ImageBackground,} from 'react-native'
import ScratchView from 'react-native-scratch'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { dimension } from '../utils';
import { RFValue } from 'react-native-responsive-fontsize'


const LeaderBoard =({navigation,route,onPress}) => {

const [rank , setRank] = useState(5);

    const UserRank = [{
        rank : "1st",
        price: "2500",
        marks:'1st',
        name:'ramu',
    },
    {
        rank : "2nd",
        price: "2000",
        marks:'2st',
        name:'shyam',
    },
    {
        rank : "3rd",
        price: "1800",
        marks:'3rd',
        name:'pinki',
    },
    {
        rank : "4th",
        price: "1200",
        marks:'1st',
        name:'tinku',
    },
    {
        rank : "5th",
        price: "800",
        marks:'5th',
        name:'prince',
    },
    {
        rank : "6th",
        price: "700",
        marks:'6th',
        name:'anish',
    },
    {
        rank : "7th",
        price: "400",
        marks:'7th',
        name:'rahul',
    },
    {
        rank : "8th",
        price: "200",
        marks:'8th',
        name:'rohit',
    },
    {
        rank : "9th",
        price: "2500",
        marks:'9th',
        name:'ram',
    },
    {
        rank : "10th",
        price: "2000",
        marks:'10th',
        name:'shyam',
    },
    {
        rank : "11th",
        price: "1800",
        marks:'11th',
        name:'pinki kumari',
    },
    {
        rank : "12th",
        price: "120",
        marks:'12th',
        name:'tinku raja',
    },
    {
        rank : "5th",
        price: "800",
        marks:'5th',
        name:'prince',
    },
    {
        rank : "6th",
        price: "700",
        marks:'6th',
        name:'anish',
    },
    {
        rank : "7th",
        price: "400",
        marks:'7th',
        name:'rahul',
    },
    {
        rank : "8th",
        price: "200",
        marks:'8th',
        name:'rohit',
    },


    ]
    
    return(
        <View 
        style={{
            flex : 1,
            backgroundColor:'#fff'
        }}>
<StatusBar backgroundColor={'#fff'}></StatusBar>       

{/* 
/////////////////////////////  arrow code ///////////// */}
<View style={{
  flexDirection:'row',
marginTop:'5%',
alignSelf:'center',
width:dimension.width*0.92
}}>

<Pressable onPress={()=> navigation.navigate('MyTabs')}>
<View style={{
width:dimension.width*0.12,
height:dimension.width*0.12,
borderRadius:100,
backgroundColor:"rgba(194, 194, 194, 0.28)",
justifyContent:'center'
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

}}>LeaderBoard</Text>
</View>
</View>


{/* 
//////////////////////////////// star code start /////////////////////////////// */}

<View style={{
    flexDirection:'row',
    alignSelf:'center',
    position:'absolute',
    top:dimension.height*0.17
}}>
    <View>
    <ImageBackground style={{
        width:dimension.width*0.18,
        justifyContent:'center',
        alignItems:'center',
        height:dimension.height*0.09
    }} source={require('../../assets/s1.png')} >

<View style={{
    alignSelf:'center',
    
}}>
        <Image style={{
            width:dimension.width*0.08,
            height:dimension.height*0.04
        }} source={require('../../assets/s3.png')} />
           </View>
    </ImageBackground>
 
</View>


<View style={{}}>
<ImageBackground style={{
        width:dimension.width*0.32,
        height:dimension.height*0.16,
        top:dimension.height*-0.06,
        justifyContent:'center',
        alignItems:'center'
    }} source={require('../../assets/s2.png')} >
        
<View style={{
}}>
        <Image style={{
            width:dimension.width*0.16,
            height:dimension.height*0.08
        }} source={require('../../assets/s3.png')} />
           </View>
    </ImageBackground>
</View>


<View>
<ImageBackground style={{
        width:dimension.width*0.18,
        justifyContent:'center',
        alignItems:'center',
        height:dimension.height*0.09
    }} source={require('../../assets/s1.png')} >

<View style={{
    alignSelf:'center',
    
}}>
        <Image style={{
            width:dimension.width*0.08,
            height:dimension.height*0.04
        }} source={require('../../assets/s3.png')} />
           </View>
    </ImageBackground>
</View>
</View>


{/* 
/////////////////////////// star code end ////////////////////////////////// */}

{/* 
////////////// label code start //////////////////////// */}



 
<View style={{
elevation:20,
top:dimension.height*0.34,
position:'absolute',
    alignSelf:'center',
}}>


    <ImageBackground borderRadius ={5} style={{
        width:dimension.width*0.90,
        padding:4,
        justifyContent:'center',
        alignItems:'center'
    }} source={require('../../assets/label.png')}>
        <View style={{
            width:dimension.width*0.80,
            flexDirection:'row',
            justifyContent:'space-between',
            alignSelf:'center'
        }}>

<View>
            <Text style={{
                fontFamily:'LuckiestGuy-Regular',
                color:'#fff',
                fontSize:RFValue(23),
                fontWeight:'400',
                textAlign:'center'
            }}>YOU WON</Text>
            </View>
            

        <View>
            <Text style={{
                fontFamily:'LuckiestGuy-Regular',
                color:'#fff',
                fontSize:RFValue(23),
                fontWeight:'400',
                textAlign:'center'
            }}>#{rank}</Text>
            </View>
        </View>
        <View style={{
             elevation:30,
             position:'absolute',
             alignSelf:'center',
             marginBottom:'18%'
        }}>
           <Image style={{
               backgroundColor:'#fff',
               padding:2,
               borderRadius:10,
               width:dimension.width*0.15,
               height:dimension.width*0.15,
           }} source={{uri:'https://image.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg'}} /> 
        </View>
    </ImageBackground>
</View>

{/* 
/////////////////////// end label code ////////////////////// */}

{/* 
/////////////////////// shape code start /////////////////// */}

<View style={{
    position:'absolute',
    height:dimension.height*0.7,
    width:dimension.width,
    top:dimension.height*0.37,
    borderRadius:40,
    backgroundColor:'#20B3A8'
}}>

{/* `
///////////////////////// Rank Start code ///////////////////////////// */}


<View style={{
    width:dimension.width*0.90,
    height:dimension.height*0.5,
    borderRadius:20,
    backgroundColor:'#fff',
    marginTop:'9%',
    alignSelf:'center',
    elevation:2,
}}>

<View style={{
    flexDirection:'row',
    marginTop:'3%',
    width:dimension.width*0.83,
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<View style={{
    width:dimension.width*0.30,
    
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontWeight:'700',
    fontStyle:'normal'
}}>Name</Text>
</View>

<View style={{
      width:dimension.width*0.17,
    
}}>
<Text
style={{
    
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontWeight:'700',
    fontStyle:'normal'
}}
>Rank</Text>
</View>

<View style={{
    
    width:dimension.width*0.17,
    
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontWeight:'700',
    fontStyle:'normal'
}}>Amount</Text>
</View>

<View style={{
    
    width:dimension.width*0.17,
    
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontWeight:'700',
    fontStyle:'normal'
}}>Marks</Text>
</View>
</View>

{/* //////////////////////// scrollview and map data start ///////////////////// */}

<ScrollView
showsVerticalScrollIndicator={false}
>
{UserRank.map((item,index) => ( 
<View key={index}>

<View style={{
    flexDirection:'row',
    marginTop:'2%',
    marginBottom:'2%',
    width:dimension.width*0.83,
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<View style={{
    width:dimension.width*0.30,
    
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontWeight:'700',
    color:'#A7A7A7',
    fontStyle:'normal'
}}>{item.name}</Text>
</View>

<View style={{
      width:dimension.width*0.17,
    
}}>
<Text
style={{
    
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontWeight:'700',
    color:'#A7A7A7',
    fontStyle:'normal'
}}
>{item.rank}</Text>
</View>

<View style={{
    
    width:dimension.width*0.17,
    
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontWeight:'700',
    color:'#A7A7A7',
    fontStyle:'normal'
}}>{item.price}</Text>
</View>

<View style={{
    
    width:dimension.width*0.17,
    
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontWeight:'700',
    color:'#A7A7A7',
    fontStyle:'normal'
}}>{item.marks}</Text>
</View>
</View>
</View>))}

</ScrollView>
</View>


{/* 
////////////////////////// Rank code End ///////////////////////////// */}
</View>
   

    
 
        </View>
    
    )
}
export default LeaderBoard;