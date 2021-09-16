import 'react-native-gesture-handler'
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Contact from "../screens/Contact";
import forget from '../src/screens/LoginSignUp/forget';

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
import live from '../src/screens/TopNavigation/live';
import upcoming from '../src/screens/TopNavigation/Upcoming';
import MyTabs from './TopNavigator';
import completed from '../src/screens/TopNavigation/completed';
import Profile from  '../src/screens/Profile';


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
      <Stack.Screen name="Portfolio" component={Portfolio} />
      <Stack.Screen name="Winners" component={Winners} />
      
    </Stack.Navigator>
  );
};


const LoginSignUpScreen = () => {
  return (

    <Stack.Navigator headerMode='none' initialRouteName = 'SignUp'>
      <Stack.Screen name="Splash" component = {splash} />
      <Stack.Screen name="SignUp" component = {SignUp} />
      <Stack.Screen name='withdraw' component = {withdraw} />
  
    <Stack.Screen name = "MyTabs" component = {MyTabs}  />
    <Stack.Screen name = 'Settings' component ={Settings} />
    <Stack.Screen name ="otpScreen" component = {otpScreen}/>
    <Stack.Screen name ='forget' component = {forget} />
    <Stack.Screen name = "OtpVerification" component = {OtpVerification}/>
    <Stack.Screen name= "Wallet" component={Wallet} />
    <Stack.Screen name ="Profile" component ={Profile}/>
    <Stack.Screen name = "Dashboard" component = {DrawerNavigator}/>
    <Stack.Screen name = "AddCash" component = {AddCash}/>
    <Stack.Screen name = "LeaderBoard" component = {LeaderBoard} />
    <Stack.Screen name = 'ContestWinners' component = {ContestWinners} />
    <Stack.Screen name = "MyContest" component = {MyContest}/>
    <Stack.Screen name = "MCQScreen" component = {MCQScreen}/>
    <Stack.Screen name = "TutorialScreen" component = {TutorialScreen}/>

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