import React from "react"
import { Text, View } from "react-native"

export const HelloWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Hola Mundo!
      </Text>
    </View>
  )
}
