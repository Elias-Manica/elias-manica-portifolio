import { useEffect } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";

import { Container } from "./styles";

import { listProjects } from "./list";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const BoxVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: -15 },
};

export default function Projects({ scollToPro }) {
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
        {listProjects.map((item) => (
          <ProjectCard
            title={item.title}
            link={item.link}
            description={item.description}
            repository={item.repository}
            deploy={item.deploy}
          />
        ))}
      </Container>
    </>
  );
}
