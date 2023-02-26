import { useEffect, useState } from "react";

import BackgroundSpace from "../../components/BackgroundSpace/BackgroundSpace";
import TopBar from "../../components/TopBar/TopBar";

import { Container, View } from "./styles";

export default function HomeScreen() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    console.log(window.scrollY);
    const scrollListener = () => {
      console.log("entrei");
      if (window.scrollY > 10) {
        setShowHeader(true);
        console.log(true);
      } else {
        setShowHeader(false);
        console.log(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <View>
        <TopBar showHeader={showHeader} />
        <Container>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
          <h1>home screen</h1>
        </Container>
        <BackgroundSpace />
      </View>
    </>
  );
}
