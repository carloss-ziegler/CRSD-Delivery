import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import { useLayoutEffect, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ListItem from "../components/ListItem";
import { dummyData } from "../assets/dummyData/dummyData";

const SearchScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(dummyData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (input === "") {
      setList(dummyData);
    } else {
      setList(
        dummyData.filter(
          (item) => item.name.toLowerCase().indexOf(input.toLowerCase()) > -1
        )
      );
    }
  }, [input]);

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <View
            className={`m-4 px-2 py-3 flex-row items-center bg-white shadow-sm rounded ${
              Platform.OS === "android" && "mt-4"
            }`}
          >
            <AntDesign name="search1" size={20} color="#00ccbb" />
            <TextInput
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Buscar em todo o app"
              className="ml-3 flex-1"
            />
          </View>

          <Text className="ml-4 mt-2 font-semibold text-xl">Categorias</Text>

          <View className="items-center">
            <FlatList
              data={list}
              contentContainerStyle={{
                flex: 1,
              }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ListItem data={item} />}
              numColumns={2}
            />
          </View>
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SearchScreen;
