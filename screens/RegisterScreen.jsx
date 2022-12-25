import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { auth } from "../firebase";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const navigation = useNavigation();

  async function handleRegister() {
    if (email && password && userName) {
      setIsLoading(true);

      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          await updateProfile(auth.currentUser, {
            displayName: userName,
          });
          Toast.show({
            type: "success",
            text1: "Registrado",
            text2: "Usuário registrado",
            visibilityTime: 2500,
          });
          navigation.navigate("Login");
        })
        .catch((error) => {
          console.log(error);
        });
      setIsLoading(false);
    } else {
      Toast.show({
        type: "info",
        text1: "Ocorreu um erro",
        text2: "Preencha todos os campos",
        visibilityTime: 2500,
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        className="flex-1 bg-[#FFF]"
      >
        <Animatable.View
          animation="fadeInLeft"
          className="mt-8 flex-row items-center justify-between mb-12 px-5"
        >
          <Animatable.Image
            animation="flipInY"
            source={require("../assets/deliveryLogo.jpeg")}
            className="w-24 h-24 rounded-full"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="w-24 items-center justify-center rounded h-9 bg-[#00CCBB]"
          >
            <Text className="text-white font-bold">Login</Text>
          </TouchableOpacity>
        </Animatable.View>

        <View className="px-7">
          <Text className="mb-5 font-bold text-3xl">Criar conta</Text>
          <Text className="text-gray-500 text-sm font-medium">
            Comece agora!
          </Text>
          <Text className="text-gray-500 text-sm font-medium">
            Crie uma conta e mate sua fome
          </Text>
        </View>

        <Animatable.View
          animation="fadeInUp"
          className="w-full mx-4 self-center p-5"
        >
          <View className="flex-row items-center justify-start mt-4 rounded bg-gray-100">
            <View className="opacity-50">
              <Entypo.Button
                name="user"
                backgroundColor="rgb(243, 244, 246)"
                color="#000"
              />
            </View>
            <TextInput
              onChangeText={(text) => setUserName(text)}
              keyboardType="default"
              value={userName}
              placeholder="Nome de usuário"
              className="flex-grow h-12 outline-none border-0"
              style={{ fontSize: "16px" }}
              placeholderTextColor="#c1c1c1"
              returnKeyType="next"
              returnKeyLabel="seguinte"
            />
          </View>

          <View className="flex-row items-center justify-start mt-4 rounded bg-gray-100">
            <View className="opacity-50">
              <Entypo.Button
                name="mail"
                backgroundColor="rgb(243, 244, 246)"
                color="#000"
              />
            </View>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              placeholder="example@gmail.com"
              value={email}
              className="flex-grow h-12 outline-none border-0"
              style={{ fontSize: "16px" }}
              placeholderTextColor="#c1c1c1"
              returnKeyType="next"
              returnKeyLabel="seguinte"
            />
          </View>

          <View className="flex-row items-center mt-6 rounded bg-gray-100">
            <View className="flex-row items-center">
              <View className="opacity-50">
                <Entypo.Button
                  name="lock"
                  backgroundColor="rgb(243, 244, 246)"
                  color="#000"
                />
              </View>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                type="password"
                value={password}
                placeholder="******"
                className="h-12 flex-grow outline-none border-0"
                style={{ fontSize: "16px" }}
                secureTextEntry={hidePassword}
                placeholderTextColor="#c1c1c1"
                returnKeyType="send"
                returnKeyLabel="Enviar"
                onSubmitEditing={handleRegister}
              />
              <TouchableOpacity
                disabled={!password}
                onPress={() => setHidePassword(!hidePassword)}
                className={`mr-2 ${!password && "opacity-30"}`}
              >
                {hidePassword ? (
                  <Ionicons name="eye" color="#000" size={25} />
                ) : (
                  <Ionicons name="eye-off" color="#000" size={25} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleRegister}
            className="bg-[#00CCBB] w-full rounded-md py-4 mt-6 items-center"
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white font-bold items-center justify-center text-xl">
                Registrar
              </Text>
            )}
          </TouchableOpacity>
        </Animatable.View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Register;
