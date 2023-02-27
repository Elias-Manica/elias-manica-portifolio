import { useEffect } from "react";

import {
  Container,
  Text,
  TextDate,
  TextOffice,
  View,
  ViewTittle,
} from "./styles";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const BoxVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -20 },
};

export default function Experiencie({ scollToExp }) {
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
      <Container
        ref={ref}
        as={motion.div}
        animate={controls}
        initial="hidden"
        variants={BoxVariants}
      >
        <View ref={scollToExp}>
          <ViewTittle>
            <TextOffice>Consultor de projetos - Frontend</TextOffice>
            <TextDate>02/2022 – atualmente</TextDate>
          </ViewTittle>
          <TextDate isOffice={true}>Fluxo Consultoria</TextDate>
          <Text isFirst={true}>
            Atualmente atuo na coordenação de CCE como um membro externo
            ajudando em projetos de React Native.
          </Text>
          <Text>
            Estou desenvolvendo um aplicativo para celular de um sistema de
            cupons de desconto, cashback e resgate de dinheiro.
          </Text>
          <Text>
            Estou construindo outro aplicativo de gerenciamento que inclui tanto
            o app móvel quanto o website.
          </Text>
          <Text>
            Participei em projetos de mais de uma área, como computação e a
            mecânica.
          </Text>
        </View>
      </Container>
    </>
  );
}
