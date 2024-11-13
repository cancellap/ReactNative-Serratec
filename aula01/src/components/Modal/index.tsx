import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface PropsModal {
  openModal: boolean;
  message: string;
  setOpenModal: (value: boolean) => void;
}

export const ModalCustomer = ({
  openModal,
  message,
  setOpenModal,
}: PropsModal) => {
  return (
    <Modal transparent={true} visible={openModal} animationType="slide">
      <View style={styles.containerModal}>
        <View style={styles.cardModal}>
          <Text style={styles.messageModal}>{message}</Text>

          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setOpenModal(!openModal)}
          >
            <Text style={styles.textClose}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
