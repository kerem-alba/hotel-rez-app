import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

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
    color: colors.PRIMARY_COLOR,
    textShadowColor: colors.SECONDARY_COLOR,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  headerTwo: {
    fontSize: 48,
    color: colors.SECONDARY_COLOR,
  },
});
