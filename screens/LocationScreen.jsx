import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeftIcon,
  FolderOpenIcon,
  HomeIcon,
  LocationMarkerIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import Locations from "../components/Locations";

const LocationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity onPress={navigation.goBack}>
          <ChevronLeftIcon size={24} color="#00CCBB" />
        </TouchableOpacity>
        <Text className="font-medium text-xs -ml-6">ENDEREÇO DE ENTREGA</Text>
        <View></View>
      </View>

      <View className="items-center">
        <View className="bg-gray-100 w-96 h-[42px] rounded p-1 justify-center">
          <View className="ml-3 flex-row">
            <SearchIcon size={18} color="#00CCBB" />
            <TextInput
              className="ml-3"
              placeholder="Buscar endereço e número"
            />
          </View>
        </View>
      </View>

      <View className="mt-4 p-5 justify-center">
        <View className="flex-1 items-center flex-row">
          <LocationMarkerIcon opacity={0.6} size={26} color="gray" />
          <View className="ml-5">
            <Text className="mb-1 text-[16px] font-semibold">
              Usar minha localização atual
            </Text>
            <Text className="text-gray-400 text-[16px]">Qi 5 - Gama (DF)</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        className="flex-1 p-4 bg-gray-100"
      >
        <Locations
          title="Sind Qi 5, 1580"
          title2="Pte. Alta Norte (Gama)"
          title3="Brasília/DF"
          title4="Apt X Torre Y, Edifício Z"
          location="Casa"
          icon={<HomeIcon opacity={0.6} size={24} color="gray" />}
        />
        <Locations
          title="St. Leste Projeção A"
          title2="Gama Leste"
          title3="Brasília/DF"
          title4="72444-240"
          location="Trabalho"
          icon={<FolderOpenIcon opacity={0.6} size={24} color="gray" />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationScreen;
