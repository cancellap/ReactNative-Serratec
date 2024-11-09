import { Alert, Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./style";
import BackGroundImage from "../../assets/barreiaVasco.png";
import papai from "../../assets/pablo.png";
import { ButtonComp } from "../../components/ButtonComp";

export const Login = () => {
  const handleLogin = () => {
    Alert.alert("login");
  };

  const handleRegister = () => {
    Alert.alert("cadastrar");
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageback} source={BackGroundImage}>
        <Image style={styles.image} source={papai} alt="Barreira Vasco" />
        <Text style={styles.estiloTexto}>Login</Text>
        <View style={styles.boxForms}>
          <ButtonComp
            handleFunction={handleLogin}
            title="Login"
            propsBackgroudColor="#840923"
          />
          <ButtonComp handleFunction={handleRegister} title="Cadastrar" />
        </View>
      </ImageBackground>
    </View>
  );
};
