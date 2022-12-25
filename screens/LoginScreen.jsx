import { View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("screen");
  const SIZES = {
    width,
    height,
  };

  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: "#00CCBB",
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  const slides = [
    {
      id: 1,
      title: "Descubra os Melhores Lugares",
      description: "Veja quais são os restaurantes próximos a você!",
      image: require("../assets/onboarding/asset2.png"),
    },
    {
      id: 2,
      title: "Escolha Sua Comida Favorita",
      description: "Selecione um prato do tamanho da sua fome!",
      image: require("../assets/onboarding/asset1.png"),
    },
    {
      id: 3,
      title: "Retire Sua Entrega",
      description:
        "Seu pedido será entregue na porta de sua casa em poucos minutos!",
      image: require("../assets/onboarding/asset3.png"),
    },
  ];

  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              padding: 15,
              paddingTop: 70,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: SIZES.width - 80,
                height: 400,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                fontWeight: "700",
                color: "#000",
                fontSize: 22,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 5,
                color: "#000",
              }}
            >
              {item.description}
            </Text>
          </View>
        );
      }}
      activeDotStyle={{
        backgroundColor: "#00CCBB",
        width: 30,
      }}
      showSkipButton
      renderNextButton={() => buttonLabel("Próximo")}
      renderSkipButton={() => buttonLabel("Pular")}
      renderDoneButton={() => buttonLabel("Entendi")}
      onDone={() => {
        navigation.navigate("Login");
      }}
    />
  );
};

export default LoginScreen;
