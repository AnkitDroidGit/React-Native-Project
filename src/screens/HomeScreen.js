import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Ankit</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("Components");
        }}
        title="Go to Components Screen"
      />
      <TouchableOpacity
        onPress={() => {
          console.log("List pressed");
        }}
      >
        <Text>Got to List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
