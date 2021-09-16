import React, {useState} from 'react'
import {View,
 Text,
StyleSheet,
SafeAreaView,
StatusBar,Image,Pressable,
TouchableOpacity,FlatList,
ScrollView,
Modal,
TextInput,Switch,
ImageBackground,} from 'react-native'
import ScratchView from 'react-native-scratch'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { dimension } from '../utils';
import { color } from 'react-native-reanimated'
import { declareModule } from '@babel/types'
import { RFValue } from 'react-native-responsive-fontsize';

const Profile =({navigation,route,onPress}) => { 



    return(
        <View style={{flex:1,
        backgroundColor:'#fff',
        padding:10}}>

<StatusBar backgroundColor={'#23B4A9'}></StatusBar>

<View style={{
    width:dimension.width*1.5,
    height:dimension.height*0.40,
    position:'absolute',
    backgroundColor:'#23B4A9',
    left:dimension.width*-0.15,
    top:dimension.height*-0.17,
    transform: [{ rotate: '-15deg'}]
}}>

</View>


<View style={{
    width:dimension.width*1.5,
    height:dimension.height*0.40,
    top:dimension.height*0.65,
    left:dimension.width*-0.10,
    position:'absolute',
    backgroundColor:'#23B4A9',
    transform: [{ rotate: '-15deg'}],
    
}}>
</View>



<View style={{
    width:dimension.width*1.5,
    height:dimension.height*0.04,
    position:'absolute',
    top:dimension.height*0.16,
    left:dimension.width*-0.10,
    flexDirection:'row',
    transform:[{rotate:'-15deg'}]
}}>

<View style={{
    backgroundColor:'#fff',
    width:dimension.width*0.60,
    height:dimension.height*0.04,
}}></View>

<View style={{
    backgroundColor:"rgba(255, 255, 255, 0.2)",
    width:dimension.width*0.60,
    height:dimension.height*0.04,
}}></View>
</View>


{/* 
//////////////////////////// Image code //////////////////////////// */}

<View >
<Image 

style={{
    position:'absolute',
    top:dimension.height*0.13,
    alignSelf:'center',
    padding:2,
    backgroundColor:'#fff',
    width:dimension.width*0.27,
    height:dimension.width*0.27,
    borderRadius:100
}}
source={{uri:'https://image.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg'}} />
</View>


<View style={{
    position:'absolute',
    top:dimension.height*0.30,
    alignSelf:'center'
}}>
    <Text style={{
        textAlign:'center',
        fontFamily:'Poppins-Medium',
        fontSize:RFValue(18),
        fontStyle:'normal',
        fontWeight:'700',
        color:'#000000'
    }}>Georgie</Text>

    <Text style={{
        fontFamily:'Poppins-Medium',
        fontSize:RFValue(13),
        fontStyle:'normal',
        fontWeight:'700',
        color:'#23B4A9'
    }}>
        Princevikal3@gmail.com
    </Text>
</View>



<Image style={{
    position:'absolute',
    width:dimension.width*0.10,
    height:dimension.height*0.06,
    top:dimension.height*0.37,
    alignSelf:'center'
}} source={require('../../assets/prostar.png')} />


<View style={{
    position:'absolute',
    top:dimension.height*0.42,
   alignSelf:'center'
}}>
    <Text style={{
        textAlign:'center',
        fontFamily:'LuckiestGuy-Regular',
        fontSize:RFValue(13),
        fontStyle:'normal',
        fontWeight:'700',
        color:'#FEB800'
    }}>Level 20
    </Text>
    </View>


{/* 
/////////////////////////// follwer , follwing ,friends /////////////////////// */}

<View style={{
    width:dimension.width*0.90,
    backgroundColor:'#fff',
    position:'absolute',
    height:dimension.height*0.1,
    top:dimension.height*0.47,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between'

}}>


<View style={{
}}>

<View style={{
    backgroundColor:'rgba(76, 212, 202, 0.2)',
    width:dimension.width*0.14,
    height:dimension.width*0.14,
    borderRadius:100,
    justifyContent:'center'
}}>

<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:14,
    fontStyle:'normal',
    fontWeight:'700',
    color:'#20B3AB',
    textAlign:'center'

}}>233</Text>

</View>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(13),
    textAlign:'center',
    fontStyle:'normal',
    fontWeight:'600',
    fontStyle:'normal',
    color:'#000000'
}}>Followers</Text>
</View>




<View style={{
}}>

<View style={{
    backgroundColor:'rgba(76, 212, 202, 0.2)',
    width:dimension.width*0.14,
    height:dimension.width*0.14,
    borderRadius:100,
    justifyContent:'center'
}}>

<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(13),
    fontStyle:'normal',
    fontWeight:'700',
    color:'#20B3AB',
    textAlign:'center'

}}>23K</Text>

</View>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(13),
    fontStyle:'normal',
    fontWeight:'600',
    textAlign:'center',
    fontStyle:'normal',
    color:'#000000'
}}>Following</Text>
</View>



<View style={{
}}>

<View style={{
    backgroundColor:'rgba(76, 212, 202, 0.2)',
    width:dimension.width*0.14,
    height:dimension.width*0.14,
    borderRadius:100,
    justifyContent:'center'
}}>

<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(13),
    fontStyle:'normal',
    fontWeight:'700',
    color:'#20B3AB',
    textAlign:'center'

}}>23</Text>

</View>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(13),
    textAlign:'center',
    fontStyle:'normal',
    fontWeight:'600',
    fontStyle:'normal',
    color:'#000000'
}}>Friends</Text>
</View>




</View>


{/* 
///////////////////////////////  foloower , following code end ////////////////// */}


{/* 
//////////////////// profile Details and logout code ///////////////////////////// */}


<View style={{
    width:dimension.width*0.94,
    alignSelf:'center',
    backgroundColor:'#fff',
    borderRadius:10,
    top:dimension.height*0.75,
    position:'absolute',
    padding:4,
    justifyContent:'center'
}}>

<View style={{
    width:dimension.width*0.84,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    
}}>

<View style={{
   justifyContent:'center'
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontStyle:'normal',
    fontWeight:'700',
    textAlign:'center'
}}>Profile Details</Text>
</View>

<View style={{
    width:dimension.width*0.10,
    height:dimension.width*0.10,
    backgroundColor:'rgba(194, 194, 194, 0.2)',
    borderRadius:100,
    justifyContent:'center'
}}>
<Icon style={{alignSelf:'center'}} name="arrow-forward" color={'#23B4A9'} size={20}/>
</View>
</View>
</View>



<View style={{
    width:dimension.width*0.94,
    alignSelf:'center',
    backgroundColor:'#fff',
    borderRadius:10,
    top:dimension.height*0.83,
    position:'absolute',
    padding:4,
    justifyContent:'center'
}}>

<View style={{
    width:dimension.width*0.84,
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    
}}>

<View style={{
   justifyContent:'center'
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontStyle:'normal',
    fontWeight:'700',
    textAlign:'center'
}}>Log Out</Text>
</View>

<View style={{
    width:dimension.width*0.10,
    height:dimension.width*0.10,
    backgroundColor:'rgba(194, 194, 194, 0.2)',
    borderRadius:100,
    justifyContent:'center'
}}>
<Icon style={{alignSelf:'center'}} name="arrow-forward" color={'#23B4A9'} size={20}/>
</View>
</View>
</View>

{/* 
/////////////////////////////  arrow code ///////////// */}
<View style={{
  flexDirection:'row',
marginTop:'2%',
alignSelf:'center',
width:dimension.width*0.92
}}>

<Pressable onPress={()=> navigation.goBack()}>
<View style={{
width:dimension.width*0.12,
height:dimension.width*0.12,
borderRadius:100,
backgroundColor:"rgba(255, 255, 255, 0.28)",
justifyContent:'center',
}}>
  
<Icon style={{alignSelf:'center'}} name="arrow-back" color={'#20B3A8'} size={30}/>
</View>
</Pressable>

<View style={{
  width:dimension.width*0.70,
  alignSelf:'center',
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(17),
  fontWeight:'600',
  fontStyle:'normal',
  textAlign:'center',
  color:'#fff'
}}>Profile</Text>
</View>
</View>

</View>
)
}
export default Profile;