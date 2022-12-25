import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Coupon = ({ title, subtitle, button, date }) => {
  return (
    <View className="w-96 items-center justify-center rounded-lg mb-3 shadow bg-gray-50">
      <View className="w-96 h-48 border border-gray-300 rounded-lg p-4">
        <View className="flex-row items-center">
          <Image source={require("../assets/ticket.png")} className="w-8 h-8" />
          <Text className="ml-2 font-semibold">{title}</Text>
        </View>

        <View className="mt-3">
          <Text className="text-gray-600">{subtitle}</Text>

          <TouchableOpacity className="w-full mt-4 border-[1.5px] border-[#00CCBB] rounded items-center p-2">
            <Text className="text-xs font-semibold">Ver {button}</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row mt-4 items-center justify-between">
          <TouchableOpacity>
            <Text className="text-[#00CCBB] font-semibold">Ver regras</Text>
          </TouchableOpacity>
          <Text className="text-gray-400">Válido até {date}</Text>
        </View>
      </View>
    </View>
  );
};

export default Coupon;
