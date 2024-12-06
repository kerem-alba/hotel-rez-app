import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BACKGROUND_COLOR, SECONDARY_COLOR } from "../../utils/colors";

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
    backgroundColor: SECONDARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
});
