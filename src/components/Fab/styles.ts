import { StyleSheet } from "react-native"

import { Colors } from "../../styles/Colors"

export const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
  },
  fabPositionRight: {
    right: 20,
  },
  fabPositionLeft: {
    left: 20,
  },

  fabContent: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 0,
    elevation: 4,
  },

  fabContentRed: {
    backgroundColor: Colors.red,
  },
  fabContentText: {
    color: Colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
})
