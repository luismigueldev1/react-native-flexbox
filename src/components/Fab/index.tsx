import React from "react"
import { styles } from "./styles"
import { Text, TouchableOpacity, View } from "react-native"

interface Props {
  title: string
  position: "right" | "left"
  color: "primary" | "danger"
  onPress: () => void
}

export const Fab = ({ color, position, title, onPress }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.fab,
        position === "right" ? styles.fabPositionRight : styles.fabPositionLeft,
        styles.fabContent,
        color === "danger" && styles.fabContentRed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.fabContentText}>{title}</Text>
    </TouchableOpacity>
  )
}

{
  /* <TouchableOpacity
style={[
  styles.fab,
  position === "right" ? styles.fabPositionRight : styles.fabPositionLeft,
]}
onPress={onPress}
>
<View
  style={[styles.fabContent, color === "danger" && styles.fabContentRed]}
>
  <Text style={styles.fabContentText}>{title}</Text>
</View>
</TouchableOpacity> */
}
