import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import EditProfileOption from "../components/EditProfileOption";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const EditProfile = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    await signOut(auth)
      .then(() => {
        navigation.reset({
          routes: [{ name: "Welcome" }],
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
    setLoading(false);
  }

  return (
    <>
      <View className="flex-row mx-3 items-center justify-between mt-10 mb-5">
        <TouchableOpacity
          className="flex-row items-center flex-1"
          onPress={navigation.goBack}
        >
          <ChevronLeftIcon size={28} color="#00CCBB" />
          <Text className="text-[#00ccbb] text-lg">Perfil</Text>
        </TouchableOpacity>
        <Text className="font-medium flex-1">EDITAR PERFIL</Text>
        <View className="flex-1" />
      </View>

      <View className="p-3 mt-2 h-20 w-full justify-center">
        <TouchableOpacity className="border border-gray-300 rounded h-[74px] w-96 justify-center px-3">
          <View className="w-full h-12 flex-row items-center justify-between">
            <View className="flex-row items-center ">
              <Image
                source={require("../assets/svgIcon.png")}
                className="w-10 h-10 rounded"
              />
              <View className="ml-3">
                <Text className="font-semibold">Conta mais segura</Text>
                <Text className="font-medium text-xs">
                  Faça a verificação do seu celular
                </Text>
              </View>
            </View>
            <ChevronRightIcon size={20} color="#00CCBB" />
          </View>
        </TouchableOpacity>
      </View>

      <View className="mt-7 flex-1">
        <EditProfileOption
          title="Informações pessoais"
          subtitle="Nome completo e CPF"
          route=""
        />
        <EditProfileOption
          title="Dados de contato"
          subtitle="E-mail e telefone de contato"
          route=""
        />
        <EditProfileOption
          title="Credenciais"
          subtitle="Meios de acesso a sua conta"
          route=""
        />

        <TouchableOpacity onPress={logout} className="p-4">
          {loading ? (
            <ActivityIndicator size="large" color="#00CCBB" />
          ) : (
            <Text className="text-red-500 text-lg font-semibold">Sair</Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditProfile;
