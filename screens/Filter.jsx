import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import {
  ChevronDoubleDownIcon,
  DotsHorizontalIcon,
  FastForwardIcon,
  TagIcon,
  XIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Filters from "../components/Filters";
import CategoryFilter from "../components/CategoryFilter";

const Filter = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <View className="sticky flex-row items-center justify-between h-20 p-5 shadow border-b border-gray-300">
        <TouchableOpacity onPress={navigation.goBack}>
          <XIcon size={24} color="#00CCBB" />
        </TouchableOpacity>
        <Text className="font-semibold -ml-6">FILTROS</Text>
        <View></View>
      </View>

      <View className="p-4 border-b border-gray-300 bg-white">
        <Filters
          title="Ordenar"
          icon={<ChevronDoubleDownIcon size={20} color="gray" opacity={0.6} />}
        />
        <Filters
          title="Classificação de higiene"
          icon={<DotsHorizontalIcon size={20} color="gray" opacity={0.6} />}
        />
        <Filters
          title="Ofertas"
          icon={<TagIcon size={20} color="gray" opacity={0.6} />}
        />
        <Filters
          title="Dietético"
          icon={<FastForwardIcon size={20} color="gray" opacity={0.6} />}
        />
      </View>

      <Text className="text-lg font-bold p-4 mt-3">Categorias</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 w-full"
      >
        <View className="border-y border-gray-300 p-3 bg-white">
          <CategoryFilter title="20% de desconto nos locais favoritos (4)" />
          <CategoryFilter title="30% de desconto na retirada (5)" />
          <CategoryFilter title="Açaí (1)" />
          <CategoryFilter title="Álcool (36)" />
          <CategoryFilter title="Asiática (44)" />
          <CategoryFilter title="Burger King (17)" />
          <CategoryFilter title="Mexicana (12)" />
        </View>
      </ScrollView>

      <View className="items-center justify-end flex-2 p-3 w-full shadow bg-white">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="w-96 bg-[#00CCBB] items-center p-4 rounded"
        >
          <Text className="font-bold text-white">Concluído</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;
