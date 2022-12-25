import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrder from "./screens/PreparingOrder";
import RestaurantScreen from "./screens/RestaurantScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { store } from "./store";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register";
import RegisterScreen from "./screens/RegisterScreen";
import Toast from "react-native-toast-message";
import Notification from "./screens/Notification";
import Payment from "./screens/Payment";
import Coupons from "./screens/Coupons";
import LocationScreen from "./screens/LocationScreen";
import Filter from "./screens/Filter";
import EditProfile from "./screens/EditProfile";
import TabNavigation from "./router/TabRouter";
import SplashScreen from "./screens/SplashScreen";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <>
      <Provider store={store}>
        <TailwindProvider>
          <NavigationContainer>
            <StatusBar style="dark" />
            <Stack.Navigator>
                  <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Welcome"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Login"
                    component={Register}
                    options={{ presentation: "modal", headerShown: false }}
                  />
                  <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ presentation: "modal", headerShown: false }}
                  />              
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="Initial"
                    component={TabNavigation}
                  />
                  <Stack.Screen
                    name="Restaurant"
                    component={RestaurantScreen}
                  />
                  <Stack.Screen
                    name="Basket"
                    component={BasketScreen}
                    options={{ presentation: "modal", headerShown: false }}
                  />
                  <Stack.Screen
                    name="Filter"
                    component={Filter}
                    options={{ presentation: "modal", headerShown: false }}
                  />
                  <Stack.Screen
                    name="Edit"
                    component={EditProfile}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    options={{ title: "Notificações", headerShown: false }}
                    name="Notification"
                    component={Notification}
                  />
                  <Stack.Screen
                    options={{ title: "PAGAMENTOS", headerShown: false }}
                    name="Payment"
                    component={Payment}
                  />
                  <Stack.Screen
                    options={{ title: "Coupons", headerShown: false }}
                    name="Coupons"
                    component={Coupons}
                  />
                  <Stack.Screen
                    options={{ title: "Location", headerShown: false }}
                    name="Location"
                    component={LocationScreen}
                  />
                  <Stack.Screen
                    name="Preparing"
                    component={PreparingOrder}
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="Delivery"
                    component={DeliveryScreen}
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
            </Stack.Navigator>
          </NavigationContainer>
        </TailwindProvider>
      </Provider>
      <Toast />
    </>
  );
}

export default App;
