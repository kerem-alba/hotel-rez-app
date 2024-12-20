import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={"black"} size={"large"} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: colors.BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
});
