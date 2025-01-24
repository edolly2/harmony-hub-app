import { StyleSheet, Text, View, FlatList } from "react-native";

const schedule = [
  {
    day: "Monday",
    routine: "Morning gratitude journaling and light stretching.",
  },
  { day: "Tuesday", routine: "Volunteer or connect with someone you trust." },
  { day: "Wednesday", routine: "Short yoga session and creative activity." },
  { day: "Thursday", routine: "Affirmations and organizing your space." },
  { day: "Friday", routine: "Focus on a challenging but manageable task." },
  { day: "Saturday", routine: "Spend time outdoors in nature." },
  { day: "Sunday", routine: "Plan the week ahead with small goals." },
];

const ScheduleScreen = () => {
  return (
    <FlatList
      style={styles.container}
      data={schedule}
      keyExtractor={(item) => item.day}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.subtitle}>{item.day}</Text>
          <Text>{item.routine}</Text>
        </View>
      )}
    />
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
