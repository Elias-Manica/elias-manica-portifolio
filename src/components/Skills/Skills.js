import { useEffect } from "react";

import { Container, ViewIcon, ViewName } from "./styles";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { DiMongodb, DiPostgresql } from "react-icons/di";

import {
  SiPrisma,
  SiTypescript,
  SiDocker,
  SiRedis,
  SiJest,
  SiAmazonaws,
} from "react-icons/si";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const BoxVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 20 },
};

export default function Skills({ scollToSkills }) {
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
        <ViewIcon ref={scollToSkills}>
          <FaHtml5 />
          <ViewName>HTML</ViewName>
        </ViewIcon>
        <ViewIcon>
          <FaCss3Alt />
          <ViewName>CSS</ViewName>
        </ViewIcon>
        <ViewIcon>
          <FaJsSquare />
          <ViewName>Javascript</ViewName>
        </ViewIcon>
        <ViewIcon>
          <FaReact />
          <ViewName>React.js</ViewName>
        </ViewIcon>
        <ViewIcon>
          <FaReact />
          <ViewName>React Native</ViewName>
        </ViewIcon>
        <ViewIcon>
          <FaNodeJs />
          <ViewName>Node.js</ViewName>
        </ViewIcon>
        <ViewIcon>
          <SiTypescript />
          <ViewName>Typescript</ViewName>
        </ViewIcon>
        <ViewIcon>
          <DiMongodb />
          <ViewName>MongoDB</ViewName>
        </ViewIcon>
        <ViewIcon>
          <DiPostgresql />
          <ViewName>Postgres</ViewName>
        </ViewIcon>
        <ViewIcon>
          <SiRedis />
          <ViewName>Redis</ViewName>
        </ViewIcon>
        <ViewIcon>
          <SiPrisma />
          <ViewName>Prisma</ViewName>
        </ViewIcon>
        <ViewIcon>
          <SiJest />
          <ViewName>Jest</ViewName>
        </ViewIcon>
        <ViewIcon>
          <SiDocker />
          <ViewName>Docker</ViewName>
        </ViewIcon>
        <ViewIcon>
          <SiAmazonaws />
          <ViewName>AWS</ViewName>
        </ViewIcon>
      </Container>
    </>
  );
}
