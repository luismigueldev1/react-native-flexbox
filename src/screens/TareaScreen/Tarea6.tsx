import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Tarea6() {
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
  },

  cajaMorada: {
    width: "100%",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5856D6",
    flex: 2,
  },
  cajaNaranja: {
    width: "100%",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#F0A23B",
    flex: 2,
  },
  cajaAzul: {
    width: "100%",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#28C4D9",
    flex: 2,
  },
})
