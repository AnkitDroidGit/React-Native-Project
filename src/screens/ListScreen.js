import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friedns = [
    { name: "Friend #1", age: "21" },
    { name: "Friend #2", age: "22" },
    { name: "Friend #3", age: "23" },
    { name: "Friend #4", age: "24" },
    { name: "Friend #5", age: "25" },
    { name: "Friend #6", age: "26" },
    { name: "Friend #7", age: "27" },
    { name: "Friend #8", age: "28" },
    { name: "Friend #9", age: "29" },
    { name: "Friend #10", age: "30" },
    { name: "Friend #11", age: "31" },
    { name: "Friend #12", age: "32" },
    { name: "Friend #13", age: "33" },
    { name: "Friend #14", age: "34" },
    { name: "Friend #15", age: "35" },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friedns}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styels.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styels = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default ListScreen;
