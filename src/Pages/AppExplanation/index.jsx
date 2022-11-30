import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native-gesture-handler';

import DefaultButton from '../../Components/Common/DefaultButton';

export default function AppExplanation() {

  function handleSetShowHome() {
    console.log("Botão Clicado");
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>
            Antes, deixa {"\n"} eu te explicar....
          </Text>
          <Text style={styles.descriptionCTA}>
            Pronto(a) para subir de nível na vida?
          </Text>
          <Text style={styles.description}>
            Na proxima tela você vai poder escolher {"\n"}
            seus quatro habitos de forma individual.
          </Text>
          <DefaultButton
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,21,21,0.98)"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40
  },
  descriptionCTA: {
    color: "white",
    fontWeight: "Bold",
    fontSize: 16,
    maarginTop: 20,
    marginBottom: 10
  },
  description: {
    color: "white",
    textAlign: "center",
    marginBottom: 30
  }
});