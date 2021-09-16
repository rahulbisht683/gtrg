import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator , LoginSignUp ,} from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({navigation,route}) => {
  return (
    <Drawer.Navigator  screenOptions={{
      headerShown : false,
    }}
    drawerContent={props => <DrawerContent navigation {...props}/>}>
      <Drawer.Screen name="LandingPage" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;