import { View, Text } from "react-native";
import React from "react";
import { ThumbUpIcon } from "react-native-heroicons/outline";

const Helper = ({ text }) => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="font-medium mb-2">• {text}</Text>
      <ThumbUpIcon size={20} color="#00CCBB" />
    </View>
  );
};

export default Helper;
