import { Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

const ListItem = ({ data }) => {
  return (
    <TouchableOpacity className="mt-3">
      <ImageBackground
        source={{ uri: data.photoUrl }}
        className="w-44 mx-2 h-20 rounded p-3 bg-white"
        style={{ backgroundColor: data.backgroundColor }}
        resizeMode="contain"
      >
        <Text className="text-gray-100 font-semibold">{data.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ListItem;
