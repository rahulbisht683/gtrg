import'react-native-gesture-handler';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import completed  from '../src/screens/TopNavigation/completed';
import live from '../src/screens/TopNavigation/live';
import upcoming from '../src/screens/TopNavigation/Upcoming';
import { ContestStackNavigator } from './StackNavigator';

import {View,
 Text,
StyleSheet,
SafeAreaView,Image,Pressable,
TouchableOpacity,FlatList,
ScrollView,
Modal,
TextInput,
ImageBackground,
StatusBar,} from 'react-native'
import ScratchView from 'react-native-scratch'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import { dimension } from '../src/utils'
import CustomHeader from '../src/Components/CustomHeader';
import { color } from 'react-native-reanimated';
import CurrentPortfoilio from '../src/screens/PortfolioTab/CurrentPortfolio';
import ExecutePortfolio from '../src/screens/PortfolioTab/ExecutePortfolio';

const Tab = createMaterialTopTabNavigator();

const  PortfolioTabs=()=> {
  return (
    <Tab.Navigator 

    screenOptions={{
      tabBarLabelStyle: { fontSize: 14, color:'#fff', fontFamily:'Poppins-Medium',
    fontWeight:'800' },
      tabBarStyle: { backgroundColor: '#20B3A8', },
      tabBarItemStyle: { height:40 },
    }}
    tabBarOptions = {{
      indicatorStyle : {backgroundColor : "#FEB800"},
      
    }}>
      <Tab.Screen name="Current Portfolio" component={CurrentPortfoilio}  />
      <Tab.Screen name="Executed Portfolio" component={ExecutePortfolio}    />
    </Tab.Navigator>
  );
 
}



export default PortfolioTabs;