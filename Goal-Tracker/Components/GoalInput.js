import { View, TextInput, Button, StyleSheet ,Modal,Image} from "react-native";
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
      <Image source={require('../assets/goal.png')} style={styles.image}/>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}
        value={goal}
      />
      <View style={styles.button}>
        <View style={styles.buttonStyling}>
      <Button
        title="Add Goal"
        onPress={addGoalHandler}
        color='#5e0acc'       
      />
      </View>
      <View style={styles.buttonStyling}>
      <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
      </View>
      </View>
    </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:"#120438",
    width: "100%",
    borderRadius:6,
    color:'white',
    padding: 16,
  },
  button:{
    flexDirection:"row",
    padding:8,
    justifyContent:'center'
  },
  buttonStyling:{
    width:"30%",
    marginHorizontal:4
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
