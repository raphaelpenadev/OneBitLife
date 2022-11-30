import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function Start() {
  return (
    <View>
      <ScrollView showVerticalScrollIndicator={false} />
      <View>
        <Image source={require("../../assets/icons/logo3.png")}
        />
        <Text>
          Vamos transformar sua vida {"/n"} em jogo. Buscando sempre {"/n"} o melhor nível.
        </Text>
      </View>
    </View>
  );
}