import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cardModal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 350,
    height: 300,
    borderRadius: 10,
  },

  messageModal: {
    fontSize: 25,
    textAlign: "center",
  },

  buttonClose: {
    position: "absolute",
    right: 10,
    top: 10,
  },

  textClose: {
    fontSize: 20,
  },
});
