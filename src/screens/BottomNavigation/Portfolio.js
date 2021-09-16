import { data } from 'browserslist'
import React , {useState} from 'react'
import {Text,
View,
TouchableOpacity,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { dimension } from '../../utils'


const Portfolio = ({navigation,route}) => {

    const Data = [
        {
            name: "Scratch Card",
            arrow: "greater-than",
            iconName: "ticket-alt",
            ViewColor : "grey"
        },
        {
            name: "Cootz Token",
            arrow: "greater-than",
            iconName: "tenge",
            ViewColor : "grey"
        },
        {
            name: "Coupons",
            arrow: "greater-than",
            iconName: "clone",
            ViewColor : "white"
        },
    ]
    const CashData = [
        
        {
            name: "Winning Cash",
            Cash : "₹ 22",
            arrow: "greater-than",
            iconName: "crown",
            tag: "Withdraw",
            ViewColor : "grey"
        },
        {
            name: "Coupons",
            arrow: "greater-than",
            Cash: "₹ 50",
            iconName: "building",
            tag: "Add Cash",
            ViewColor : "grey"
            
        },
        {
            name: "Coupons",
            arrow: "greater-than",
            Cash : "₹60",
            iconName: "gift",
            tag: "Earn More",
            ViewColor : "white"
        },
    ]
    return(
        <View
       style = {{
           flex : 1,
           
       }}>
       <View
       style={{
           flexDirection : "row",
           padding : "2%",
           alignItems  : "center"

       }}>
       <Icon 
       style={{
           color : "black"
       }}
       name = "arrow-alt-circle-left" size ={23}/>
       <Text
       style = {{
           marginLeft : '5%',
           fontWeight : "bold",
           fontSize : 20,
       }}> Wallet</Text>
       </View>

       <View
       style={{
           marginTop : "9%",
           paddingHorizontal  : "2%"
       }}>
       <Text
       style={{
           fontWeight : "bold",
           fontSize : 20,
           
       }}>
       Offers
       </Text>

       </View>
       <View
       style = {{
           width : dimension.width*0.95,
           backgroundColor : "white",
           elevation : 2,
           paddingHorizontal : "4%",
           alignSelf : "center",
           borderRadius : 7,
           marginTop  : "1%"
       }}>
       {Data.map((item,index)=>(
           <View
           key={index}>
           <TouchableOpacity
           
           style={{
            flexDirection : "row",
            paddingVertical : "2%"
        }}>
          
           <Icon
           style={{
               color : "black",
           }}
           name = {item.iconName}  size = {25}/>
           <Text
           style ={{
               marginLeft : "2%",
               fontSize : 18,
           }}>
           {item.name}
           </Text>
           <View
           style = {{
            flex : 1,
            paddingRight : "4%",
            alignItems : "flex-end"
        }}>
           <Icon
           style={{
               color : "grey"
           }}
           name = {item.arrow} size = {20}/>
           </View>
           
           </TouchableOpacity>
           <View
           style={{
               alignSelf : "center",
               height : 2,
               width : dimension.width*0.85,
               backgroundColor : item.ViewColor,
           }}></View>
           </View>
       ))}
       </View>

       <View
       style={{
           width : dimension.width*0.97,
           alignSelf : "center",
           marginTop  : "10%"
       }}>
       <Text
       style={{
           fontSize : 20,
           fontWeight :"bold"
       }}>
       Cash Balance
       </Text>
       </View>
       <View
       style = {{
        width : dimension.width*0.95,
        backgroundColor : "white",
        elevation : 2,
        paddingHorizontal : "4%",
        alignSelf : "center",
        borderRadius : 7,
        marginTop  : "1%"
    }}>
    

    <View
           
           style={{
            flexDirection : "row",
            paddingVertical : "2%",
            alignItems : "center"
        }}>
          
           <Icon
           name = 'rupee-sign'  size = {20}/>
           <Text
           style ={{
               marginLeft : "2%",
               fontSize : 18,
           }}>
           322 
           </Text>
           <View
           style = {{
            flex : 1,
            paddingRight : "4%",
            alignItems : "flex-end",
            justifyContent : "center",

        }}>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('AddCash')}}>
           <Text
           style={{
               paddingHorizontal : '3%',
               paddingVertical : "1%",
               borderRadius : 5,
               backgroundColor : "#4cd4ca"
           }}>
           ADD CASH</Text>
           </TouchableOpacity>
           </View>
           
           </View>
           <View
           style={{
               alignSelf : "center",
               height : 2,
               width : dimension.width*0.85,
               backgroundColor : "grey",
               
           }}></View>
           {CashData.map((item,index)=> (
               <View
               key = {index}>

               <TouchableOpacity
               style={{
                   flexDirection: "row",
                   paddingVertical : "2%",
                   alignItems : "center"

               }}>
               <Icon
               style={{
                   color : "black"
               }}
               name= {item.iconName} size ={20}></Icon>
               <View
               style={{
                   marginLeft : "2%"
               }}>
               <Text>{item.name}</Text>
               <Text>{item.Cash}</Text>
               </View>
                <View
                style={{
                    alignItems : 'flex-end',
                    paddingRight : '4%',
                    flex : 1,

                }}>
                <Text
                style={{
                    fontSize : 17,
                    fontWeight : "bold",
                    color : "grey"
                }}>
                {item.tag}
                </Text>
                </View>

               </TouchableOpacity>
               <View
               style={{
                   height : 2,
                   width : dimension.width*0.85,
                   backgroundColor : item.ViewColor,
               }}>

               </View>
               
               </View>
               
           ))}
           <TouchableOpacity>
           </TouchableOpacity>
    
   
       </View>



       </View>
    )
}
export default Portfolio;