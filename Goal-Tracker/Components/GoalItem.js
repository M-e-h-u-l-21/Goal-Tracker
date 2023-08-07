import { StyleSheet, Text, Pressable, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: 'black' }}
        onPress={() => props.onDeleteItem(props.id)}
      >
        <Text style={styles.individualGoal}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem:{
        opacity:0.5,
      },
  individualGoal: {
    fontSize: 16,
    padding: 8,
    
    borderRadius: 8,
    color: "white",
    backgroundColor: "#5e0acc",
  },
});
