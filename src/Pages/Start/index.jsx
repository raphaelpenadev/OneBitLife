import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import DefaultButton from '../../Components/Common/DefaultButton';

import LifeStatus from "../../Components/Common/LifeStatus";

export default function Start() {

  const handleNavAppExplanation = () => {
    console.log("Testando o clique");
  };

  return (
    <View style={styles.container}>
      <ScrollView showVerticalScrollIndicator={false} />
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/icons/logo3.png")}
          style={styles.logo}
        />
        <LifeStatus />
        <Text style={styles.description}>
          Vamos transformar sua vida {"\n"} em jogo. Buscando sempre {"\n"} o melhor nível.
        </Text>

        <DefaultButton
          buttonText={"Continuar"}
          handlePress={handleNavAppExplanation}
          width={200}
          height={50} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,21,21, 0.98)",
    height: "auto"
  },

  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBottom: 20
  },

  description: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60
  }
})