import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { Card, ListItem, Button, Icon } from "react-native-elements";

import {
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";

const styles = {
  language: {
    padding: 10,
  },
  color: {
    color: "#00ff00",
  },
};

export default function LanguageModals() {
  const [language, setLanguage] = useState(null);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setLanguage(data));
  }, []);
  console.log(language);
  if (language === null)
    return <ActivityIndicator size="large" color="#00ff00" />;
  return (
    <SafeAreaProvider>
      <ScrollView>
        <FlatList
          data={language}
          renderItem={({ item }) => (
            <Card containerStyle={{ padding: 0 }}>
              <Text style={styles.color}>
                Language(s) spoken in {item.name} :
              </Text>
              <FlatList
                data={item.languages}
                renderItem={({ item }) => <Text>{item.name}</Text>}
              />
            </Card>
          )}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
}
