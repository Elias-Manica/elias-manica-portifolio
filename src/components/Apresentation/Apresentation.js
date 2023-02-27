import { useEffect } from "react";
import Typewriter from "typewriter-effect";

import {
  Container,
  HelloText,
  Image,
  TextDescription,
  TextName,
  ViewName,
  ViewText,
} from "./styles";

import studing from "../../assets/images/bit-estudando.png";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const BoxVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 20 },
};

export default function Apresentation() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <Container>
        <ViewText>
          <ViewName>
            <HelloText>Olá,</HelloText>
            <p>eu sou o</p>
          </ViewName>
          <TextName>
            Elias Manica
            <Typewriter
              options={{
                strings: [""],
                autoStart: true,
                loop: true,
              }}
            />
          </TextName>
          <TextDescription>
            <Typewriter
              options={{
                strings: ["Desenvolvedor Full Stack 😎", "Eterno estudante 🤓"],
                autoStart: true,
                loop: true,
              }}
            />
          </TextDescription>
        </ViewText>
        <Image
          src={studing}
          as={motion.img}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={BoxVariants}
        />
      </Container>
    </>
  );
}
