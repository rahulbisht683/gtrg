import React , {useState} from 'react'
import {Text,
View,
TextInput,
TouchableOpacity,
StatusBar,Image,Pressable
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { dimension } from '../../utils'
import { RFValue } from 'react-native-responsive-fontsize';
import auth from '@react-native-firebase/auth';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
const Forget = ({navigation}) => {
    const [email , setEmail] = useState('');
    const [emailErr , setEmailErr] = useState(false);


    const validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);}
    return(
       <View
       style={{
           flex : 1,
           backgroundColor : "#20B3A8",
           

       }}>

       <StatusBar backgroundColor = "#20B3A8"/>
       <View
  style={{
    height:dimension.height*0.8,
  }}
  >
  

  
<TouchableOpacity
 onPress={()=> navigation.goBack()}>
<View style={{
width:dimension.width*0.12,
height:dimension.width*0.12,
borderRadius:100,
backgroundColor:"rgba(255, 255, 255, 0.28)",
justifyContent:'center',
marginLeft:'5%',
marginTop:'2%'

}}>
  
<Icon style={{alignSelf:'center'}} name="arrow-back" color={'#20B3A8'} size={30}/>
</View>
</TouchableOpacity>
          <Text style={{
              fontFamily:'Poppins-Medium',
              fontSize:RFValue(24),
              justifyContent:'center',
              alignSelf:'center',
              color:'#fff',
              top:dimension.height*0.12,
              fontWeight:'500',

          }}>Forgot Password</Text>
     

      <View style={{
 justifyContent:'center',
 alignSelf:'center',
 marginTop:'5%',
 width:dimension.width*0.80,
 marginBottom:'10%'
      }}>
          <Text style={{
              fontFamily:'Poppins-Medium',
              fontSize:RFValue(14),
              color:'#fff',
              top:dimension.height*0.12,
              fontWeight:'500',
              textAlign:'center'
          }}>Enter your email , so that 
          we can send the verification code</Text>
      </View>



      <View style={{
  elevation:15,
  width:dimension.width*0.92,
  borderRadius:15,
  marginTop:'25%',
  backgroundColor:'#fff',
  paddingVertical:3,
  justifyContent:'center',
  alignSelf:'center',
}}>

<View style={{
  flexDirection:'row',
}}>

<View style={{
  backgroundColor:'#555DA63D',
  width:dimension.width*0.12 , 
  height:dimension.width*0.12,
  marginLeft:'5%',
  borderRadius:100,
  justifyContent:'center'
}}>


<Icon name="mail" style={{alignSelf:'center'}} color={'#2B348B'} size={18}/>  

</View>
<TextInput 
placeholder ='Email Id'
onChangeText={(value)=> {setEmail(value)} }
onEndEditing={()=>{
  if(!validateEmail(email)){
    setEmailErr(true)
  }else{
    setEmailErr(false)
  }
  console.log(emailErr)
}}
placeholderTextColor='#2C358E'
style={{width:'100%', marginTop:3.5,marginLeft:5, fontSize:16, fontFamily:'Poppins-Medium', fontWeight:'600', color:'#2C358E'}}
/>

</View>
</View>
{emailErr ? (<View style={{width:dimension.width*0.86,marginTop:2, alignSelf:'center'}}>
  <Text style={{fontSize:RFValue(12),color:'red' }}>*Please enter correct email</Text></View>): null }



<View style={{
marginTop:'14%'
}}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontWeight:'600',
    fontSize:RFValue(14),
    fontStyle:'normal',
    color:'#000000',
    textAlign:'center'
}}>More Options</Text>
</View>

</View>


<View
  style={{
    height:dimension.height*0.2,
  }}
  >

  <Image 
  style={{
    height:'100%',
    width:dimension.width,
  }}
  source={require('../../../assets/Rshape.png')}
  />


</View>

<Pressable
onPress={()=> navigation.navigate('otpScreen')}
style={{
  width:dimension.width*0.2,
  height:dimension.width*0.2,
  borderRadius:100,
  backgroundColor:'#2E3691',
  position:'absolute',
  justifyContent:'center',
  top:dimension.height*0.76,
  left:dimension.width*0.70,

}}>
<Text style={{
  color:'#fff',
  textAlign:'center',
  fontSize:12,
  fontFamily:'Roboto-Medium',
  fontWeight:'800',
}}>Sent Code</Text>
</Pressable>
       </View>
    )
}
export default Forget;