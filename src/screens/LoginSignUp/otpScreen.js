
import React, {useState} from 'react'
import {View,
 Text,
StyleSheet,
SafeAreaView,
StatusBar,Image,Pressable,
TouchableOpacity,} from 'react-native'

 import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
    
    
  } from 'react-native-confirmation-code-field'; 
import { withDecay } from 'react-native-reanimated';

import { dimension } from '../../utils';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { RFValue } from 'react-native-responsive-fontsize';



const CELL_COUNT = 4
  const otpVarificationcode =({onPress, navigation,route}) =>{
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [value, setValue] = useState();
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });



    
  async function confirmCode(value) {

    try {
      console.log(value)
      console.log(vvff)
      await vvff.confirm(value);
      console.log('phone Verification Success')
    } catch (error) {
      console.log(error);
    }
  }
return(
    <View style={{
      flex:1,
      backgroundColor:'#4cd4ca',

    }}>


      <SafeAreaView>

<View style={{
  height:dimension.height*0.8,
  width:dimension.width
}}>


{/* 
/////////////////////////// arrow code //////////////   */}

<View style={{
width:dimension.width*0.12,
height:dimension.width*0.12,
borderRadius:100,
backgroundColor:"#F1F1F14D",
marginLeft:'5%',
justifyContent:'center',
marginTop:'5%'
}}>
  

<Icon style={{alignSelf:'center',}} name="arrow-back" color={'#fff'} size={32}/>
</View>

{/* 
//////////////////// phn image code ///////////////////////////////// */}



<View style={{
  alignSelf:'center'
}}>

<Image 
source={require('../../../assets/phn.png')}
style={{
  height:dimension.width*0.33,
  width:dimension.width*0.33,
  borderRadius:100
}} />
</View>


{/* 
////////////////////////// headline code ////////////////////////////////////// */}

<View style={{
alignSelf:'center',
marginTop:'2%',
width:dimension.width*0.88

}}>
<Text style={{
  fontSize:RFValue(24),
  textAlign:'center',
  color:'#fff',
  fontFamily:'Poppins-Medium',
  fontWeight:'600',
  fontStyle:'normal',

}}>Enter the code sent to your
mobile number</Text>
</View>

<View style={{
  marginTop:'2%',
  alignSelf:'center',

}}>
  <Text style={{
    color:'#fff',
    fontSize:RFValue(18)
  }}>87******32</Text>
</View>

<View style={{
  width:dimension.width*0.70,
  alignSelf:'center',
  marginTop:'5%'
}}>

<CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
</View>

{/* 
///////////////////////// Resend Otp code ///////////////////// */}

<View style={{
  flexDirection:'row',
  marginTop:'10%',
  width:dimension.width*0.30,
  alignSelf:'center'
}}>
  <Text style={{
    color:'#fff',
    fontWeight:'700',
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(16),
    textAlign:'center',
    marginTop:'2%',
  }}>Resend</Text>
  <Text style={{
     color:'#2E3691',
     fontWeight:'700',
     marginLeft:'2%',
     fontFamily:'Poppins-Medium',
     fontSize:RFValue(19),
     textAlign:'center'
  }}>OTP</Text>
</View>

</View>



<View style={{
  height:dimension.height*0.2,
  width:dimension.width
}}>

  <Image 
  style={{
    height:'90%',
    width:dimension.width
  }}
  source={require('../../../assets/Rshape.png')}
  />
  



</View>

<Pressable
onPress={()=> navigation.navigate('Dashboard')}
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
}}>Next</Text>
</Pressable>
      </SafeAreaView>
      
    </View>
)
  }
  export default otpVarificationcode;

  
const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 50,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    color:'#fff',
    borderBottomWidth: 2,
    borderColor: '#fff',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#fff',
  },
});

