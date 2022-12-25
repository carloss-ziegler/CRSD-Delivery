import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Coupon from "../components/Coupon";

const Coupons = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View>
        <View className="flex-row items-center justify-between p-4">
          <TouchableOpacity onPress={navigation.goBack}>
            <ChevronLeftIcon size={24} color="#00CCBB" />
          </TouchableOpacity>
          <Text className="font-medium -ml-6">CUPONS</Text>
          <View></View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        className="flex-1 mt-2 p-3"
      >
        <View className="h-52 w-80">
          <View className="flex-row p-5 justify-between items-center">
            <View className="flex-row items-center">
              <Image
                source={require("../assets/economia.png")}
                className="w-32 h-32 -ml-4"
              />
              <View className="">
                <Text className="font-extrabold text-lg text-[#00CCBB] ml-1">
                  Economia todo dia
                </Text>
                <Text className="ml-1 font-medium">Cupons por R$ 0.99</Text>
              </View>
            </View>
            <View className="ml-3">
              <ChevronRightIcon size={16} color="#00CCBB" />
            </View>
          </View>
        </View>

        <View className="pb-20">
          <Coupon
            title="R$20 para Farmácia"
            subtitle="Válido para o primeiro pedido na categoria Farmácia acima de R$70."
            button="farmácias"
            date="30/08"
          />
          <Coupon
            title="R$20 para o seu primeiro pedido em Bebidas"
            subtitle="Válido para pedidos acima de R$60. Somente no primeiro pedido."
            button="lojas"
            date="31/08"
          />
          <Coupon
            title="R$10 pra restaurantes selecionados"
            subtitle="Válido pata pedidos acima de R$25. Somente no primeiro pedido."
            button="restaurantes"
            date="31/08"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Coupons;
