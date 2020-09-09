import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friedns = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
    { name: "Friend #11" },
    { name: "Friend #12" },
    { name: "Friend #13" },
  ];

  return (
    <FlatList
      data={friedns}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.name}</Text>
          </View>
        );
      }}
    />
  );
};

const styels = StyleSheet.create({});

export default ListScreen;
