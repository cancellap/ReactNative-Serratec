import { StatusBar } from "expo-status-bar";
import { Login } from "./src/screens/Login";
import { HomeV1 } from "./src/screens/HomeV1";
import { HomeV2 } from "./src/screens/HomeV2";
import { HomeV3 } from "./src/screens/HomeV3";
import { HomeV6 } from "./src/screens/HomeV6";
import { Routers } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Routers />
      {/* <Login /> */}
      {/* <HomeV6 /> */}
    </>
  );
}
