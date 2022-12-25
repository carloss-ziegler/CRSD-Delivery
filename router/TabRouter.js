import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import { AntDesign } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <AntDesign name="home" size={24} color={color} />;
            }
            return <AntDesign name="home" size={24} color="#747C7C" />;
          },
          tabBarLabel: "Início",
          tabBarActiveTintColor: "#00CCBB",
          tabBarLabelStyle: "#747C7C",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <AntDesign name="search1" size={24} color={color} />;
            }
            return <AntDesign name="search1" size={24} color="#747C7C" />;
          },
          tabBarLabel: "Buscar",
          tabBarActiveTintColor: "#00CCBB",
          tabBarLabelStyle: "#747C7C",
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <AntDesign name="user" size={24} color={color} />;
            }
            return <AntDesign name="user" size={24} color="#747C7C" />;
          },
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#00CCBB",
          tabBarLabelStyle: "#747C7C",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
