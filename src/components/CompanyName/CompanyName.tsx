import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../utils/colors";

export default function CompanyName() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerOne}>hotel</Text>
        <Text style={styles.headerTwo}>rez</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    flexDirection: "row",
    marginTop: 10,
  },

  headerOne: {
    fontSize: 48,
    color: PRIMARY_COLOR,
    textShadowColor: SECONDARY_COLOR,
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 2,
  },
  headerTwo: {
    fontSize: 48,
    color: SECONDARY_COLOR,
    textShadowColor: SECONDARY_COLOR,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
