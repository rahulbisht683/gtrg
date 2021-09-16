import React, {useState} from 'react'
import {View,
 Text,
StyleSheet,
SafeAreaView,
StatusBar,Image,Pressable,
TouchableOpacity,FlatList,
ScrollView,
Modal,
TextInput,} from 'react-native'
import ScratchView from 'react-native-scratch'
import { dimension } from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { linear } from 'react-native/Libraries/Animated/Easing';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { RFValue } from 'react-native-responsive-fontsize';


const card =[
  {
    key:'1',
    prize:'5',
    tagline:'You won',
    headline:'Scartch Here',
    image:'https://image.freepik.com/free-psd/advise-text-style-effect_35913-2119.jpg',

  },
  {
    key:'2',
    prize:'15',
    tagline:'You won',
    headline:'Scartch Here',
    image:'https://image.freepik.com/free-psd/neon-light-text-style-effect_35913-2068.jpg',

  },
  {
    key:'3',
    prize:'30',
    tagline:'You won',
    headline:'Scartch Here',
    image:'https://image.freepik.com/free-psd/jungle-text-style-effect_35913-2113.jpg',

  },
]

const Wallet =({navigation , route, onPress}) => {

const [onReleved , setOnReleved] = useState(false);
const [onRelevedPercentChange , setOnRelevedPercent ] = useState(0);
const [show , setShow] = useState(false);
const [add , setAdd] = useState(false);


const showmodal=()=>{
  setShow(true);
}
const showmodalOff=()=>{
  setShow(false);
}

const addmodal =()=>{
  setAdd(true);
}
const addmodalOff =()=>{
  setAdd(false);
}


return(

    <View style={{
        flex:1,
        backgroundColor:'#fff'
        
    }}>
<StatusBar backgroundColor={'#fff'}></StatusBar>


{/* 
/////////////////////////////  arrow code ///////////// */}
<View style={{
  flexDirection:'row',
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
  fontSize:RFValue(18),
  fontWeight:'600',
  fontStyle:'normal',
  textAlign:'center'

}}>Your Wallet</Text>
</View>
</View>


{/* 
////////////////// cash balance code start ////////////////////// */}

<View style={{
width:dimension.width*0.90,
alignSelf:'center',
marginTop:'5%'
}}>
  <Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(13),
    fontWeight:'700',
    fontStyle:'normal',
  }}>Cash Balance</Text>
</View>

<LinearGradient
colors={['#4CD3C9', '#009C91']}
useAngle ={true}

style={{
  overflow : "hidden",
  width:dimension.width*0.90,
  height:dimension.height*0.1,
  alignSelf:'center',
  marginTop:'4%',
  elevation:25,
  borderRadius:8,
  shadowColor:'#03fcc6',
  shadowOpacity:0.5,
  shadowOffset:{width:0,height:2},
  flexDirection : "row",
  justifyContent : "space-between"
}}>


<View style={{
  marginTop:'2%',
  marginLeft:'5%',
  justifyContent:'center'
}}>
<Text style={{ 
  color:'#fff',
  fontSize:RFValue(13),
  fontFamily:'Poppins-Medium',
  fontStyle:'normal',
  fontWeight:'700',
}}>Balance</Text>


<Text style={{
  color:'#fff',
  fontSize:RFValue(13),
  fontFamily:'Poppins-Medium',
  fontStyle:'normal',
  fontWeight:'700',
}}>Rs. 10,000</Text>

</View>

<View style={{
  
  backgroundColor:'#FFFFFF1A',
  width:"50%",
  height:"125%",
  alignSelf : "center",
  borderTopLeftRadius : 50,
  borderBottomLeftRadius : 50,
  justifyContent:'center'
  
}}>

<View style={{
  flexDirection:'row',
 justifyContent:'center'
}}>

<View style={{
 justifyContent:'center',
 left:dimension.width*-0.05

}}>
  <Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    fontWeight:'600',
    fontStyle:'normal',
    
  }}>Add Cash</Text>
</View>


<View style={{
  backgroundColor:'#fff',
  width:dimension.width*0.12,
  height:dimension.width*0.12,
  borderRadius:100,
  justifyContent:'center'
}}>


<Icon style={{alignSelf:'center',}} name="add-circle" color={'#20B3A8'} size={28}/>
</View>
</View>

</View>

</LinearGradient>

{/* 
/////////////////////////// box card start /////////////////////////// */}

<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  width:dimension.width*0.90,
  alignSelf:'center'
}}>


{/* 
//////////////////////// first box code start /////////////////////////// */}

<View style={{
  overflow:'hidden',
  marginTop:'3%',
  width:dimension.width*0.43,
  padding:7,
  backgroundColor:'#fff',
  borderRadius:12,
  elevation:25
}}>

  <View style={{
    marginLeft:'5%',
    marginTop:'5%'
  }}>
<View style={{
  height:dimension.width*0.12,
  width:dimension.width*0.12,
  backgroundColor:'#2C3590',
  justifyContent:'center',
  borderRadius:100
}}>
  <Icon2 style={{alignSelf:'center'}} name="crown" color={'#fff'} size={20}/>
</View>
 </View>
{/*///////////////////////////  text headline code ////////////////// */}

<View style={{
marginTop:'5%',
marginLeft:'7%'
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(13),
  fontStyle:'normal',
  fontWeight:'600',
  color:'#B7B7B7',

}}>Winning Cash</Text>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  fontStyle:'normal',
  fontWeight:'600',
  color:'#000000',
  
}}>Rs.1800.00</Text>
</View>

<Pressable
onPress={()=> {showmodal()}}
style={{
  width:dimension.width*0.38,
  height:dimension.height*0.04,
  backgroundColor:'#4CD4CA',
  alignSelf:'center',
  marginTop:'6%',
  justifyContent:'center',
  borderRadius:4,
}}>
<Text style={{
  fontSize:RFValue(13),
  textAlign:'center',
  fontFamily:'Poppins-Medium',
  fontWeight:'700',
  fontStyle:'normal',
  color:'#FEFEFE',
}}>Withdraw</Text>
</Pressable>

</View>


{/* 
////////////////////////////// second box code start //////////////////// */}

<View style={{
  overflow:'hidden',
  marginTop:'3%',
  width:dimension.width*0.43,
  padding:7,
  backgroundColor:'#fff',
  borderRadius:12,
  elevation:25,
}}>


<View style={{
    marginLeft:'5%',
    marginTop:'5%'
  }}>
<View style={{
 paddingVertical:9,
 paddingHorizontal:10,
  justifyContent:'center',
  backgroundColor:'#2C3590',
  borderRadius:100,
}}>
  <Icon3 style={{alignSelf:'center'}} name="bank" color={'#fff'} size={20}/>
</View>
 </View>
{/*///////////////////////////  text headline code ////////////////// */}

<View style={{
marginTop:'5%',
marginLeft:'7%'
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(13),
  fontStyle:'normal',
  fontWeight:'600',
  color:'#B7B7B7',

}}>Deposit Cash</Text>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  fontStyle:'normal',
  fontWeight:'600',
  color:'#000000',
  
}}>Rs.3000.00</Text>
</View>

<Pressable 
onPress={()=> {addmodal()}}
style={{
  width:dimension.width*0.38,
  height:dimension.height*0.04,
  backgroundColor:'#FFD100',
  alignSelf:'center',
  marginTop:'6%',
  justifyContent:'center',
  borderRadius:4,
}}>
<Text style={{
  fontSize:RFValue(13),
  textAlign:'center',
  fontFamily:'Poppins-Medium',
  fontWeight:'700',
  fontStyle:'normal',
  color:'#000000',
}}>Add Cash</Text>
</Pressable>


</View>
</View>


{/* 
////////////////////// box code end                   */}


{/* 
/////////////////// Scratch card code start ///////////////////////// */}

<View style={{
  marginTop:'6%',
  width:dimension.width*0.90,
  alignSelf:'center',

}}>
  <Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(13),
    fontWeight:'700',
    fontStyle:'normal',
    color:'#000000'
  }}>Your Scratch Cards</Text>

</View>

{/* 
<View style={{
marginLeft:'3%',
  flexDirection:'row'
}}>

{card.map((item, index)=>
  <View>
<View style={{
  width: dimension.width*0.30,
  height: dimension.height*0.3/2 ,
 marginTop:'4%',
  marginLeft:'3%',
  backgroundColor:'yellow'
}}>
<View style={{
marginTop:'17%'
}}>
   <Icon3 style={{alignSelf:'center',}} name="trophy" color={'#4CD3C9'} size={50}/>

<Text style={{
  fontFamily:'LuckiestGuy-Regular',
  fontSize:18,
  textAlign:'center',

}}>{item.tagline}</Text>

<Text style={{
  fontFamily:'LuckiestGuy-Regular',
  fontSize:12,
  textAlign:'center',

}}>Rs.{item.prize}.00</Text>
</View>


            <ScratchView
         
                id={item.key} // ScratchView id (Optional)
                brushSize={40} // Default is 10% of the smallest dimension (width/height)
                threshold={50} // Report full scratch after 70 percentage, change as you see fit. Default is 50
                fadeOut={false} // Disable the fade out animation when scratch is done. Default is true
                placeholderColor="#AAAAAA" // Scratch color while image is loading (or while image not present)
                imageUrl={item.image}   // A url to your image (Optional)
                resourceName="your_image" // An image resource name (without the extension like '.png/jpg etc') in the native bundle of the app (drawble for Android, Images.xcassets in iOS) (Optional)
                resizeMode="cover|contain|stretch"
                // Resize the image to fit or fill the scratch view. Default is stretch
                // onImageLoadFinished={this.onImageLoadFinished} // Event to indicate that the image has done loading
                // onTouchStateChanged={this.onTouchStateChangedMethod} // Touch event (to stop a containing FlatList for example)
                // onScratchProgressChanged={this.onScratchProgressChanged} // Scratch progress event while scratching
                // onScratchDone={this.onScratchDone} // Scratch is done event
            />
      
        </View>


        <View style={{
  width:dimension.width*0.04,
  height:dimension.height*0.02,
  backgroundColor:'#fff',
  position:'absolute',
  borderRadius:100,
  top:dimension.height*0.1,
  left:dimension.width*-0.03/2
}}></View>

<View style={{
  width:dimension.width*0.04,
  height:dimension.height*0.02,
  backgroundColor:'#fff',
  position:'absolute',
  borderRadius:100,
  top:dimension.height*0.1,
  left:dimension.width*0.6/2
}}></View>

</View>)}
</View> 
*/}


<Image style={{
  marginTop:'3%',
  borderRadius:10,
  alignSelf:'center',
  width:dimension.width*0.94,
  height:dimension.height*0.08,
}} source={{uri:'https://image.freepik.com/free-vector/realistic-coming-soon-background_52683-59078.jpg'}} />

{/* 
/////////////////////// scratch code end ////////////////// */}


{/* 
////////////////////////// options code e.g cootez token ////////////////// */}


<View style={{
  width:dimension.width*0.92,
  backgroundColor:'#fff',
  elevation:2,
  marginTop:'2%',
  paddingVertical:4,
  marginBottom:'2%',
  alignSelf:'center',
  borderRadius:10
}}>

<View style={{
  width:dimension.width*0.92,
  backgroundColor:'#fff',
 
  
}}>


<View style={{
  flexDirection:'row',
  width:dimension.width*0.85,
  marginTop:'4%',
  alignSelf:'center',
  justifyContent:'space-between'
  
}}>

<View style={{
  width:dimension.width*0.09,
  height:dimension.width*0.09,
  borderRadius:100,
  backgroundColor:'#C4C4C44d',
  justifyContent:'center'
}}>
   <Icon style={{alignSelf:'center',}} name="game-controller" color={'#13A6F2'} size={20}/>
</View>

<View style={{
  left:dimension.width*-0.1,
   justifyContent:'center'
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontWeight:'700',
  fontSize:RFValue(12),
  fontStyle:'normal'
}}>Cootz Token</Text>
</View>

<View style={{
 width:dimension.width*0.09,
 height:dimension.width*0.09,
  backgroundColor:'#C4C4C44d',
  justifyContent:'center',
  borderRadius:100
}}>
<Icon3 style={{alignSelf:'center'}} name="arrow-right" color={'#13A6F2'} size={20}/>
 
</View>
</View>
</View>



<View style={{
  width:dimension.width*0.88,
  borderBottomWidth:2,
  marginTop:'1%',
  alignSelf:'center',
  borderBottomColor:'#E3E3E3'

}}></View>


<View style={{
  width:dimension.width*0.92,
  backgroundColor:'#fff',

}}>


<View style={{
  flexDirection:'row',
  width:dimension.width*0.85,
  marginTop:'2%',
  alignSelf:'center',
  justifyContent:'space-between'
  
}}>

<View style={{
  width:dimension.width*0.09,
  height:dimension.width*0.09,
  borderRadius:100,
  justifyContent:'center',
  backgroundColor:'#C4C4C44d'
}}>
   <Icon style={{alignSelf:'center'}} name="browsers" color={'#13A6F2'} size={20}/>
</View>

<View style={{
  left:dimension.width*-0.1,
justifyContent:'center'
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontWeight:'700',
  fontSize:RFValue(12),
  fontStyle:'normal'
}}>Your Coupons</Text>
</View>

<View style={{
 width:dimension.width*0.09,
 height:dimension.width*0.09,
  backgroundColor:'#C4C4C44d',
  borderRadius:100,
  justifyContent:'center'
}}>
<Icon3 style={{alignSelf:'center',}} name="arrow-right" color={'#13A6F2'} size={20}/>
 
</View>
</View>
</View>



<View style={{
  width:dimension.width*0.88,
  borderBottomWidth:2,
  marginTop:'1%',
  alignSelf:'center',
  borderBottomColor:'#E3E3E3'

}}></View>



<View style={{
  width:dimension.width*0.92,
  backgroundColor:'#fff',
  
}}>


<View style={{
  flexDirection:'row',
  width:dimension.width*0.85,
  marginTop:'2%',
  alignSelf:'center',
  justifyContent:'space-between'
  
}}>

<View style={{
  width:dimension.width*0.09,
  height:dimension.width*0.09,
  borderRadius:100,
  backgroundColor:'#C4C4C44d',
  justifyContent:'center'
}}>
   <Icon style={{alignSelf:'center'}} name="wallet" color={'#13A6F2'} size={20}/>
</View>

<View style={{
  left:dimension.width*-0.1,
   justifyContent:'center'
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontWeight:'700',
  fontSize:RFValue(12),
  fontStyle:'normal'
}}>Bonus Cash</Text>
</View>

<View style={{
 width:dimension.width*0.09,
 height:dimension.width*0.09,
  backgroundColor:'#C4C4C44d',
  borderRadius:100,
  justifyContent:'center'
}}>
<Icon3 style={{alignSelf:'center'}} name="arrow-right" color={'#13A6F2'} size={20}/>
 
</View>
</View>
</View>




</View>

{/* 
//////////////////////////////////////////////  box code end //////////////////////// */}

{/* 
//////////////////////////////////////////////  modal code start //////////////////////// */}




<Modal  visible={show} transparent={true}>
 

<View style={{
  flex:1,
  backgroundColor:'#0000004d',
  justifyContent:'flex-end'
}}>



<StatusBar backgroundColor={'#0000004d'}></StatusBar>

<View style={{
  height:dimension.height*0.27,
  width:dimension.width,
  backgroundColor:'#fff',
  borderTopRightRadius:40,
  borderTopLeftRadius:40
}}>


  <View style={{
    width:dimension.width*0.85,
    alignSelf:'center',
    marginTop:'4%'
  }}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(13),
  color:'#000000',
  fontWeight:'700'
}}>Enter the amount to be withdraw</Text></View>



{/*//////////////////////////////////////////////  TextInput codecode start //////////////////////// */}


<View style={{ 
  width:dimension.width*0.92,
  height:dimension.height*0.06,
  backgroundColor:'#fff',
  borderRadius:15,
  marginTop:'9%',
  alignSelf:'center',
  elevation:20,
}}>

  <View style={{
    flexDirection:'row',
    width:dimension.width*0.87,
    alignSelf:'center'
  }}>
<View style={{
  backgroundColor:'rgba(196, 196, 196, 0.14)',
  height:dimension.width*0.12,
  width:dimension.width*0.12,
  borderRadius:100,
  justifyContent:'center',
  marginRight:'3%'
}}>
<Icon name="cash" style={{alignSelf:'center',}} color={'#20B3AB'} size={18}/>  
</View>
<TextInput 
style = {{
  elevation : 25,
}}
placeholder =''
onChangeText={(value)=> {(value)} }
placeholderTextColor='#2C358E'
keyboardType='number-pad'
/>
</View>
</View>



{/*//////////////////////////////////////////////  TextInput codecode end //////////////////////// */}
<View style={{
  flexDirection:'row',
  width:dimension.width*0.40,
  marginTop:'6%',
  marginLeft:'5%',
}}>

<View style={{
  paddingVertical:8,
  paddingHorizontal:8,
  backgroundColor:'#2C3590',
  borderRadius:100,
  justifyContent:'center',
  marginTop:'2%'
}}>
  <Icon2 style={{alignSelf:'center',}} name="crown" color={'#fff'} size={15}/>
</View>

<View style={{
  marginLeft:'6%'
}}>
  <Text style={{
    elevation:10,
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    color:'#B7B7B7',
    fontWeight:'700'
  }}>Winning Cash</Text>
    <Text style={{
    elevation:10,
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    color:'#000000',
    fontWeight:'700'
  }}>Rs.1800.00</Text>
</View>
</View>


{/*   
///////////////////////////////// shape code ///////////////////////// */}

<TouchableOpacity 
onPress={()=> navigation.navigate('withdraw')}
style={{
  position:'absolute',
  width:dimension.width*0.55,
  height:dimension.width*0.55,
  borderRadius:1000,
  top:dimension.height*0.1,
  left:dimension.width*0.64,
  backgroundColor:'#20B3A8',
  justifyContent:'center'
}}
>
<Text style={{
 fontSize:RFValue(16),
 position:'absolute',
 color:'#fff',
 fontFamily:'Poppins-Medium',
 left:dimension.width*0.1,
 top:dimension.height*0.1,
 fontWeight:'800',
}}>Withdraw</Text>
</TouchableOpacity>

</View>
</View>
</Modal>





{/*//////////////////////////////////////////////  modal code end //////////////////////// */}





{/* 
//////////////////////////////////////////////  modal code second start //////////////////////// */}




<Modal  visible={add} transparent={true}>
 

<View style={{
  flex:1,
  backgroundColor:'#0000004d',
  justifyContent:'flex-end'
}}>



<StatusBar backgroundColor={'#0000004d'}></StatusBar>

<View style={{
  height:dimension.height*0.27,
  width:dimension.width,
  backgroundColor:'#fff',
  borderTopRightRadius:40,
  borderTopLeftRadius:40
}}>


  <View style={{
    width:dimension.width*0.85,
    alignSelf:'center',
    marginTop:'4%'
  }}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(13),
  color:'#000000',
  fontWeight:'700'
}}>Enter the amount</Text></View>



{/*//////////////////////////////////////////////  TextInput codecode start //////////////////////// */}


<View style={{ 
  width:dimension.width*0.92,
  height:dimension.height*0.06,
  backgroundColor:'#fff',
  borderRadius:15,
  marginTop:'10%',
  alignSelf:'center',
  elevation:20,
}}>

  <View style={{
    flexDirection:'row',
    width:dimension.width*0.87,
    alignSelf:'center'
  }}>
<View style={{
  backgroundColor:'rgba(196, 196, 196, 0.14)',
  height:dimension.width*0.12,
  width:dimension.width*0.12,
  borderRadius:100,
  justifyContent:'center',
  marginRight:'3%'
}}>
<Icon name="cash" style={{alignSelf:'center',}} color={'#20B3AB'} size={18}/>  
</View>
<TextInput 
style = {{
  elevation : 25,
}}
placeholder =''
onChangeText={(value)=> {(value)} }
placeholderTextColor='#2C358E'
keyboardType='number-pad'
style={{  fontSize:RFValue(16), fontFamily:'Poppins-Medium', fontWeight:'600', color:'#2C358E'}}
/>
</View>
</View>



{/*//////////////////////////////////////////////  TextInput codecode end //////////////////////// */}
<View style={{
  flexDirection:'row',
  width:dimension.width*0.40,
  marginTop:'6%',
  marginLeft:'5%',
}}>


  <Icon2 style={{alignSelf:'center',marginLeft:'3%'}} name="wallet" color={'#20B3A8'} size={15}/>


<View style={{
  marginLeft:'10%'
}}>
  <Text style={{
    elevation:10,
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    color:'#B7B7B7',
    fontWeight:'700'
  }}>Balance : 10,000</Text>
   
</View>
</View>


{/*   
///////////////////////////////// shape code ///////////////////////// */}

<TouchableOpacity 
onPress={()=> navigation.navigate('withdraw')}
style={{
  position:'absolute',
  width:dimension.width*0.55,
  height:dimension.width*0.55,
  borderRadius:1000,
  top:dimension.height*0.1,
  left:dimension.width*0.64,
  backgroundColor:'#20B3A8',
  justifyContent:'center'
}}
>
<Text style={{
 fontSize:RFValue(16),
 color:'#fff',
 position:'absolute',
 left:dimension.width*0.17,
 top:dimension.height*0.1,
 fontFamily:'Poppins-Medium',
 fontWeight:'800'
}}>Next</Text>
</TouchableOpacity>

</View>
</View>
</Modal>





{/*//////////////////////////////////////////////  modal code end //////////////////////// */}






   </View>
  
)

}
export default Wallet;