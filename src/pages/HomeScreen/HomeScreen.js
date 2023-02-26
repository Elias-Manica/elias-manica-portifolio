import { useEffect, useState } from "react";
import Apresentation from "../../components/Apresentation/Apresentation";

import BackgroundSpace from "../../components/BackgroundSpace/BackgroundSpace";
import TopBar from "../../components/TopBar/TopBar";

import { Container, View } from "./styles";

export default function HomeScreen() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
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
          <Apresentation />
        </Container>
        <BackgroundSpace />
      </View>
    </>
  );
}
