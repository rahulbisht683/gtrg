import React, {useState} from 'react'
import {
    Text,
    TextInput,
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    StatusBar,
    FlatList,
    ScrollView,
  
} from 'react-native'
import Slider from '@react-native-community/slider'
import LinearGradient from 'react-native-linear-gradient'
import { dimension } from '../../utils'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RFValue } from 'react-native-responsive-fontsize';
const Home = ({onPress,navigation}) => {

    const Data = [
        {image : require('../../../assets/Home/image.png'),
        title : "Mario Forever United Contest",
        EntryAmount : "1000",
        key : 1},
        {image : require('../../../assets/Home/image.png'),
        title : "Mario Forever United Contest",
        EntryAmount : "1000",
        key : 2,},
        {image : require('../../../assets/Home/image.png'),
        title : "Mario Forever United Contest",
        EntryAmount : "1000",
        key : 3,},
        {image : require('../../../assets/Home/image.png'),
        title : "Mario Forever United Contest",
        EntryAmount : "1000",
        key : 4,},
        {image : require('../../../assets/Home/image.png'),
        title : "Mario Forever United Contest",
        EntryAmount : "1000",
        key : 5,},
        {image : require('../../../assets/Home/image.png'),
        title : "Mario Forever United Contest",
        EntryAmount : "1000",
        key : 6,},
        {image : require('../../../assets/Home/image.png'),
        title : "Mario Forever United Contest",
        EntryAmount : "1000",
        key : 7,},
    ]
   


    const [sideMenue , setSideMenue] = useState(false)
    const [el , setEl] = useState(false)

    return(
        <SafeAreaView
        style={{
            flex : 1,
        }}>
     
        <View style={{
            backgroundColor : "#4cd4ca",
            position : "absolute",
            left : dimension.width*-0.3,
            top :  dimension.height*-0.5,
            height : dimension.height*0.71,
            width : dimension.width*1.6,
            borderRadius : 1000,
        }}></View>
           <StatusBar backgroundColor = "#4cd4ca"></StatusBar>

        <View>
        
        
        
       
       
        <View
        style = {styles.searchBox}>
        

        <TextInput
        style ={{
            textDecorationColor : "white",
            fontWeight : "bold",
            width : "80%",
            fontSize:RFValue(14)
        }}
        placeholder = "Search"
        placeholderTextColor = "black"
        

        />
        <Icon
        style = {{
            color : "#4cd4ca"
        }}
        name = "search" size = {20}/>
        </View>


        <View
        style ={{
            marginTop: "4%",
            height : dimension.height*0.13,
            width : dimension.width*0.9,
           borderRadius : 15,
           overflow : "hidden",
            backgroundColor : "white",
            alignItems : "center",
            alignSelf : "center",
            elevation : 2
        }}>
        
        <View
        style={{
           
            backgroundColor : "white",
            flexDirection : "row",
            width : "100%",
            justifyContent: "space-between",
            paddingLeft : "5%",
            marginTop : "3%"
            
        }}>
        
        <Text
        style={{
            fontSize: RFValue(14),
            color : "black",
            fontWeight : "bold",
        }}>Cootz Quiotent
        </Text>
        <View
        style={{
            
            flexDirection : "row",
            alignItems : "center",
            overflow : "hidden",
            
        }}>
        <LinearGradient
        colors={['#20B3A8', '#2C3590']}
        
        
        useAngle={true}
            angle={120} 
            angleCenter={{ x: 0.4, y: 0.5}} 
        style={{
            height : dimension.height*0.04,
            width  : dimension.width*0.09,
            borderRadius : 500,
            marginRight : "-8%",
            
            elevation : 2,
            alignItems : "center",
            justifyContent : "center"
            
        }}>
        <Image
        style = {{
            height  : 16,
            width : 17
        }}
         source={require('../../../assets/Home/Group.png')}></Image>
        </LinearGradient>
        <View
        style={{
            backgroundColor : "#295998",
            height : dimension.height*0.03,
            width : dimension.width*0.18,
        }}></View>
       
        </View>
        
        </View>


        <View
        style={{
            width : "100%",
            
        }}>
        <View
        style={{
            flexDirection : "row",
            backgroundColor : "white",
            width : "100%",
            justifyContent : "space-between",
            paddingHorizontal : "5%",
            marginTop : "2%"
        }}>
        <Text
        style={{
            color : "#7B7B7B",
            fontSize:RFValue(14)
        }}>Contact Fees
        </Text>
        <View>
        <Text
        style= {{
            color : "#4cd4ca",
            fontSize:RFValue(14)
        }}>
        Rs 200
        </Text>
        </View>
        </View>

    
        <Slider
        style={{
            marginTop : "1%",
            width : "100%",
            
        }}
        minimumValue={14}
         maximumValue={71}
         step={5}
         thumbTintColor = "#4cd4ca">

        </Slider>
        
        
        
        </View>


       

        </View>
       

        </View>

        <View
        style = {{
            marginLeft : "5%",
            marginTop : "3%",
            marginBottom : "1%"
        }}>
        <Text
        style={{
            fontFamily : "Poppins-Regular",
            fontSize : RFValue(14),
            fontWeight : "bold"
        }}>All Contest</Text>
        </View>
        <FlatList
        data = {Data}
        showsVerticalScrollIndicator={false}
       
        scrollEnabled = {true}
        
        contentContainerStyle={{paddingBottom: 10}}
        keyExtractor = {item => `key${item.key}`}
        renderItem = {({item}) => (
           
            <View
            style ={{
                width : dimension.width*0.95,
                elevation : 1,
                borderRadius : 10,
                flexDirection : 'row',
                backgroundColor : "white",
                alignSelf : "center",
                marginTop : "2%",
                justifyContent : "space-between",
                height : dimension.height*0.09,
                alignItems : "center",
                overflow : "hidden",
                paddingLeft : "1.3%",
                marginBottom : "1.5%"

            }}>
            <Image
            style= {{
                height : "85%",
                width : "20%",
                borderRadius : 10,
            }}
             source = {item.image}></Image>
            <Text
            style={{
                color : "#A6A6A6",
                fontFamily : "Poppins-Regular",
                fontSize : RFValue(12),
                fontWeight : "600",
                marginLeft : "2%",
            }}>{item.title}</Text>
            <LinearGradient
            colors={['#FEB800', '#FA7202']}
        
        
        useAngle={true}
            angle={120} 
            angleCenter={{ x: 0.4, y: 0.5}}
            style={{
                
                marginRight : "-1%",
                borderTopLeftRadius : 500,
                height : "100%",
                width : "25%",
                justifyContent : "center",
                paddingLeft : "4%"
                
            }}>
            <Text
            style={{
                color : "#FFFFFF",
                fontFamily : "Poppins-Regular" ,
                fontSize : RFValue(9),
                fontWeight : "500",
                alignSelf : "center"
                
            }}
            >Entry Fee</Text>
            <Text
            style={{
                color : "#FFFFFF",
                fontFamily : "LuckiestGuy-Regular",
                fontSize : RFValue(18),
                alignSelf : "center"
            }}
            
            
            >{item.EntryAmount}</Text>
            </LinearGradient>


            
            </View>
            
        )}></FlatList>
       

       


        

    

        </SafeAreaView>
    )
}
export default Home;

const styles = StyleSheet.create({
    searchBox : {
        marginTop : "6%",
        alignSelf : "center",
        width : dimension.width * 0.9,
        height :dimension.height*0.06,
        backgroundColor : "#FFFFFF",
        flexDirection : "row",
        borderRadius : 10,
       
        alignItems : "center",
        paddingHorizontal : "4%",
        justifyContent : "space-between"

    }
})