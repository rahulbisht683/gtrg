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
import { RFValue } from 'react-native-responsive-fontsize'


const Settings =({navigation,route,onPress}) => { 

    const [name , setName] = useState('Prince Vikal');
    const [email , setEmail] = useState('Princevikal@gmail.com');
    const [password, setPassword] = useState('*********');
    const [phone, setPhone] = useState('8888888888');
    const [Country, setCountry] = useState('India');
    
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPull, setIsPull] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const togglePull = () => setIsPull(previousState => !previousState);



    return(
        <View style={{flex:1,
        backgroundColor:'#fff',
        padding:10}}>

<StatusBar backgroundColor={'#fff'}></StatusBar>


<ScrollView>
{/* 
/////////////////////////////  arrow code ///////////// */}
<View style={{
  flexDirection:'row',
marginTop:'1%',
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
  textAlign:'center'

}}>Settings</Text> 
</View>
</View> 

{/* 
//////////////////////// arrow code end ////////////////////////////// */}


<View style={{
padding:5,
marginTop:'1%'
}}>
    <Text style={{
        color:'#979797',
        fontFamily:'Poppins-Medium',
        fontSize:RFValue(14),
        fontWeight:'600',
        fontStyle:'normal'
    }}>Personal Info</Text>
</View>

<View style={{
    borderBottomWidth:2,
    marginTop:'1%',
    borderBottomColor:'#D2D2D2'
}}></View>

{/* 
//////////////////////////////  details code start ////////////////////////// */}

<View style={{
    width:dimension.width*0.95,
    marginTop:'2%',
    elevation:1,
    padding:3,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center'
}}>

<View style={{
    flexDirection:'row',
    width:dimension.width*0.88,
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<View style={{
    width:dimension.width*0.10,
    height:dimension.width*0.10,
    backgroundColor:'#555DA64d',
    borderRadius:100,
    justifyContent:'center'
}}>
<Icon style={{alignSelf:'center'}} name="person" color={'#2D368E'} size={22}/>
</View>


<View style={{
    width:dimension.width*0.70,
    justifyContent:'center'
}}>
    <Text numberOfLines={1} style={{
        fontFamily:'Poppins-Medium',
        fontSize:14,fontStyle:'normal',
        fontWeight:'500',
        color:'#2C358E'
    }}>{name}</Text>
</View>
</View>
</View>




<View style={{
    width:dimension.width*0.95,
    marginTop:'2%',
    elevation:1,
    padding:3,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center'
}}>

<View style={{
    flexDirection:'row',
    width:dimension.width*0.88,
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<View style={{
    width:dimension.width*0.10,
    height:dimension.width*0.10,
    backgroundColor:'#555DA64d',
    borderRadius:100,
    justifyContent:'center'
}}>
<Icon style={{alignSelf:'center'}} name="mail" color={'#2D368E'} size={22}/>
</View>


<View style={{
    width:dimension.width*0.70,
    justifyContent:'center'
}}>
    <Text numberOfLines={1} style={{
        fontFamily:'Poppins-Medium',
        fontSize:14,fontStyle:'normal',
        fontWeight:'500',
        color:'#2C358E'
    }}>{email}</Text>
</View>
</View>
</View>



<View style={{
    width:dimension.width*0.95,
    marginTop:'2%',
    elevation:1,
    padding:3,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center'
}}>

<View style={{
    flexDirection:'row',
    width:dimension.width*0.88,
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<View style={{
    width:dimension.width*0.10,
    height:dimension.width*0.10,
    backgroundColor:'#555DA64d',
    borderRadius:100,
    justifyContent:'center'
}}>
<Icon style={{alignSelf:'center'}} name="lock-closed" color={'#2D368E'} size={22}/>
</View>


<View style={{
    width:dimension.width*0.70,
    justifyContent:'center'
}}>
    <Text numberOfLines={1} style={{
        fontFamily:'Poppins-Medium',
        fontSize:14,fontStyle:'normal',
        fontWeight:'500',
        color:'#2C358E'
    }}>{password}</Text>
</View>
</View>
</View>



<View style={{
    width:dimension.width*0.95,
    marginTop:'2%',
    elevation:1,
    padding:3,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center'
}}>

<View style={{
    flexDirection:'row',
    width:dimension.width*0.88,
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<View style={{
    width:dimension.width*0.10,
    height:dimension.width*0.10,
    backgroundColor:'#555DA64d',
    borderRadius:100,
    justifyContent:'center'
}}>
<Icon style={{alignSelf:'center'}} name="call" color={'#2D368E'} size={22}/>
</View>


<View style={{
    width:dimension.width*0.70,
    justifyContent:'center'
}}>
    <Text numberOfLines={1} style={{
        fontFamily:'Poppins-Medium',
        fontSize:14,fontStyle:'normal',
        fontWeight:'500',
        color:'#2C358E'
    }}>{phone}</Text>
</View>
</View>
</View>



<View style={{
    width:dimension.width*0.95,
    marginTop:'2%',
    elevation:1,
    padding:3,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center'
}}>

<View style={{
    flexDirection:'row',
    width:dimension.width*0.88,
    alignSelf:'center',
    justifyContent:'space-between'
}}>

<View style={{
    width:dimension.width*0.10,
    height:dimension.width*0.10,
    backgroundColor:'#555DA64d',
    borderRadius:100,
    justifyContent:'center'
}}>
<Icon style={{alignSelf:'center'}} name="location" color={'#2D368E'} size={22}/>
</View>


<View style={{
    width:dimension.width*0.70,
    justifyContent:'center'
}}>
    <Text numberOfLines={1} style={{
        fontFamily:'Poppins-Medium',
        fontSize:14,fontStyle:'normal',
        fontWeight:'500',
        color:'#2C358E'
    }}>{Country}</Text>
</View>
</View>
</View>




{/* 
///////////////////////////// details code end //////////////////////////// */}



<View style={{
padding:5,
marginTop:'5%'
}}>
    <Text style={{
        color:'#979797',
        fontFamily:'Poppins-Medium',
        fontSize:RFValue(14),
        fontWeight:'600',
        fontStyle:'normal'
    }}>Notifications</Text>
</View>

<View style={{
    borderBottomWidth:2,
    marginTop:'2%',
    borderBottomColor:'#D2D2D2'
}}></View>



{/* 
////////////////////////////// notification code start ///////////////////////// */}



<View style={{
    width:dimension.width*0.95,
    marginTop:'3%',
    elevation:1,
    backgroundColor:'#fff',
    borderRadius:12,
    paddingVertical:12,
    justifyContent:'center'
}}>


<View style={{
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    width:dimension.width*0.87,

}}>

<View>
    <Text style={{
        fontFamily:'Poppins-Medium',
        fontSize:RFValue(15),
        color:'#2C358E',
        fontStyle:'normal',
        fontWeight:'700',
    }}>Weekly Report</Text>
</View>


<View>
<Switch
       trackColor={{ false: "#767577", true: "#20B3AB" }}
       thumbColor={isPull ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
</View>

</View>
</View>




<View style={{
    width:dimension.width*0.95,
  paddingVertical:12,
    marginTop:'4%',
    elevation:1,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center'
}}>


<View style={{
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    width:dimension.width*0.87,

}}>

<View>
    <Text style={{
        fontFamily:'Poppins-Medium',
        fontSize:RFValue(15),
        color:'#2C358E',
        fontStyle:'normal',
        fontWeight:'700',
    }}>Pull Request</Text>
</View>


<View>
<Switch
        trackColor={{ false: "#767577", true: "#20B3AB" }}
        thumbColor={isPull ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={togglePull}
        value={isPull}
      />
</View>

</View>
</View> 
</ScrollView>
{/* 
///////////////////////////////////  notification code end /////////////////////// */}

        </View>
    )
}

export default Settings ;
