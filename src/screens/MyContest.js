
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



const MyContest = () => {

    return(
        <View
        style= {{
            flex : 1,
            backgroundColor : "#fff",

        }}>
<StatusBar backgroundColor={"#fff"}></StatusBar>
       
<View style={{
  flexDirection:'row',
marginTop:'5%',
alignSelf:'center',
width:dimension.width*0.92
}}>

<Pressable onPress={()=> navigation.navigate('LeaderBoard')}>
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

}}>MyContest</Text>
</View>
</View>


        </View>

    )
}
export default MyContest;