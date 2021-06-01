import React from "react"
import { StyleSheet, Text, useWindowDimensions, View } from "react-native"

export default function DimesionesScreen() {
  //const { width, height } = Dimensions.get("window")
  const { width, height } = useWindowDimensions()
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.5,
          }}
        />
        <View style={styles.cajaNaranja} />
      </View>
      <Text>
        Width: {width}, Height: {height}
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
  },
  cajaMorada: {
    backgroundColor: "#5856D6",
    width: "50%",
    height: "50%",
  },
  cajaNaranja: {
    backgroundColor: "#F0A23B",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
})
