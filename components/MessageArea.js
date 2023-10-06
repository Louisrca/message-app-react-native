import { View, Text, StyleSheet } from "react-native";
import { useUserContext } from "../core/CurrentUserProvider";
export default MessageArea = ({ data }) => {
  const { user } = useUserContext();

  
  return (
    <View
      style={data.sender === user ? styles.container : styles.notMeContainer}
    >
      {data.sender !== user ? (
        <View>
          <Text style={styles.notMeSender}>{data.sender}</Text>
        </View>
      ) : null}
      <View style={data.sender === user ? styles.box : styles.notMeBox}>
        <Text
          style={data.sender === user ? styles.message : styles.notMeMessage}
        >
          {data.content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  notMeContainer: {
    alignItems: "flex-start",
  },
  box: {
    maxWidth: "70%",
    padding: 14,
    margin: 8,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgb(0, 118, 246)",
  },
  notMeBox: {
    maxWidth: "70%",
    padding: 14,
    margin: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgb(226, 226, 226)",
  },
  sender: {
    color: "white",
  },
  notMeSender: {
    paddingLeft: 14,
    color: "rgb(200, 200, 200)",
  },
  message: {
    color: "white",
  },
  notMeMessage: {
    color: "black",
  },
});
