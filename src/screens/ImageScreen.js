import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imgSrc={require("../../assets/forest.jpg")}
        score={4}
      />
      <ImageDetail
        title="Beach"
        imgSrc={require("../../assets/beach.jpg")}
        score={9}
      />
      <ImageDetail
        title="Mountain"
        imgSrc={require("../../assets/mountain.jpg")}
        score={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;
