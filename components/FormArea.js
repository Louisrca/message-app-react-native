import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import messages from "../DATA/messages.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FormArea = () => {
  const [messageValue, setMessageValue] = useState("");



  
  const handleAddMessage = async () => {
    try {
      const jsonValue = JSON.stringify(messageValue);
      await AsyncStorage.setItem("message", jsonValue);
      await getData();
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("message");
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Messages"
        onChangeText={(text) => setMessageValue(text)}
      />
      {!messageValue ? (
        <View style={styles.buttonDisabled}>
          <Button title="add" disabled onPress={handleAddMessage} />
        </View>
      ) : (
        <View style={styles.button}>
          <Button
            title="add"
            color="rgb(226, 226, 226)"
            onPress={handleAddMessage}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "rgb(226, 226, 226)",
    borderRadius: 22,
    margin: 5,
    padding: 10,
  },
  buttonDisabled: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(226, 226, 226)",
    margin: 5,
    padding: 2,
    borderRadius: 50,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0, 118, 246)",
    margin: 5,
    padding: 2,
    borderRadius: 50,
  },
});
