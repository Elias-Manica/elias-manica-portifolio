import { useEffect } from "react";

import {
  Container,
  Image,
  TextAbout,
  Tittle,
  ViewApresentation,
} from "./styles";

import image from "../../assets/images/bit-comp.png";
import Skills from "../Skills/Skills";
import Experiencie from "../Experiencie/Experiencie";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contac from "../Contact/Contact";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const BoxVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -20 },
};

export default function History({
  scollToRef,
  scollToSkills,
  scollToExp,
  scollToEduc,
  scollToPro,
  scollToCont,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [refText, inViewText] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, inViewText]);

  return (
    <>
      <Container>
        <Tittle isFirst={true} ref={scollToRef}>
          Sobre mim
        </Tittle>
        <ViewApresentation>
          <Image
            src={image}
            ref={ref}
            as={motion.img}
            animate={controls}
            initial="hidden"
            variants={BoxVariants}
          />
          <TextAbout
            ref={refText}
            as={motion.p}
            animate={controls}
            initial="hidden"
            variants={BoxVariants}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </TextAbout>
        </ViewApresentation>
        <Tittle>Skills</Tittle>
        <Skills scollToSkills={scollToSkills} />
        <Tittle ref={scollToExp}>Experiência</Tittle>
        <Experiencie />
        <Tittle ref={scollToEduc}>Educação</Tittle>
        <Education />
        <Tittle ref={scollToPro}> Projetos</Tittle>
        <Projects />
        <Tittle ref={scollToCont}>Contato</Tittle>
        <Contac />
      </Container>
    </>
  );
}
