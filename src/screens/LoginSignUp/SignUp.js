import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
Image} from 'react-native'
import { dimension, widthToDp } from '../../utils'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import auth from '@react-native-firebase/auth';
import Icons from 'react-native-vector-icons/Ionicons'
import Icons2 from 'react-native-vector-icons/MaterialIcons'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios'



GoogleSignin.configure({
  webClientId: '58783453322-n44m292t76a818kmpbrr3ekk859c3mvg.apps.googleusercontent.com',
});

const SignUp = ({navigation,route}) => {
  const [login, setLogin] = useState(false)
  const [currentPage , setCurrentPage] = useState("Login")
  const [email , setEmail] = useState("")
  const [username , setUserName] = useState("")
  const [password , setPassword] = useState("")
  const [phoneNo , setPhoneNo] = useState("")
  const [emailError , setEmailError] = useState(false)
  const [usernameError , setUserNameError] = useState(false)
  const [passwordError , setPasswordError] = useState(false)
  const [phoneNoError , setPhoneNoError] = useState(false)

  hideNavigationBar()

  const loginWithEmail = async() => {
    const loginDetails = {
      email : email,
      password : password
    }
    try {
      let res = await axios({
        method: 'POST',
        url: 'https://ceplbackend.herokuapp.com/signin',
        data: loginDetails
      })
      console.log( res.data)
      
    
        
      
    } catch (error) {
      console.log(error)
      
    }

  }


  async function onGoogleButtonPress() {
    try {
         // Get the users ID token
    const info = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(info.idToken);
    
    const Userdata ={
      email : info.user.email,
      username : info.user.name,
      password : "hh",
      signInType : "google"
    }
      
    signInWithGoogle(Userdata)
  console.log(info)
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    setEmail(info.user.email)
      setUserName(info.user.name)
    
    } catch (error) {
        console.log(error)
    }
   
  }

  const signInWithGoogle = (Userdata) => {
    var UserDetails = {
      email : email,
      username : username,
      password : "tr",
      signInType : "google" 
    }
    console.log("data")
    try {
    const res = axios({
      method: 'POST',
      url: 'https://ceplbackend.herokuapp.com/signup',
      data: Userdata
    })
    .then(
      navigation.navigate("Dashboard")
    ) 
  } catch (error) {
    console.log(error)
      
  }

  }


  

  

return(

<SafeAreaView
style={{
  flex : 1,
  marginBottom : 20,
}}>
{login? (
<View
style ={{
  height : dimension.height*0.3,
  width : dimension.width,
  backgroundColor : "#4cd4ca",
}}>

<View
style={{
  height : dimension.height*0.5,
  width : dimension.width*1,
  borderBottomEndRadius : 500,
  borderBottomStartRadius : 500,
  left : dimension.width*-0.2,
  top : dimension.height*-0.25,
  backgroundColor : "#2C358E",
  flexDirection : "row",
  
}}>



<View
style={{
  position : "absolute",
  height : dimension.width*0.4,
  width : dimension.width*0.4,
  backgroundColor : "#FFD100",
  left : '90%',
  top : "38%",
  borderRadius : 500,
}}></View>
<View
style = {{
  position : "absolute",
  left : dimension.width*0.7,
  top : dimension.height*0.445,
}}>
<Icons
style = {{
  color : "#9942B7",
  paddingHorizontal   : 5,
  paddingVertical : 4,
  borderRadius : 100,
  backgroundColor : "white",

}}
 name= "ribbon" size={25}/>
</View>
<View
style ={{
  height : dimension.height*0.08,
  width : dimension.height*0.08,
  top : dimension.height*0.42,
  backgroundColor : "white",
  left : dimension.width*0.125,
  borderRadius : 500
}}></View>

<Text style={{
  alignSelf : "center",
  position : "absolute",
  left : dimension.width*0.24,
  top : dimension.height*0.31,
  fontFamily : "Poppins-Regular",
  color : "white",
  fontSize : RFValue(30)
}}>COOTZ</Text>
<Text  style={{
  alignSelf : "center",
  position : "absolute",
  left : dimension.width*0.25,
  top : dimension.height*0.36,
  fontFamily : "Poppins-Regular",
  color : "white",
  fontSize : RFValue(14)
}}>Log In To Your Account</Text>
<Text style={{
  alignSelf : "center",
  position : "absolute",
  left : dimension.width*0.25,
  top : dimension.height*0.385 ,
  fontFamily : "Poppins-Regular",
  color : "white",
  fontSize : RFValue(14)
}}>Using Credentials</Text>
<Text
style={{
  alignSelf : "center",
  position : "absolute",
  left : dimension.width*0.24,
  top : dimension.height*0.27,
  elevation : 14,
  fontFamily : "Poppins-Regular",
  color : "white",
  fontSize : RFValue(30)
}}>Welcome To </Text>

</View>


</View>
):(
  <View
style ={{
  height : dimension.height*0.18,
  width : dimension.width,
  backgroundColor : "#4cd4ca",
  
}}>
<Text
style={{
  alignSelf : "center",
  fontFamily : "Poppins-Bold",
  color : "white",
  fontSize : RFValue(27),
  marginTop : dimension.height*0.03,
}}>Let's Get Started
</Text>
<Text
style={{
  alignSelf : "center",
  fontFamily : "Poppins-Regular",
  color : "white",
  fontSize : RFValue(12),
  
}}>Create An Account To Get
</Text>
<Text
style={{
  alignSelf : "center",
  fontFamily : "Poppins-Regular",
  color : "white",
  fontSize : RFValue(12),
  
}}>Your Access
</Text>
</View>
)}

<View
style ={{
  height :  login ? (dimension.height*0.5):(dimension.height*0.62),
  width : dimension.width,
  backgroundColor : "#4cd4ca",
  
}}>

{login ? (null) : (
  <>
<View
  style={{
    alignItems : "center",
    marginTop : "1%",
    flexDirection : "row",
    backgroundColor : "white",
    width : dimension.width*0.9,
    alignSelf : "center",
    borderRadius : 8,
    paddingLeft : "2%",
    paddingVertical : 1,
    overflow : "hidden",
    
    
  }}>
  <Icons2
  style={{
    color : "#2C358E",
    paddingHorizontal : 5,
    paddingVertical : 4,
    backgroundColor : "rgba(85, 93, 166, 0.24)",
    borderRadius : 100,
    
  }} name = "email" size = {20}/>
  <TextInput
  style={{
    width : "100%",
    height : dimension.height* 0.06,
    borderRadius : 10,
    marginLeft : "1%",
    paddingLeft : 8,
    fontFamily : "Poppins-Regular",
    fontSize : RFValue(14),
    alignSelf : "center"
  }}
   placeholder = "Username"
   onChangeText={(val) => {setUserName(val)}}
   onEndEditing = {()=> {if(username.trim() == '')
                                     setUserNameError(true)
                                 else
                                     setUserNameError(false);
                                      console.log(usernameError)}}
 />
 
 
   
  </View>
  {
    usernameError ?(
        <Text style={{
          marginLeft : dimension.width*0.07,
          color: 'red',
          fontSize: RFValue(10),
        }}> * This field is mandatory</Text>
        ): (null)
    }
  </>
  
  )}
<>
<View
style={{
  alignItems : "center",
  marginTop : "2%",
  flexDirection : "row",
  backgroundColor : "white",
  width : dimension.width*0.9,
  alignSelf : "center",
  borderRadius : 8,
  paddingLeft : "2%",
  paddingVertical : 1,
  overflow : "hidden"
}}>
<Icons2
style={{
  color : "#2C358E",
  paddingHorizontal : 5,
  paddingVertical : 4,
  backgroundColor : "rgba(85, 93, 166, 0.24)",
  borderRadius : 100,
  
}} name = "person" size = {20}/>
<TextInput
style={{
  width : "100%",
  height : dimension.height* 0.06,
  borderRadius : 10,
  marginLeft : "1%",
  paddingLeft : 8,
  fontFamily : "Poppins-Regular",
  fontSize : RFValue(14),
  alignSelf : "center",
  textAlignVertical : "center"
}}
 placeholder = "Email ID"
 onChangeText={(val) => {setEmail(val)
}}
onEndEditing={(e) => {
  
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.trim() == '') {
    setEmailError(true);
  } else if (reg.test(email) === false) {
    console.log(email);
    console.log('Email is Not Correct');
    setEmailError(true);
  } else setEmailError(false);
}}
/>

</View>
{emailError ? (
  <Text
    style={{
      marginLeft : dimension.width*0.07,
      color: 'red',
      fontSize: RFValue(10),
      
    }}>
    * Please enter a valid email
  </Text>
  ) : null}
</>
<View
style={{
  alignItems : "center",
  marginTop : "1%",
  flexDirection : "row",
  backgroundColor : "white",
  width : dimension.width*0.9,
  alignSelf : "center",
  borderRadius : 8,
  paddingLeft : "2%",
  paddingVertical : 1,
  overflow : "hidden",
  marginTop : "2%",
  
}}>
<Icons2
style={{
  color : "#2C358E",
  paddingHorizontal : 5,
  paddingVertical : 4,
  backgroundColor : "rgba(85, 93, 166, 0.24)",
  borderRadius : 100,
  
}} name = "lock" size = {20}/>
<TextInput
style={{
  width : "100%",
  height : dimension.height* 0.06,
  borderRadius : 10,
  marginLeft : "1%",
  paddingLeft : 8,
  fontFamily : "Poppins-Regular",
  fontSize : RFValue(14),
  alignSelf : "center"
}}
 placeholder = "Password"
 onChangeText={(val) => {setPassword(val)}}
 onEndEditing = {()=> {if(password.trim() == '')
                                   setPasswordError(true)
                               else
                                   setPasswordError(false);
                                  }}
/>

{
  passwordError ?(
      <Text style={{
        marginLeft : dimension.width*0.07,
        color: 'red',
        fontSize: RFValue(10),
      }}>* This field is mandatory</Text>
      ): (null)
  }
 
</View>

{login ? (null):(
<>
  
  <View
style={{
  alignItems : "center",
  marginTop : "1%",
  flexDirection : "row",
  backgroundColor : "white",
  width : dimension.width*0.9,
  alignSelf : "center",
  borderRadius : 8,
  paddingLeft : "2%",
  paddingVertical : 1,
  overflow : "hidden",
  marginTop : "2%",
  
}}>
<Icons2
style={{
  color : "#2C358E",
  paddingHorizontal : 5,
  paddingVertical : 4,
  backgroundColor : "rgba(85, 93, 166, 0.24)",
  borderRadius : 100,
  
}} name = "phone" size = {20}/>
<TextInput
style={{
  width : "100%",
  height : dimension.height* 0.06,
  borderRadius : 10,
  marginLeft : "1%",
  paddingLeft : 8,
  fontFamily : "Poppins-Regular",
  fontSize : RFValue(14),
  alignSelf : "center"
}}
 placeholder = "Phone no"
 onChangeText={(val) => {setPhoneNo(val)}}
 onEndEditing = {()=> {if(phoneNo.trim() == '')
                                   setPhoneNoError(true)
                               else
                                   setPhoneNoError(false);
                                  }}
/>
</View>
{
  phoneNoError ?(
      <Text style={{
        marginLeft : dimension.width*0.07,
        color: 'red',
        fontSize: RFValue(10),
      }}>* This field is mandatory</Text>
      ): (null)
  }
  
  </>

)}

<Text
style= {{
  alignSelf : "center",
  marginTop : dimension.height*0.02,
  fontFamily : "Poppins-Medium",
  fontSize : RFValue(14)

}}>Forgot Password ?</Text>
<Text
style= {{
  alignSelf : "center",
  marginTop : dimension.height*0.07,
  fontFamily : "Poppins-Medium",
  color : "white",
  fontSize : RFValue(14)
}}>{login ? "Dont have an Account ?" : "Already have an Account ?"}</Text>
<TouchableOpacity
onPress = {()=> {
  if (login == true) {
    setLogin(false)
    
  }
  else{
  setLogin(true)
  
  }
}}>
<Text
style= {{
  alignSelf : "center",
  marginTop : dimension.height*0.01,
  fontFamily : "Poppins-Bold",
  color : "white",
  fontSize : RFValue(18),
  color : "#2E3691",
}}>{login ? "REGISTER" : "LOGIN"}</Text>
</TouchableOpacity>
<View
style={{
  flexDirection : "row",
  width : dimension.width,
  justifyContent : "space-evenly",
  marginTop : dimension.height*0.02
}}>
<TouchableOpacity
onPress = {() => {onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}}>
<View
style ={{
  width : dimension.width*0.4,
  backgroundColor : "white",
  borderRadius : 10,
  height : dimension.height*0.06,
  justifyContent : "center"
}}>
<Image
style={{
  resizeMode : "center",
  alignSelf : "center",
}}
source = {require("../../../assets/g.png")}/>

</View>
</TouchableOpacity>
<View
style ={{
  width : dimension.width*0.4,
  backgroundColor : "white",
  borderRadius : 10,
  height : dimension.height*0.06,
  justifyContent : "center"
}}>
<Image
style={{
  resizeMode : "center",
  alignSelf : "center",
}}
source = {require("../../../assets/fb.png")}/>
</View>
</View>

</View>

<View
style ={{
  height : dimension.height*0.2,
  width : dimension.width,
  backgroundColor : "#4cd4ca",
  justifyContent : "flex-end"
}}>

<Image
style={{
  height : "85%",
  width : "100%"
}}
 source={require("../../../assets/Rshape.png")}/>
<TouchableOpacity
  style={{
    height : dimension.height*0.11,
    width : dimension.height*0.11,
    backgroundColor : "#2C358E",
    position : "absolute",
    borderRadius : 500,
    bottom : dimension.height*0.12,
    left : dimension.width*0.72,
    justifyContent : "center"
 
  }}
onPress={() => {
              if (login == true) {
                 loginWithEmail()
              }
              else{

              }
}}>
 <Text
 style={{
  alignSelf : "center",
  fontFamily : "Poppins-Regular",
  color : "white",
  fontSize : RFValue(14),
  color : "white",
 }}>{login ? "Login" : "Register"}</Text>
 </TouchableOpacity>


</View>
</SafeAreaView>


)

}

export default SignUp;