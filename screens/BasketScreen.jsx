import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MinusCircleIcon,
  XCircleIcon,
  TrashIcon,
} from "react-native-heroicons/solid";

import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupItems, setGroupItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const total = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItems(groupedItems);
  }, [items]);

  async function handleOrder() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    navigation.navigate("Preparing");
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Carrinho</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBB" size={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={require("../assets/motoboy.png")}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Aproximadamente • 50-75 min</Text>
          <TouchableOpacity onPress={navigation.goBack}>
            <Text className="text-[#00CCBB]">Alterar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupItems).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="BRL" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  {items.length > 1 && (
                    <MinusCircleIcon color="#00CCBB" size={40} />
                  )}
                  {items.length === 1 && (
                    <TrashIcon color="#00CCBB" size={40} />
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Subtotal</Text>
            <Text className="text-gray-500">
              <Currency quantity={total} currency="BRL" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Taxa de entrega</Text>
            <Text className="text-gray-500">
              <Currency quantity={5.0} currency="BRL" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="font-extrabold">Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={5.0 + total} currency="BRL" />
            </Text>
          </View>

          <TouchableOpacity
            disabled={!items.length}
            onPress={handleOrder}
            className={`rounded-lg ${
              !items.length ? `bg-gray-300` : `bg-[#00CCBB]`
            } p-4`}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-center text-white text-xl font-bold">
                Realizar o pedido
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
