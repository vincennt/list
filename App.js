import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import List from "./components/List";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <List />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
