import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import {
  ChevronLeftIcon,
  CreditCardIcon,
  PlusIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import PaymentMethod from "../components/PaymentMethod";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Services from "../components/Services";

const Payment = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <View>
        <View className="flex-row items-center justify-between p-4">
          <TouchableOpacity onPress={navigation.goBack}>
            <ChevronLeftIcon size={24} color="#00CCBB" />
          </TouchableOpacity>
          <Text className="font-medium -ml-6">PAGAMENTOS</Text>
          <View></View>
        </View>
      </View>

      <View className="items-center mt-5">
        <View className="w-96 h-32 bg-white rounded-lg p-4 justify-between shadow-sm">
          <Text className="font-medium">Saldo</Text>
          <View>
            <Text className="text-gray-500 text-xs">Saldo disponível</Text>
            <Text className="text-gray-500 text-lg">R$ 10.589,56</Text>
          </View>
        </View>
      </View>

      <View className="bg-white flex-1 mt-6">
        <View className="p-5">
          <View className="flex-row items-center justify-between">
            <Text className="font-bold text-lg text-gray-700">
              Formas de pagamento
            </Text>
            <TouchableOpacity className="">
              <Text className="text-[#00CCBB] text-sm">Ver todas</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PaymentMethod
              title="Cadastrar"
              subtitle="novo cartão"
              icon={<PlusIcon size={24} color="#00CCBB" />}
            />
            <PaymentMethod
              title="Pagamento"
              subtitle="Apple Pay"
              icon={
                <FontAwesome.Button
                  name="apple"
                  color="#00CCBB"
                  backgroundColor="white"
                />
              }
            />
            <PaymentMethod
              title="Ver todas formas"
              subtitle="de pagamento"
              icon={<CreditCardIcon color="#00CCBB" size={24} />}
            />
          </ScrollView>

          <Text className="font-bold text-lg mt-6 text-gray-700">
            Outros serviços
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Services
              title="Resgatar"
              subtitle="CRSD Card"
              icon={require("../assets/creditCard.png")}
            />
            <Services
              title="Habilitar"
              subtitle="Face ID"
              icon={require("../assets/faceId2.png")}
            />
            <Services
              title="Comprar"
              subtitle="CRSD Card"
              icon={require("../assets/buyIcon.jpg")}
            />
            <Services
              title="Meus cupons"
              icon={require("../assets/couponIcon.png")}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
