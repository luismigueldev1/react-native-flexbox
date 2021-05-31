import React, { useState } from "react"
import { Text, View } from "react-native"
import { Fab } from "../../components/Fab"
import { styles } from "./styles"

export const ContadorScreen = () => {
  const [counter, setCounter] = useState(0)

  const handleIncreaseCounter = () => {
    setCounter(counter + 1)
  }

  const handleDecrementCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador : {counter}</Text>

      <Fab
        title="+1"
        onPress={handleIncreaseCounter}
        position="right"
        color="primary"
      />
      <Fab
        title="-1"
        onPress={handleDecrementCounter}
        position="left"
        color="danger"
      />

      {/* <FabRight handleIncreaseCounter={handleIncreaseCounter} />
      <FabLeft handleDecrementCounter={handleDecrementCounter} /> */}
    </View>
  )
}
