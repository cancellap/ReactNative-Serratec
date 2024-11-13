import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9E5E8",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },

  boxCard: {
    width: "80%",
    backgroundColor: "#4A628A80",
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },

  boxInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  name: {
    color: "#eeee",
    fontSize: 25,
    fontWeight: "bold",
  },

  age: {
    color: "#eeee",
    fontSize: 22,
    fontWeight: "bold",
  },

  avatar: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
});
