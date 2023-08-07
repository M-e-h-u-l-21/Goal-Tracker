import { View, TextInput, Button, StyleSheet ,Modal} from "react-native";
import { useState } from "react";
const GoalInput = (props) => {
  const [goal, updateGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    updateGoal(enteredText);
  };

  const addGoalHandler=()=>{
    if(goal==="")
    return 
    props.onAddGoal(goal)
    updateGoal("") 
  }
  return (
    <Modal animationType="slide" visible={props.visibility}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={goal}
      />
      <View>
      <Button
        title="Add Goal"
        onPress={addGoalHandler}
      />
      <Button title="Cancel"/>
      </View>
    </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
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
});
