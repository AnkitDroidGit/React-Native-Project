import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friedns = [
    { name: "Friend #1", key: "1" },
    { name: "Friend #2", key: "2" },
    { name: "Friend #3", key: "3" },
    { name: "Friend #4", key: "4" },
    { name: "Friend #5", key: "5" },
    { name: "Friend #6", key: "6" },
    { name: "Friend #7", key: "7" },
    { name: "Friend #8", key: "8" },
    { name: "Friend #9", key: "9" },
    { name: "Friend #10", key: "10" },
    { name: "Friend #11", key: "11" },
    { name: "Friend #12", key: "12" },
    { name: "Friend #13", key: "13" },
    { name: "Friend #14", key: "14" },
    { name: "Friend #15", key: "15" },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      //keyExtractor={(friedn) => friedn.key} // another way
      data={friedns}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styels.textStyle}>{item.name}</Text>
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
