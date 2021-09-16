
import React, {useState} from 'react'
import {View,
 Text,
StyleSheet,
SafeAreaView,
StatusBar,Image,Pressable,
TouchableOpacity,FlatList,
ScrollView,
TextInput,} from 'react-native';
import ScratchView from 'react-native-scratch';
import { dimension } from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { linear } from 'react-native/Libraries/Animated/Easing';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { RFValue } from 'react-native-responsive-fontsize';
const withdraw =({navigation, route})=>{
return(
    <View style={{
        flex:1,
        backgroundColor:'#fff'
    }}>
<StatusBar backgroundColor={'#fff'}></StatusBar>


<View style={{
  flexDirection:'row',
marginTop:'5%',
alignSelf:'center',
width:dimension.width*0.92
}}>

<Pressable onPress={()=> navigation.goBack()}>
<View style={{
width:dimension.width*0.12,
height:dimension.width*0.12,
borderRadius:100,
backgroundColor:"rgba(194, 194, 194, 0.2)",
justifyContent:'center'

}}>
  
<Icon style={{alignSelf:'center'}} name="arrow-back" color={'#20B3A8'} size={25}/>
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

}}>Withdraw</Text>
</View>
</View>

{/* 
////////////////////////////// upi box code start /////////////////////// */}

<View style={{
    overflow:'hidden',
    backgroundColor:'#fff',
    elevation:5,
    width:dimension.width*0.90,
    alignSelf:'center',
   top:dimension.height*0.02,
    justifyContent:'center',
    paddingVertical:15,
    borderRadius:7
    
    }}>

<View style={{
    width:dimension.width*0.80,
    flexDirection:'row',
    alignSelf:'center',
    overflow:'hidden',
    marginTop:'4%'
}}>
   <View style={{
       width:dimension.width*0.12,
       height:dimension.width*0.12,
       borderRadius:100,
       backgroundColor:'#C4C4C44d',
justifyContent:'center'
   }}>
 <Icon2 style={{alignSelf:'center',}} name="bank" color={'#20B3A8'} size={15}/>

   </View>
   
   <TextInput
   placeholder='Enter your UPI ID'
   style={{
       fontSize:RFValue(19),
        marginLeft:'2%',
        width:dimension.width*0.70,
       borderBottomWidth:1,
       borderBottomColor:'#E3E3E3ff'
    }}
    placeholderTextColor={'#7C7C7C'}
  
   ></TextInput> 
</View>



    </View>
{/* 
///////////////////// text field code end ///////////////////// */}



<View style={{
    position:'absolute',
    width:dimension.width*0.15,
    height:dimension.width*0.15,
    backgroundColor:'#2C3590',
    borderRadius:100,
    justifyContent:'center',
    top:dimension.height*0.18,
    left:dimension.width*0.72,
    elevation:20
}}>

<Text style={{
    color:'#fff',
    fontSize:RFValue(12),
    textAlign:'center',
    fontFamily:'Poppins-Medium',
    fontWeight:'700',
}}>Next</Text>

</View>







    </View>
)
}
export default withdraw;