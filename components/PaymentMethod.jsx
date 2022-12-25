import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const PaymentMethod = ({ icon, title, subtitle }) => {
  return (
    <TouchableOpacity className="mr-2 p-3 border justify-between border-gray-300 rounded-lg mt-4 w-36 h-32">
      <View className="flex-1">
        <View className="flex-1 justify-between">
          <Text className="font-medium text-sm">{icon}</Text>
          <View className="justify-end">
            <Text className="text-xs">{title}</Text>
            <Text className="font-bold">{subtitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentMethod;
