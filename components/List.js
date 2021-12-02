import React from "react";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import LanguageModals from "./LanguageModals";

export default function List(props) {
  const [coutries, setCountries] = useState(null);
  const [isModalVisible, setisModalVisible] = useState(false);

  const handlePressTrue = () => {
    setisModalVisible(true);
    console.log(isModalVisible);
  };
  const handlePressFalse = () => {
    setisModalVisible(false);
    console.log(isModalVisible);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  if (coutries === null)
    return <ActivityIndicator size="large" color="#00ff00" />;

  return (
    <ScrollView horizontal style={style.container}>
      <Modal visible={isModalVisible}>
        <TouchableOpacity style={style.button} onPress={handlePressFalse}>
          <Text>Revenir a la liste des pays</Text>{" "}
        </TouchableOpacity>

        <LanguageModals />
      </Modal>

      <Card containerStyle={{ padding: 0 }}>
        <FlatList
          horizontal
          data={coutries}
          renderItem={({ item }) => (
            <Pressable onPress={handlePressTrue}>
              <View style={style.pad}>
                <Image
                  style={{
                    width: 51,
                    height: 51,
                    resizeMode: "contain",
                  }}
                  source={{
                    uri: item.flags.png,
                  }}
                />
                <Text>{item.name}</Text>
                <Text>{item.capital}</Text>
                <Text>{item.region}</Text>
              </View>
            </Pressable>
          )}
        />
      </Card>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  pad: {
    padding: 10,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
