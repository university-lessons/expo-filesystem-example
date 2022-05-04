import { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import * as FileSystem from "expo-file-system"; // $ expo install expo-file-system

export default function App() {
  const [txt, setTxt] = useState("");

  const handleSave = async () => {
    const fileUri = FileSystem.documentDirectory + "text.txt";
    const contents = "Hello World N=" + Math.random();
    const options = { encoding: FileSystem.EncodingType.UTF8 };
    await FileSystem.writeAsStringAsync(fileUri, contents, options);

    setTxt("Saved: " + contents);
  };

  const handleRead = async () => {
    const fileUri = FileSystem.documentDirectory + "text.txt";
    const options = { encoding: FileSystem.EncodingType.UTF8 };
    const contents = await FileSystem.readAsStringAsync(fileUri, options);

    setTxt("Read:" + contents);
  };

  return (
    <View style={styles.container}>
      <Text>{txt}</Text>
      <Button onPress={handleSave} title="Save" />
      <Button onPress={handleRead} title="Read" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
