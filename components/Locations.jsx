import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  CheckCircleIcon,
  DotsVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import Modal from "react-native-modal";

const Locations = ({ title, title2, title3, title4, location, icon }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Modal
        onBackdropPress={toggleModal}
        className="w-full justify-end m-0"
        isVisible={isModalVisible}
      >
        <View className="w-full h-56 justify-between p-5 bg-white rounded">
          <View className="items-center">
            <Text className="font-semibold text-lg">{location}</Text>
          </View>

          <View className="flex-row justify-between">
            <TouchableOpacity className="rounded items-center justify-center border-[1.1px] border-gray-200 w-44 h-12 p-3">
              <View className="flex-row justify-between items-center w-full">
                <TrashIcon color="gray" size={24} opacity={0.6} />
                <Text>Excluir</Text>
                <View></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="rounded items-center justify-center w-44 h-12 border-[1.1px] border-gray-200 p-3">
              <View className="flex-row justify-between items-center w-full">
                <PencilIcon color="gray" size={24} opacity={0.6} />
                <Text>Editar</Text>
                <View></View>
              </View>
            </TouchableOpacity>
          </View>

          <View className="items-center">
            <TouchableOpacity
              className="items-center w-full"
              onPress={toggleModal}
            >
              <Text className="text-[#e32929] font-semibold">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View className="mb-4 shadow-sm w-full h-28 rounded-lg bg-white border-[#00CCBB] border-[1.1px] justify-center p-4">
        <View className="flex-1 justify-center">
          <View className="flex-row items-center">
            {icon}
            <View className="ml-4 flex-1 w-80">
              <View className="flex-row justify-between">
                <Text className="font-semibold">{location}</Text>
                <View className="flex-row justify-between">
                  <View className="mr-3">
                    <CheckCircleIcon size={20} color="#00CCBB" />
                  </View>
                  <TouchableOpacity onPress={toggleModal}>
                    <DotsVerticalIcon size={22} color="#00CCBB" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text className="text-gray-400">{title}</Text>
              <Text className="text-gray-400">{title2}</Text>
              <Text className="text-gray-400">{title3}</Text>
              <Text className="text-gray-400 mt-1 text-xs">{title4}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Locations;
