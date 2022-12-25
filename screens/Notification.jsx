import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import NotificationRow from "../components/NotificationRow";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="bg-white">
        <View className="flex-row items-center justify-between p-4">
          <TouchableOpacity onPress={navigation.goBack}>
            <ChevronLeftIcon size={24} color="#00CCBB" />
          </TouchableOpacity>
          <Text className="font-medium -ml-6">NOTIFICAÇÕES</Text>
          <View></View>
        </View>

        <NotificationRow
          title="Ei, até 10% de desconto!"
          subtitle="Pegue esse cupom por R$0,99."
          imgUrl={require("../assets/ifood.jpg")}
          date="25/08"
        />
        <NotificationRow
          title="Novidade no CRSD Card"
          subtitle="Seus pontos podem virar pedidos"
          imgUrl={require("../assets/vector-county-fair-ticket.webp")}
          date="19/08"
        />
        <NotificationRow
          title="O Melhor Hamburguer"
          subtitle="Peça o melhor perto de você!"
          imgUrl={require("../assets/ifoodNoti.jpg")}
          date="12/09"
        />
      </View>
    </SafeAreaView>
  );
};

export default Notification;
