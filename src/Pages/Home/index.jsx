import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LifeStatus from "../../Components/Common/LifeStatus";
import CreateHabit from "../../Components/Home/CreateHabit";
import EditHabit from "../../Components/Home/EditHabit";
import StatusBar from "../../Components/Home/StatusBar";

export default function Home() {
  const navigation = useNavigation();
  const [mindHabit, setMindHabit] = useState();
  const [moneyHabit, setMoneyHabit] = useState();
  const [bodyHabit, setBodyHabit] = useState();
  const [funHabit, setFunHabit] = useState();

  function handleNavExplanation() {
    navigation.navigate("AppExplanation");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>
          <LifeStatus />
          <StatusBar />
          <CreateHabit habitArea="Mente" borderColor="#90B7F3" />

          {mindHabit ? (
            <EditHabit
              habit={"Habito 01"}
              frequency={"Todos os dias as 10:30"}
              habitArea={"Mente"}
              chackcolor="#90B7F3" />
          ) : (
            <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
          )}

          <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
          <CreateHabit habitArea="Corpo" borderColor="#FF0044" />
          <CreateHabit habitArea="Humor" borderColor="#FE7F23" />
        </View>
        <Text style={styles.explanation}
          onPress={() => {
            handleNavExplanation();
          }}>
          Ver explicação novamente
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,21,21, 0.98)",
  },

  dailyChecks: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 40,
  },
  explanation: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 25,
  },
});