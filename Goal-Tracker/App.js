import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  FlatListComponent,
} from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [list, updateList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalVisible(!modalVisible);
  };

  const addGoalHandler = (goal) => {
    updateList((list) => [
      ...list,
      { text: goal, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    updateList((list) => {
      return list.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visibility={modalVisible} />
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
            // return <Text style={styles.individualGoal}>{itemData.item}</Text>;
          }}
          // keyExtractor={(item, index) => {
          //   return item.id;
          // }}
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
