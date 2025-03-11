import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: count < 5 ? "red" : "purple" }]}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="+2" onPress={() => setCount(count + 2)} />
      <Button title="-2" onPress={() => setCount(count - 2)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});

export default Counter;