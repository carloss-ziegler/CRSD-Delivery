import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";

const UserSettings = ({ text, icon, number, novo, subtitle }) => {
  return (
    <View className="border-b border-gray-200">
      <View className="flex-row mt-3 p-4 justify-between items-center">
        <View className="flex-row items-center">
          <Text>{icon}</Text>
          <View className="">
            <Text className="font-medium ml-2">{text}</Text>
            <Text className="text-sm text-gray-300 ml-2">{subtitle}</Text>
          </View>
        </View>
        <View className="flex-row items-center">
          {number ? (
            <View className="w-5 h-5 mr-2 rounded-full bg-red-600 items-center justify-center">
              <Text className="font-bold text-white text-xs">{number}</Text>
            </View>
          ) : (
            <View className="w-11 h-5 mr-2 rounded-full bg-red-600 items-center justify-center">
              <Text className="font-bold text-white text-xs">{novo}</Text>
            </View>
          )}

          <ChevronRightIcon color="#00CCBB" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UserSettings;
