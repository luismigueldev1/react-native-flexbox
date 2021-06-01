import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Tarea5() {
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
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cajaMorada: {
    width: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5856D6",
    height: "100%",
  },
  cajaNaranja: {
    width: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#F0A23B",
    height: "100%",
  },
  cajaAzul: {
    width: 100,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#28C4D9",
    height: "100%",
  },
})
