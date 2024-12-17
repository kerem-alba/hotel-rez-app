import { View, Modal, StyleSheet, TouchableOpacity, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import { BACKGROUND_COLOR, BACKGROUND_COLOR_DARKER, BACKGROUND_COLOR_LIGHTER } from "../../utils/colors";

interface SearchBoxModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SearchBoxModal({ visible, onClose }: SearchBoxModalProps) {
  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <Pressable style={styles.overlay}>
        <Pressable style={styles.background} onPress={onClose} />
        <View style={styles.modalContainer}>
          <View style={styles.content}>
            <SearchBox onClose={onClose} />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    width: "100%",
    padding: 2,
    backgroundColor: BACKGROUND_COLOR_LIGHTER,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
