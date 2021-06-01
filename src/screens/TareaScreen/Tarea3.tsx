import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Tarea3() {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5856D6",
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#F0A23B",
    alignSelf: "flex-start",
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#28C4D9",
    alignSelf: "center",
  },
})
