import React, { useState } from "react";
import { View, Text, Modal, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";

interface DateSelectorModalProps {
  visible: boolean;
  onClose: (data: { startDate: Date; endDate: Date }) => void;
}

export default function DateSelectorModal({ visible, onClose }: DateSelectorModalProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartPickerVisible, setIsStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setIsEndPickerVisible] = useState(false);

  const handleApply = () => {
    onClose({ startDate, endDate });
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => onClose({ startDate, endDate })}>
      <Pressable style={styles.overlay}>
        <Pressable style={styles.background} onPress={handleApply} />

        <View style={styles.modalContainer}>
          <Text style={styles.title}>Tarih Seç</Text>

          <TouchableOpacity onPress={() => setIsStartPickerVisible(true)} style={styles.dateContainer}>
            <Text style={styles.label}>Giriş Tarihi:</Text>
            <Text style={styles.dateText}>{startDate.toLocaleDateString("tr-TR")}</Text>
          </TouchableOpacity>
          {isStartPickerVisible && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setIsStartPickerVisible(false);
                if (date) setStartDate(date);
              }}
            />
          )}

          <TouchableOpacity onPress={() => setIsEndPickerVisible(true)} style={styles.dateContainer}>
            <Text style={styles.label}>Çıkış Tarihi:</Text>
            <Text style={styles.dateText}>{endDate.toLocaleDateString("tr-TR")}</Text>
          </TouchableOpacity>
          {isEndPickerVisible && (
            <DateTimePicker
              value={endDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setIsEndPickerVisible(false);
                if (date) setEndDate(date);
              }}
            />
          )}

          <Pressable style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.buttonText}>Uygula</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
}
