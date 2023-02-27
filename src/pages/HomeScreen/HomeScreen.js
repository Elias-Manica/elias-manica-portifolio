import { useEffect, useState, useRef } from "react";
import Apresentation from "../../components/Apresentation/Apresentation";

import BackgroundSpace from "../../components/BackgroundSpace/BackgroundSpace";
import History from "../../components/History/History";
import TopBar from "../../components/TopBar/TopBar";

import { Container, View } from "./styles";

export default function HomeScreen() {
  const [showHeader, setShowHeader] = useState(false);
  const scollToRef = useRef();
  const scollToSkills = useRef();
  const scollToExp = useRef();
  const scollToEduc = useRef();
  const scollToPro = useRef();
  const scollToCont = useRef();

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
        <TopBar
          showHeader={showHeader}
          scollToRef={scollToRef}
          scollToSkills={scollToSkills}
          scollToExp={scollToExp}
          scollToEduc={scollToEduc}
          scollToPro={scollToPro}
          scollToCont={scollToCont}
        />
        <Container>
          <Apresentation />
          <History
            scollToRef={scollToRef}
            scollToSkills={scollToSkills}
            scollToExp={scollToExp}
            scollToEduc={scollToEduc}
            scollToPro={scollToPro}
            scollToCont={scollToCont}
          />
        </Container>
        <BackgroundSpace />
      </View>
    </>
  );
}
