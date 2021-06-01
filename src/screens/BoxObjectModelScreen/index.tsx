import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  title: {
    padding: "5%",
    fontSize: 20,
    //width: "100%",
    borderWidth: 5,
    margin: "5%",
    //backgroundColor: "red",
  },
})
