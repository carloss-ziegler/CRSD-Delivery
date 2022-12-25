import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import UserSettings from "../components/UserSettings";
import {
  ChatIcon,
  ChevronRightIcon,
  CreditCardIcon,
  HeartIcon,
  LocationMarkerIcon,
  TicketIcon,
} from "react-native-heroicons/outline";

import { BellIcon } from "react-native-heroicons/outline";
import { auth } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const UserScreen = ({ navigation }) => {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const username = user.displayName;
        setUserDisplayName(username);

        const email = user.email;
        setUserEmail(email);
      } else {
      }
    });
  }, []);

  return (
    <SafeAreaView className="px-4">
      <View className="flex-row justify-center p-4">
        <Text className="font-semibold">PERFIL</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit");
        }}
        className="flex-row items-center justify-between my-3 mx-4"
      >
        <View className="items-center flex-row">
          <Image
            source={require("../assets/avatar.png")}
            className="h-16 w-16 rounded-full bg-gray-600 shadow-xl"
          />

          <View className="ml-2">
            <Text className="text-gray-500 font-semibold text-xl">
              Olá, <Text className="text-[#00ccbb]">{userDisplayName}</Text>!
            </Text>
            <Text className="text-gray-400 text-sm">{userEmail}</Text>
          </View>
        </View>

        <ChevronRightIcon color="#00CCBB" size={16} />
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="rounded-tr-2xl rounded-tl-2xl h-full bg-white"
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Location");
          }}
        >
          <UserSettings
            text="Endereço de Entrega"
            icon={
              <LocationMarkerIcon size={24} color="#545454" opacity={0.6} />
            }
            novo="Novo!"
            subtitle="Meus endereços de entrega"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Notification");
          }}
        >
          <UserSettings
            text="Notificações"
            icon={<BellIcon size={24} color="#545454" opacity={0.6} />}
            number="2"
            subtitle="Minha central de notificações"
            page="Notification"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Payment");
          }}
        >
          <UserSettings
            text="Métodos de Pagamento"
            icon={<CreditCardIcon size={24} color="#545454" opacity={0.6} />}
            novo="Novo!"
            subtitle="Meus saldos e cartões"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Coupons");
          }}
        >
          <UserSettings
            text="Cupons"
            icon={<TicketIcon size={24} color="#545454" opacity={0.6} />}
            number="3"
            subtitle="Meus cupons de desconto"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <UserSettings
            text="Chats"
            icon={<ChatIcon size={24} color="#545454" opacity={0.6} />}
            number="9+"
            subtitle="Minhas conversas"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <UserSettings
            text="Favoritos"
            icon={<HeartIcon size={24} color="#545454" opacity={0.6} />}
            novo="Novo!"
            subtitle="Meus locais favoritos"
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;
