import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import {
  ChevronRightIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import Basket from "../components/Basket";
import { setRestaurant } from "../features/restaurantSlice";
import Modal from "react-native-modal";
import Helper from "../components/Helper";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_desc,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_desc,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <Modal
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}
        className="items-center"
      >
        <View className="w-80 h-56 p-5 bg-white rounded-lg">
          <View className="flex-row justify-between items-center">
            <Text className="text-black font-bold">Como proceder?</Text>
            <Text>
              <InformationCircleIcon opacity={0.8} color="#00CCBB" size={20} />
            </Text>
          </View>
          <View className="h-36 p-2 mt-2 rounded-lg">
            <Helper text="Procure um médico" />
            <Helper text="Faça exames" />
            <Helper text="Se possível, tome antialérgico" />
            <Helper text="Não provoque vômitos" />
          </View>

          <View className="items-center">
            <TouchableOpacity
              className="items-center w-12"
              onPress={toggleModal}
            >
              <Text className="text-black font-bold">Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Basket />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-10 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="#048444" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  Próximo a • {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_desc}</Text>
          </View>

          <TouchableOpacity
            onPress={toggleModal}
            className="flex-row items-center space-x-2 p-4 border-y border-gray-300"
          >
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Tem alergia a alguma comida?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_desc}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
