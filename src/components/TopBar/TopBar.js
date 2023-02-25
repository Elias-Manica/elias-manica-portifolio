import { motion } from "framer-motion";

import { ButtonCV, Container, Image, TextSection } from "./styles";

import leftImage from "../../assets/images/bitmoji.png";

export default function TopBar() {
  return (
    <>
      <Container>
        <div>
          <Image src={leftImage} />
          <TextSection>Sobre mim</TextSection>
          <TextSection>Skills</TextSection>
          <TextSection>Experiência</TextSection>
          <TextSection>Educação</TextSection>
          <TextSection>Projetos</TextSection>
        </div>
        <ButtonCV
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Baixe meu currículo
        </ButtonCV>
      </Container>
    </>
  );
}
