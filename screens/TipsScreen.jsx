import { StyleSheet, Text, ScrollView } from "react-native";

const tips = [
  "Establish a routine to provide structure and stability.",
  "Engage in physical activity to boost endorphins.",
  "Practice mindfulness to stay present and reduce overwhelming thoughts.",
  "Challenge negative self-talk by reframing thoughts positively.",
  "Set realistic goals to foster a sense of accomplishment.",
];

const TipsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mental Health Tips</Text>
      {tips.map((tip, index) => (
        <Text key={index} style={styles.item}>
          {index + 1}. {tip}
        </Text>
      ))}
    </ScrollView>
  );
};

export default TipsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
});
