
import React, {useState} from 'react'
import {View,
 Text,
StyleSheet,
SafeAreaView,
StatusBar,Image,Pressable,
TouchableOpacity,FlatList,
ScrollView,
TextInput,
DatePickerIOS,} from 'react-native'
import ScratchView from 'react-native-scratch'
import { dimension } from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { linear } from 'react-native/Libraries/Animated/Easing';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

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
width:dimension.width*0.3/2,
height:dimension.height*0.07,
borderRadius:100,
backgroundColor:"rgba(194, 194, 194, 0.2)",

}}>
  
<Icon style={{alignSelf:'center',marginTop:'20%'}} name="arrow-back" color={'#20B3A8'} size={32}/>
</View>
</Pressable>

<View style={{
  
  width:dimension.width*0.70,
  alignSelf:'center',
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:18,
  fontWeight:'600',
  fontStyle:'normal',
  textAlign:'center'

}}>Withdraw</Text>
</View>
</View>

{/* 
////////////////////////////// upi box code start /////////////////////// */}

<View style={{
    backgroundColor:'#fff',
    elevation:5,
    width:dimension.width*0.90,
    height:dimension.height*0.3/2,
    alignSelf:'center',
    marginTop:'8%',
    borderRadius:7
    
    }}>

<View style={{
    width:dimension.width*0.80,
    flexDirection:'row',
    alignSelf:'center',
    overflow:'hidden',
    marginTop:'8%'
}}>
   <View style={{
       width:dimension.width*0.15,
       height:dimension.height*0.07,
       borderRadius:100,
       backgroundColor:'#C4C4C44d',
justifyContent:'center'
   }}>
 <Icon2 style={{alignSelf:'center',}} name="bank" color={'#20B3A8'} size={15}/>

   </View>
   
   <TextInput
   placeholder='Enter your UPI ID'
   style={{
       fontSize:19,
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
    height:dimension.height*0.07,
    backgroundColor:'#2C3590',
    borderRadius:100,
    top:dimension.height*0.5/2,
    left:dimension.width*0.72,
    elevation:20
}}>
    <View style={{
        marginTop:'35%'
    }}>
<Text style={{
    color:'#fff',
    fontSize:12,
    textAlign:'center',
    fontFamily:'Poppins-Medium',
    fontWeight:'700',
}}>Next</Text>
</View>
</View>



{/* 
////////////////////////// upi code end ////////////////////////// */}


<View style={{
    width:dimension.width*0.90,
    alignSelf:'center',
    marginTop:'20%'
}}>
    <Text style={{
        fontFamily:'Poppins-Medium',
        fontSize:14,
        fontWeight:'600',
        fontStyle:'normal',
        color:'#A1A1A1'
    }}>Bank Withdrawl</Text>
</View>



{/* ////////////////////////////////// card code start //////////////     */}

<View style={{
    backgroundColor:'#fff',
    elevation:10,
    borderRadius:7,
    marginTop:'4%',
    width:dimension.width*0.90,
    height:dimension.height*0.07,
    alignSelf:'center'
}}>

<View style={{
    width:dimension.width*0.8,
    height:dimension.height*0.05,
    alignSelf:'center',
   flexDirection:'row',
   justifyContent:'space-between',
   marginTop:'2%'
}}>
    <View>
    <Text style={{
        fontFamily:'Poppins-Medium',
        fontSize:13,
        fontWeight:'bold',
        color:'#282828',
        lineHeight:20,
        fontStyle:'normal'
    }}>1234  4564  8656  8787</Text>

    <Text style={{
        fontFamily:'Poppins-Medium',
        fontSize:13,
        fontStyle:'normal',
        fontWeight:'800',
        color:'#2828284d'
    }}>John Doe</Text></View>

<View style={{
    width:dimension.width*0.11,
    height:dimension.height*0.05,
    borderRadius:100,
    backgroundColor:"#20B3A83B"
}}>
<Icon style={{alignSelf:'center',marginTop:'20%'}} name="chevron-forward" color={'#20B3A8'} size={25}/></View>

</View>

</View>

<View style={{
    backgroundColor:'#fff',
    elevation:10,
    borderRadius:7,
    marginTop:'2%',
    width:dimension.width*0.90,
    height:dimension.height*0.07,
    alignSelf:'center'
}}>


<View style={{
    width:dimension.width*0.8,
    height:dimension.height*0.05,
    alignSelf:'center',
   flexDirection:'row',
   justifyContent:'space-between',
   marginTop:'2%'
}}>
    <View>
    <Text style={{
        fontFamily:'Poppins-Medium',
        fontSize:13,
        fontWeight:'bold',
        color:'#282828',
        lineHeight:20,
        fontStyle:'normal'
    }}>1234  4564  8656  8787</Text>

    <Text style={{
        fontFamily:'Poppins-Medium',
        fontSize:13,
        fontStyle:'normal',
        fontWeight:'800',
        color:'#2828284d'
    }}>John Doe</Text></View>

<View style={{
    width:dimension.width*0.11,
    height:dimension.height*0.05,
    borderRadius:100,
    backgroundColor:"#20B3A83B"
}}>
<Icon style={{alignSelf:'center',marginTop:'20%'}} name="chevron-forward" color={'#20B3A8'} size={25}/></View>

</View>
</View>



{/* ////////////////////////////////// card code end //////////////     */}


{/* ////////////////////////////////// add card  code start //////////////     */}



<View style={{
    position:'absolute',
    backgroundColor:'#fff',
    width:dimension.width*0.11,
    height:dimension.height*0.05,
    borderRadius:100,
    top:dimension.height*0.80,
    left:dimension.width*0.45,
    elevation:28
}}>
<Icon style={{alignSelf:'center',marginTop:'14%',marginLeft:'4%'}} name="add-circle" color={'#20B3A8'} size={28}/>

</View>
<View style={{
    position:'absolute',
    top:dimension.height*0.86,
    left:dimension.width*0.41,
}}>
<Text style={{
    color:'#fff',
    elevation:30,
    fontFamily:'Poppins-Medium',
    fontSize:12,
    fontWeight:'bold',

}}>Add new card</Text></View>


{/* ////////////////////////////////// Bottom shape code start //////////////     */}
<View style={{
    width:dimension.width,
    height:dimension.height*0.7,
    backgroundColor:'#20B3AB',
    position:'absolute',
    top:dimension.height*0.9/2,
    borderRadius:40
}}>

</View>




    </View>
)
}
export default withdraw;