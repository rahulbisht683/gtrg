import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { dimension } from "../../utils";

const ExecutePortfolio = () => {

const [buy , setBuy] = useState(true)

const data =[
  {
    name:'BANKNIFTY',
    date:'16 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'80.00',
    lots:'2/1',
    sale:'Sell'
  },
  {
    name:'TATA',
    date:'10 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'28.00',
    lots:'7/1',
    sale:'Buy'
  },
  {
    name:'JIO',
    date:'18 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'99.00',
    lots:'2/1',
    sale:'Buy'
  },
  {
    name:'GOOGLE',
    date:'16 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'95.00',
    lots:'2/5',
    sale:'Sell'
  },
  {
    name:'FACEBOOK',
    date:'16 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'100.00',
    lots:'2/1',
    sale:'Buy'
  },
  {
    name:'FACEBOOK',
    date:'16 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'100.00',
    lots:'2/1',
    sale:'Buy'
  },
  {
    name:'FACEBOOK',
    date:'16 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'100.00',
    lots:'2/1',
    sale:'Buy'
  },
  {
    name:'FACEBOOK',
    date:'16 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'100.00',
    lots:'2/1',
    sale:'Buy'
  },
  {
    name:'FACEBOOK',
    date:'16 Sept 2021',
    volume:'CE 37000.00',
    completed:'Carry Forward',
    price:'100.00',
    lots:'2/1',
    sale:'Buy'
  },
]

  return (
<View style={{
  flex:1,
backgroundColor:'#fff',

}}>

<ScrollView>

{data.map((item,index) => ( 

<View key={index} style={{
    marginTop:'2%',
    alignSelf:'center',
    width:dimension.width*0.92,
    borderRadius:10,
    marginBottom:'2%',
    backgroundColor:'#fff',
    elevation:2,
    overflow:'hidden'
}}>

<View style={{
  justifyContent:'space-between',
  flexDirection:'row',
  padding:12,
}}>

<View>
<View style={{
  flexDirection:'row'
}}>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(14),
  color:'#000000',
  fontStyle:'normal',
  fontWeight:'600'
}}>{item.name}</Text>

<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(10),
  marginLeft:'2%',
  color:item.sale == 'Buy' ? 'green': '#FEB800',
  fontStyle:'normal',
  fontWeight:'600'
}}>{item.sale}</Text>
</View>

<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  color:'#B2B2B2' ,
  fontStyle:'normal',
  fontWeight:'600'
}}>{item.date}</Text>

<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  color:'#B2B2B2',
  fontStyle:'normal',
  fontWeight:'600'
}}>{item.volume}</Text>
</View>
<View>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  color:'#20B3A8',
  fontStyle:'normal',
  fontWeight:'600'
}}>Executed</Text> 

<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  color:'#B2B2B2',
  fontStyle:'normal',
  fontWeight:'600'
}}>{item.completed}</Text>
</View>
</View>

<View style={{
  backgroundColor:'#4CD4CA',
  padding:12,
  justifyContent:'space-between',
  flexDirection:'row'
}}>

<View>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  color:'#fff',
  fontStyle:'normal',
  fontWeight:'600',
  textAlign:'center',
}}>Order Price</Text>

<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(16),
  color:'#00000055',
  fontStyle:'normal',
  textAlign:'center',
  fontWeight:'600'
}}>₹ {item.price}</Text>
</View>


<View>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  color:'#fff',
  textAlign:'center',
  fontStyle:'normal',
  fontWeight:'600'
}}>Executed Lot</Text>

<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(16),
  color:'#00000055',
  textAlign:'center',
  fontStyle:'normal',
  fontWeight:'600'
}}>{item.lots}</Text>
</View>

<View>
<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(12),
  color:'#fff',
  fontStyle:'normal',
  textAlign:'center',
  fontWeight:'600'
}}>Executed Price</Text>

<Text style={{
  fontFamily:'Poppins-Medium',
  fontSize:RFValue(16),
  color:'#fff',
  fontStyle:'normal',
  textAlign:'center',
  fontWeight:'600'
}}>₹ {item.price}</Text>
</View>
</View>



</View>
))}

</ScrollView>
</View>
  );
}
export default ExecutePortfolio;