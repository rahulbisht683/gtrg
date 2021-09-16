import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
import TabNavigator from './navigation/TabNavigator'
import { LoginSignUpScreen } from "./navigation/StackNavigator";

import SystemNavigationBar from "react-native-system-navigation-bar";


const App = () => {
  
 
  const [check , setCheck] = useState(false)
  return (
    <NavigationContainer>
    {check ? (
      <DrawerNavigator/>
      ) : (
        <LoginSignUpScreen/>
      )}
    </NavigationContainer>
  );
};

export default App;