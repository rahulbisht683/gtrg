import React from 'react';
import { createBottomTabNavigator , useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Icon4 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { MainStackNavigator, ContactStackNavigator } from './StackNavigator'
import Portfolio from '../src/screens/BottomNavigation/Portfolio';
import Winners from '../src/screens/BottomNavigation/Winners';
import Funds from '../src/screens/BottomNavigation/Funds';
import ContestWinner from '../src/screens/LoginSignUp/ContestWinners'
import Market from '../src/screens/BottomNavigation/Market';
import Home from '../src/screens/BottomNavigation/Home';
import CustomHeader from '../src/Components/CustomHeader';
import Wallet from '../src/screens/LoginSignUp/Wallet';
import LeaderBoard from '../src/screens/LeaderBoard';
import { dimension } from '../src/utils';

const Tab = createBottomTabNavigator();



const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    
    >
    <Tab.Screen name = "Home"
    component = {Home}
    options = {({navigation}) => {
        return{
            tabBarStyle : {
                height : dimension.height*0.07,
                alignItems : "center",
                alignContent  : "center",
                justifyContent : "center"
            },
            
            headerTitle : () => <CustomHeader navigation = {navigation}/>,
            headerStyle : {backgroundColor :  "#4cd4ca"},
        tabBarIcon : ({focused}) => (
            <Icon name = "home-filled" size = {focused? 27 : 24}  
            style = {{color : focused ? '#4cd4ca' : 'grey',}} />
        )
        }
    }
    }
    />

    <Tab.Screen name = "Portfolio" component = {Funds}
            options = {({navigation}) => {
                return{
                    tabBarStyle : {
                        height : dimension.height*0.07,
                        alignItems : "center",
                        alignContent  : "center",
                        justifyContent : "center"
                    },
                    
                    headerShown : false,
                    headerTitle : () => <CustomHeader navigation = {navigation}/>,
                tabBarIcon : ({focused}) => (
                    <Icon name = "business-center" size = {focused? 27 : 24}  
                    style = {{color : focused ? '#4cd4ca' : 'grey',}} />
                )
                }
            }
            }/>
            <Tab.Screen name = "Winners" component = {LeaderBoard}
            options = {() => {
               
                return{
                    tabBarStyle : {
                        height : 0,
                        alignItems : "center",
                        alignContent  : "center",
                        justifyContent : "center"
                    },
                    headerShown : false,
                tabBarIcon : ({focused}) => (
                    <Icon name = "emoji-events" size = {focused? 27 : 24}  
                    style = {{color : focused ? '#4cd4ca' : 'grey',}} />
                )
                }
            }
            }/>
            <Tab.Screen name = "Market" component = {Market}
            options = {() => {
                return{
                    tabBarStyle : {
                        height : dimension.height*0.07,
                        alignItems : "center",
                        alignContent  : "center",
                        justifyContent : "center"
                    },
                    headerShown : false,
                tabBarIcon : ({focused}) => (
                    <Icon name = "storefront" size = {focused? 27 : 24}  
                    style = {{color : focused ? '#4cd4ca' : 'grey',}} />
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
                alignItems : "center",
                alignContent  : "center",
                justifyContent : "center"
            },
            headerShown : false,
        tabBarIcon : ({focused}) => (
            <Icon name = "trending-up" size = {focused? 27 : 24}  
            style = {{color : focused ? '#4cd4ca' : 'white',
        backgroundColor : "grey",
        borderRadius : 50,
    paddingRight : 3,
paddingVertical : 1.5,}} />
        )
        }
    }
    }/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator