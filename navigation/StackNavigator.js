import 'react-native-gesture-handler'
import React from "react";
import {StyleSheet,
  Text,
  TouchableOpacity,Button,
  View,} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Contact from "../screens/Contact";
import forget from '../src/screens/LoginSignUp/forget';
import LoginSignUp from "../src/screens/LoginSignUp/LoginSignUp";
import OtpVerification from "../src/screens/LoginSignUp/OtpVerification";
import Funds from  '../src/screens/BottomNavigation/Funds'
import Home from  '../src/screens/BottomNavigation/Home'
import Market from  '../src/screens/BottomNavigation/Market'
import Portfolio from  '../src/screens/BottomNavigation/Portfolio'
import Winners from  '../src/screens/BottomNavigation/Winners'
import DrawerNavigator from "./DrawerNavigator";
import Settings from '../src/screens/Settings';
import AddCash from "../src/screens/AddCash";
import otpScreen from '../src/screens/LoginSignUp/otpScreen'
import LeaderBoard from '../src/screens/LeaderBoard';
import MyContest from '../src/screens/MyContest'
import MCQScreen from '../src/screens/Trivia Screens/MCQScreen'
import TutorialScreen from '../src/screens/TutorialScreen';
import splash from '../src/screens/Splash';
import ContestWinners from '../src/screens/LoginSignUp/ContestWinners';
import SignUp from '../src/screens/LoginSignUp/SignUp';
import Wallet  from '../src/screens/LoginSignUp/Wallet';
import withdraw from '../src/screens/LoginSignUp/withdraw';
import Icon from 'react-native-vector-icons/Ionicons'
import live from '../src/screens/TopNavigation/live';
import upcoming from '../src/screens/TopNavigation/Upcoming';
import MyTabs from './TopNavigator';
import completed from '../src/screens/TopNavigation/completed';
import Profile from  '../src/screens/Profile';
import { dimension } from '../src/utils';
import { RFValue } from 'react-native-responsive-fontsize';
import PortfolioTabs from './PortfolioTab';

const Stack = createStackNavigator();


const MainStackNavigator = () => {
  return (
    <Stack.Navigator headerMode = 'none' >
      <Stack.Screen name="Home" component={Home} options = {()=> {
        return{
          title : () => <View></View>
        }
          
        
      }} />
      <Stack.Screen name="Funds" component={Funds} />
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen name="Portfolio" component={PortfolioTabs}
      options = 
      {{headerStyle:{backgroundColor:'#23B4A9', height:dimension.height*0.07},
      headerLeft: () => (
        <View style={{
          backgroundColor:'rgba(255, 255, 255, 0.2)',
          paddingVertical:9,
          paddingHorizontal:10,
          borderRadius:100,
         justifyContent:'center',
         marginLeft:dimension.width*0.03
        }}>
          
 <Icon style={{alignSelf:'center'}} name="arrow-back" color={'#FFFFFF'} size={30}/>
        </View>
     ),
      headerTitleStyle:{color:'white', fontFamily:'Poppins-Medium', fontSize:RFValue(18), fontStyle:'normal', fontWeight:'800'} ,
      headerTintColor:'white',
      headerTitleContainerStyle:{alignSelf:'center', justifyContent:'center',alignItems:'center', height:'100%', width:'70%',},
      title:'My Contest' ,}}  />
      <Stack.Screen name="Winners" component={Winners} />
      
    </Stack.Navigator>
  );
};


const LoginSignUpScreen = () => {
  return (

    <Stack.Navigator  initialRouteName = 'Dashboard'>
      <Stack.Screen name="Splash" component = {splash} options ={{headerShown :false}} />
      <Stack.Screen name="SignUp" component = {SignUp}  options ={{headerShown :false}} />
      <Stack.Screen name='withdraw' component = {withdraw}  options ={{headerShown :false}} />
    <Stack.Screen name = "LoginSignUp" component = {LoginSignUp}  options ={{headerShown :false}}/>
    <Stack.Screen name = "MyTabs" component = {MyTabs} options = 
     {{headerStyle:{backgroundColor:'#23B4A9', height:dimension.height*0.07},
     headerLeft: () => (
       <View style={{
         backgroundColor:'rgba(255, 255, 255, 0.2)',
         height:dimension.width*0.10,
         width:dimension.width*0.10,
         borderRadius:100,
        justifyContent:'center',
        marginLeft:dimension.width*0.03
       }}>
         
<Icon style={{alignSelf:'center'}} name="arrow-back" color={'#FFFFFF'} size={30}/>
       </View>
    ),
     headerTitleStyle:{color:'white', fontFamily:'Poppins-Medium', fontSize:RFValue(18), fontStyle:'normal', fontWeight:'800'} ,
     headerTintColor:'white',
     headerTitleContainerStyle:{alignSelf:'center', justifyContent:'center',alignItems:'center', height:'100%', width:'70%',},
     title:'My Contest' ,}} />
    <Stack.Screen name = 'Settings' component ={Settings}  options ={{headerShown :false}} />
    <Stack.Screen name ="otpScreen" component = {otpScreen}  options ={{headerShown :false}}/>
    <Stack.Screen name ='forget' component = {forget}  options ={{headerShown :false}} />
    <Stack.Screen name = "OtpVerification" component = {OtpVerification}  options ={{headerShown :false}}/>
    <Stack.Screen name= "Wallet" component={Wallet}  options ={{headerShown :false}} />
    <Stack.Screen name ="Profile" component ={Profile}  options ={{headerShown :false}}/>
    <Stack.Screen name = "Dashboard" component = {DrawerNavigator}  options ={{headerShown :false}}/>
    <Stack.Screen name = "AddCash" component = {AddCash}  options ={{headerShown :false}} />
    <Stack.Screen name = "LeaderBoard" component = {LeaderBoard}   options ={{headerShown :false}} />
    <Stack.Screen name = 'ContestWinners' component = {ContestWinners}  options ={{headerShown :false}} />
    <Stack.Screen name = "MyContest" component = {MyContest}  options ={{headerShown :false}} />
    <Stack.Screen name = "MCQScreen" component = {MCQScreen}  options ={{headerShown :false}}/>
    <Stack.Screen name = "TutorialScreen" component = {TutorialScreen}  options ={{headerShown :false}}/>

    </Stack.Navigator>
  )
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator headerMode = "none" >
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );




};
export { MainStackNavigator, ContactStackNavigator, LoginSignUpScreen  };