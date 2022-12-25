import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CheckIcon } from "react-native-heroicons/solid";

const CategoryFilter = ({ title }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setIsPressed(!isPressed)}
      className="justify-center border-b border-gray-300 h-12 p-2"
    >
      <View className="flex-row items-center justify-between">
        <Text>{title}</Text>
        <View className="items-center justify-center border-[2px] rounded border-gray-400 h-6 w-6">
          {isPressed && (
            <View className="bg-[#00CCBB] h-6 w-6 items-center justify-center rounded">
              <CheckIcon color="#FFF" size={18} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryFilter;
