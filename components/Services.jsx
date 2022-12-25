import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Services = ({ title, subtitle, icon }) => {
  return (
    <TouchableOpacity className="mr-5 mt-5">
      <View className="items-center justify-center">
        <View className="w-16 h-16 items-center justify-center rounded-full border border-gray-300">
          <Image source={icon} className="w-14 h-14 rounded-full" />
        </View>
        <View className="items-center justify-center mt-2">
          <Text className="text-xs">{title}</Text>
          <Text className="text-xs">{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Services;
