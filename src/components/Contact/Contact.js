import { useEffect } from "react";

import { Container, View, ViewIcon } from "./styles";

import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp } from "react-icons/si";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const BoxVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 15 },
};

export default function Contac({ scollToCont }) {
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
        <View>
          <ViewIcon
            href="https://www.linkedin.com/in/eliasmanica/"
            target="_blank"
          >
            <SiLinkedin />
          </ViewIcon>
          <ViewIcon href="mailto:eliasmanica@poli.ufrj.br">
            <SiGmail />
          </ViewIcon>
          <ViewIcon
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5551991167466",
                "_blank"
              )
            }
          >
            <SiWhatsapp />
          </ViewIcon>
          <ViewIcon
            isLast={true}
            href="https://github.com/Elias-Manica"
            target="_blank"
          >
            <SiGithub />
          </ViewIcon>
        </View>
      </Container>
    </>
  );
}
