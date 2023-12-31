import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import messages from "../DATA/messages.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserContext } from "../core/CurrentUserProvider";

export const FormArea = () => {
  const { user } = useUserContext();

  const [messageValue, setMessageValue] = useState("");
  const [allMessage, setallMessage] = useState([]);

  const handleAddMessage = async () => {
    try {
      const allMessage = await AsyncStorage.getItem("message");
      const messageParsed = JSON.parse(allMessage);
      const jsonValue = JSON.stringify([
        {
          message: messageValue,
          id: 2,
          sender: user,
        },
      ]);
      const updatedMessages = [...messageParsed, jsonValue];
      await AsyncStorage.setItem("message", updatedMessages);
      console.log(messageParsed);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async (message) => {
    try {
      const value = await AsyncStorage.getItem("message");
      if (value !== null) {
        // setMessageValue([...messageValue, JSON.parse(value)]);
        console.log(value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  console.log(messageValue);

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
