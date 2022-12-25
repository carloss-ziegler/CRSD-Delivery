import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const Filters = ({ title, subtitle, icon }) => {
  return (
    <TouchableOpacity className="justify-center border-b border-gray-300 h-12">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center justify-center">
          <Text>{icon}</Text>
          <View className="ml-4">
            <Text className="font-medium">{title}</Text>
          </View>
        </View>
        <ChevronRightIcon size={20} color="#00CCBB" />
      </View>
    </TouchableOpacity>
  );
};

export default Filters;
