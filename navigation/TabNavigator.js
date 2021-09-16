import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon4 from 'react-native-vector-icons/FontAwesome5'
import { MainStackNavigator, ContactStackNavigator } from './StackNavigator'
import Portfolio from '../src/screens/BottomNavigation/Portfolio';
import Winners from '../src/screens/BottomNavigation/Winners';
import Funds from '../src/screens/BottomNavigation/Funds';
import ContestWinner from '../src/screens/LoginSignUp/ContestWinners'
import Market from '../src/screens/BottomNavigation/Market';
import Home from '../src/screens/BottomNavigation/Home';
import CustomHeader from '../src/Components/CustomHeader';
import {StyleSheet,
    Text,
    TouchableOpacity,Button,onPress,
    View,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { dimension } from '../src/utils';
import Wallet from '../src/screens/LoginSignUp/Wallet';
import PortfolioTabs from './PortfolioTab';
import { RFValue } from 'react-native-responsive-fontsize';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      
    }}
    >
    <Tab.Screen name = "Home"
    component = {Home}
    options = {({navigation}) => {
        return{
            headerTitle : () => <CustomHeader navigation = {navigation}/>,
            headerStyle : {backgroundColor :  "#4cd4ca"},
        tabBarIcon : ({focused}) => (
            <Icon4 name = "home" size = {focused? 27 : 24}  
            style = {{color : focused ? '#4cd4ca' : 'grey',}} ></Icon4>
        )
        }
    }
    }
    />

    <Tab.Screen name = "Portfolio" component = {PortfolioTabs}
            options = {({navigation}) => {
                return{
                    tabBarStyle : {
                        height : 0,
                    },
                    headerRight: () => (
                        <View style={{
                          backgroundColor:'rgba(255, 255, 255, 0.2)',
                          paddingVertical:9,
                          paddingHorizontal:10,
                          borderRadius:100,
                         justifyContent:'center',
                         marginRight:dimension.width*0.03
                        }}>
                  <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>     
                 <Icon style={{alignSelf:'center'}} name="person-outline" color={'white'} size={22}/>
                 </TouchableOpacity>   
                        </View>
                     ),
                   
                    headerLeft: () => (
                        <View style={{
                          backgroundColor:'rgba(255, 255, 255, 0.2)',
                        paddingVertical:9,
                        paddingHorizontal:10,
                          borderRadius:100,
                         justifyContent:'center',
                         marginLeft:dimension.width*0.03
                        }}>
                          <TouchableOpacity onPress={()=> navigation.goBack()}>      
                 <Icon style={{alignSelf:'center'}} name="arrow-back" color={'white'} size={22}/>
                 </TouchableOpacity>
                        </View>
                     ),
                  headerStyle:{backgroundColor:'#20B3A8',},
                     headerTitleStyle:{color:'white', fontFamily:'Poppins-Medium', fontSize:RFValue(18), fontStyle:'normal', fontWeight:'800'} ,
                     headerTintColor:'white',
                     headerTitleContainerStyle:{alignSelf:'center', justifyContent:'center',alignItems:'center', height:'100%', width:'70%',},
                     headerTitle:'My Contest' ,
                tabBarIcon : ({focused}) => (
                    <Icon4 name = "briefcase" size = {focused? 27 : 24}  
                    style = {{color : focused ? '#4cd4ca' : 'grey',}} ></Icon4>
                )
                }
            }
            }/>
            <Tab.Screen name = "Winner" component = {ContestWinner}
            options = {() => {
               
                return{
                    tabBarStyle : {
                        height : 0,
                    },
                    headerShown : false,
                tabBarIcon : ({focused}) => (
                    <Icon4 name = "trophy" size = {focused? 27 : 24}  
                    style = {{color : focused ? '#4cd4ca' : 'grey',}} ></Icon4>
                )
                }
            }
            }/>
            <Tab.Screen name = "Market" component = {Market}
            options = {() => {
                return{
                    tabBarStyle : {
                        height : 0,
                    },
                    headerShown : false,
                tabBarIcon : ({focused}) => (
                    <Icon4 name = "store-alt" size = {focused? 27 : 24}  
                    style = {{color : focused ? '#4cd4ca' : 'grey',}} ></Icon4>
                )
                }
            }
            }/>

    <Tab.Screen
     name = "Funds"
    component = {Wallet}
    options = {() => {
        return{
            tabBarStyle : {
                height : 0,
            },
            headerShown : false,
        tabBarIcon : ({focused}) => (
            <Icon4 name = "piggy-bank" size = {focused? 27 : 24}  
            style = {{color : focused ? '#4cd4ca' : 'grey',}} ></Icon4>
        )
        }
    }
    }/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator