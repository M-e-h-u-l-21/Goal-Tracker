import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [goal, updateGoal] = useState("");
  const [list, updateList] = useState([]);

  const addGoalHandler = () => {
    updateList((list) => [...list, goal]);
  };

  const goalInputHandler = (enteredText) => {
    updateGoal(enteredText);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return <Text style={styles.individualGoal}>{itemData.item}</Text>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 6,
    margin: 16,
  },
  individualGoal: {
    fontSize: 16,
    padding: 8,
    borderRadius: 8,
    color: "white",
    marginBottom: 16,
    backgroundColor: "#5e0acc",
  },
});
