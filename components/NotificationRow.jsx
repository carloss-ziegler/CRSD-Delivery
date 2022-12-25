import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const NotificationRow = ({ imgUrl, title, subtitle, date }) => {
  return (
    <TouchableOpacity className="bg-gray-100 p-5">
      <View className="flex-row justify-between">
        <View className="flex-row justify-start">
          <Image source={imgUrl} className="h-14 w-14 rounded-lg bg-white" />
          <View className="">
            <Text className="ml-4 font-medium">{title}</Text>
            <Text className="ml-4 mt-1">{subtitle}</Text>
          </View>
        </View>
        <View>
          <Text className="font-medium text-xs">{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationRow;
