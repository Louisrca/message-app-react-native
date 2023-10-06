import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar,
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Platform,
} from "react-native";
import messages from "./DATA/messages.json";
import { useState, useEffect } from "react";
import { FormArea } from "./components/FormArea";
import MessageArea from "./components/MessageArea";
import CurrentUserProvider from "./core/CurrentUserProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [messageData, setMessageData] = useState({});

  useEffect(() => {
    setMessageData(messages);
  }, []);
  return (
    <CurrentUserProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.box}
          data={messageData}
          renderItem={({ item }) => <MessageArea data={item} />}
          keyExtractor={(item) => item.id}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboard}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.input}>
              <FormArea />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </CurrentUserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    textAlign: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  box: {
    flex: 2,
    width: "100%",
    borderRadius: 6,
    marginTop: 20,
  },

  input: {
    width: "100%",
    justifyContent: "end",
  },
});
