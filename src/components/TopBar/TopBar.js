import * as React from "react";
import { useRef } from "react";

import { motion, useCycle } from "framer-motion";

import { useDimensions } from "./use-dimension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "./styles.css";

import {
  ButtonCV,
  ButtonMobile,
  Container,
  ContainerImage,
  Image,
  ImageMobile,
  LineDivision,
  TextSection,
  ViewOption,
} from "./styles";

import leftImage from "../../assets/images/bitmoji.png";
import hiImage from "../../assets/images/bit-ola.png";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function TopBar({
  showHeader,
  scollToRef,
  scollToSkills,
  scollToExp,
  scollToEduc,
  scollToPro,
  scollToCont,
}) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <Container showHeader={showHeader}>
        <ViewOption>
          <Image src={leftImage} />
          <TextSection
            onClick={() => {
              scollToRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Sobre mim
          </TextSection>
          <TextSection
            onClick={() => {
              scollToSkills.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Skills
          </TextSection>
          <TextSection
            onClick={() => {
              scollToExp.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Experiência
          </TextSection>
          <TextSection
            onClick={() => {
              scollToEduc.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Educação
          </TextSection>
          <TextSection
            onClick={() => {
              scollToPro.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Projetos
          </TextSection>
          <TextSection
            onClick={() => {
              scollToCont.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            Contato
          </TextSection>
        </ViewOption>
        <ButtonMobile>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <motion.div className="background" variants={sidebar} />
            <Navigation
              toggleOpen={toggleOpen}
              scollToRef={scollToRef}
              scollToSkills={scollToSkills}
              scollToExp={scollToExp}
              scollToEduc={scollToEduc}
              scollToPro={scollToPro}
              scollToCont={scollToCont}
            />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </ButtonMobile>
        <ContainerImage>
          <ImageMobile src={hiImage} />
        </ContainerImage>
        <ButtonCV
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Baixe meu currículo
        </ButtonCV>
        <LineDivision showHeader={showHeader} />
      </Container>
    </>
  );
}
