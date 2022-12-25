import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/solid";

const EditProfileOption = ({ title, subtitle, route }) => {
  return (
    <TouchableOpacity className="w-full px-4 pb-3">
      <View className="flex-row pb-4 border-b border-gray-300 items-center justify-between">
        <View>
          <Text className="font-semibold text-gray-700">{title}</Text>
          <Text className="text-xs text-gray-500 font-medium">{subtitle}</Text>
        </View>
        <ChevronRightIcon color="gray" opacity={0.8} size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default EditProfileOption;
