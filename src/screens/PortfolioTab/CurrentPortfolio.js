import React from "react";
import { View, StyleSheet, Text, StatusBar,ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { dimension } from "../../utils";

const CurrentPortfoilio = () => {

    const data =[
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        {
            name :'TATA',
            price:'2000',
            balance:'0.00',
            percent:'₹ 0(+45%)'
        },
        
    ]
  return (
    <View style={{
        flex:1,

    }}>

<StatusBar backgroundColor={'#20B3A8'}></StatusBar>
<View style={{
    backgroundColor:'#E5E5E5',
    padding:20,
 
}}>




<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(14),
    fontStyle:'normal',
    color:'#9D9D9D',
    fontWeight:'600'
}}>Current Porfolio Value</Text>


<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(24),
    fontStyle:'normal',
    color:'#000000',
    fontWeight:'600'
}}>0</Text>

<View style={{
   flexDirection:'row',
   justifyContent:'space-between' ,
   width:dimension.width*0.86,
   alignSelf:'center'
}}>

{/* 
///////////////////// first box code start c////////////////////////// */}

<View style={{
    backgroundColor:'white',
    width:dimension.width*0.40,
    borderRadius:8,
    padding:12
}}>

<Text style={{
    fontSize:RFValue(18),
    fontFamily:'Poppins-Medium',
    fontStyle:'normal',
    fontWeight:'600',
    color:'#000000'
}}>₹ 23,400</Text>

<Text style={{
    marginTop:'15%',
    fontSize:RFValue(12),
    fontFamily:'Poppins-Medium',
    fontStyle:'normal',
    fontWeight:'600',
    color:'#9D9D9D'
}}>Invested 
Value</Text>

</View>

{/* 
/////////////////////////// second box start ////////////////////// */}



<View style={{
    backgroundColor:'white',
    width:dimension.width*0.40,
    borderRadius:8,
    padding:12
}}>
<Text style={{
    fontSize:RFValue(18),
    fontFamily:'Poppins-Medium',
    fontStyle:'normal',
    fontWeight:'600',
    color:'#000000'
}}>-₹ 23,400</Text>

<Text style={{
    fontSize:RFValue(10),
    fontFamily:'Poppins-Medium',
    fontStyle:'normal',
    fontWeight:'600',
    color:'#20B3A8'
}}>(-100.00%)</Text>

<Text style={{
    marginTop:'3%',
    fontSize:RFValue(12),
    fontFamily:'Poppins-Medium',
    fontStyle:'normal',
    fontWeight:'600',
    color:'#9D9D9D'
}}>Unrealized G/L</Text>
</View>

</View>

</View>



<View style={{
paddingBottom:20
}}>


<View style={{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:'6%',
    paddingVertical:'1%',
    borderBottomWidth : 1,
    borderColor : "#DCDCDC"
}}>

 <View style={{
      
 }}>   
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    fontStyle:'normal',
    fontWeight:'600',
    textAlign:'center'
}}>Symbol</Text>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    fontStyle:'normal',
    fontWeight:'600',
    textAlign:'center'
}}>
Quantity</Text>
</View>


<View  style={{
      
 }}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    fontStyle:'normal',
    fontWeight:'600',
    textAlign:'center'
}}>Current 
</Text>

<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    fontStyle:'normal',
    fontWeight:'600',
    textAlign:'center'
}}>Value</Text>

</View>

<View  style={{
      
 }}>
<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    fontStyle:'normal',
    fontWeight:'600',
    textAlign:'center'
}}>LTP  </Text>

<Text style={{
    fontFamily:'Poppins-Medium',
    fontSize:RFValue(12),
    fontStyle:'normal',
    fontWeight:'600',
    textAlign:'center'
}}>Day GL</Text>
</View>
</View>


{/* 
/////////////// map code start ///////////////////////// */}


<ScrollView style={{}}>
{data.map((item,index) => ( 

<View key={index} style={{
    marginTop:'2%',
    alignSelf:'center',
    width:dimension.width*0.94,
    paddingHorizontal:'2%',
    paddingVertical:'2%',
    marginBottom:5,
    flexDirection:'row',
    borderRadius:8,
    justifyContent:'space-between',
    backgroundColor:'white'
}}>


<View style={{
      
    }}>   
   <Text style={{
       fontFamily:'Poppins-Medium',
       fontSize:RFValue(12),
       fontStyle:'normal',
       fontWeight:'600',
       textAlign:'center',
       color:'#20B3A8'
   }}>{item.name}</Text>
   <Text style={{
       fontFamily:'Poppins-Medium',
       fontSize:RFValue(18),
       fontStyle:'normal',
       fontWeight:'600',
       textAlign:'center'
   }}>{item.balance}
   </Text>
   </View>
   
   
   <View  style={{
         
    }}>
   <Text style={{
       fontFamily:'Poppins-Medium',
       fontSize:RFValue(12),
       fontStyle:'normal',
       fontWeight:'600',
       textAlign:'center',
       color:'#20B3A8'
   }}>₹ {item.balance}
   </Text>
   
   <Text style={{
       fontFamily:'Poppins-Medium',
       fontSize:RFValue(12),
       fontStyle:'normal',
       fontWeight:'600',
       textAlign:'center'
   }}>{item.percent}
   </Text>
   
   </View>
   
   <View  style={{
         
    }}>
   <Text style={{
       fontFamily:'Poppins-Medium',
       fontSize:RFValue(12),
       fontStyle:'normal',
       fontWeight:'600',
       textAlign:'center',
       color:'#20B3A8'
   }}>{item.price}</Text>
   
   <Text style={{
       fontFamily:'Poppins-Medium',
       fontSize:RFValue(12),
       fontStyle:'normal',
       fontWeight:'600',
       textAlign:'center'
   }}>₹ -</Text>
   </View>
</View>
))}

</ScrollView>

</View>
    </View>
  );
};



export default CurrentPortfoilio;