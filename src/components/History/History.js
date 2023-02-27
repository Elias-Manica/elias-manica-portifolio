import { useEffect } from "react";

import {
  Container,
  Image,
  TextAbout,
  Tittle,
  ViewApresentation,
} from "./styles";

import image from "../../assets/images/bit-estudando.png";
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
            Oi 👋, meu nome é Elias Manica e sou um desenvolvedor Full Stack!
            <br />
            <br />
            Atualmente embarquei numa formação intensiva no bootcamp da Driven
            Education 💻
            <br />
            <br />
            Antes estudava Engenharia de Materiais ⚙️ na Universidade Federal do
            Rio de Janeiro, porém após cursar as cadeiras de computação em
            linguagem Python e entrar em contato mais profundo através do
            movimento empresa júnior desenvolvi grande apego pela tecnologia e
            decidi entrar na área.
            <br />
            <br />
            Minha trajetória na empresa Fluxo Consultoria pode me apresentar o
            mercado mais de perto, tendo contato com projetos reais e clientes
            reais. Adquiri valores únicos que vou carregar para sempre como
            sentimento de time e sede por desenvolvimento. No momento, estou
            atuando como um membro externo consultando em projetos de React e
            React Native 🤓
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
