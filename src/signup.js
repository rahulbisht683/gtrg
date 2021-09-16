import React from 'react' 
import {View,Text,ImageBackground,TouchableOpacity,TextInput,StyleSheet} from 'react-native'




const signup=()=>{

  
return(

<View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#212a33"}}>
<Text style={{fontSize:40,
       fontWeight:"bold",
       marginRight:140,
       color:"#feac0b",}}>Create an</Text>
<Text style={{fontSize:40,
       fontWeight:"bold",
       marginRight:160,
       color:"#feac0b",marginBottom:50}}>Account</Text>

<View style={{
backgroundColor:"#191f2b",
elevation:10,
padding:20,
borderRadius:20}}>


<TextInput style={{borderBottomWidth:1,
       marginRight:20,
       marginLeft:20,
       marginTop:30,
       color:"#616974",
       borderBottomColor:"#616974"}}
       placeholder="Name"
       placeholderTextColor="#616974"
         />

<TextInput style={{borderBottomWidth:1,
       marginRight:20,
       marginLeft:20,
       marginTop:30,
       color:"#616974",
       borderBottomColor:"#616974"}}
      placeholder="Email"
      placeholderTextColor="#616974"
       />
<TextInput style={{borderBottomWidth:1,
       marginRight:20,
       marginLeft:20,
       marginTop:30,
       color:"#616974",
       borderBottomColor:"#616974"}}
     placeholder="Phone no"
     placeholderTextColor="#616974"
     keyboardType="number-pad"
      />       

<TouchableOpacity style={{backgroundColor:"white",width: 200,
    marginTop: 40,
    backgroundColor: "#feac0b",
    padding: 10,
    borderRadius: 10,
    marginLeft:40,
    marginRight:40
   

}}  >

<Text style={{fontWeight:"bold",
marginLeft:55,
fontSize:20,
color:"#212a33"}}>SIGN UP</Text>

</TouchableOpacity>



    
    
    



</View>






</View>

)

}

export default signup;



     