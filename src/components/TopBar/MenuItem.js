import * as React from "react";
import { motion } from "framer-motion";
import { TextMobile } from "./styles";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  i,
  toggleOpen,
  scollToRef,
  scollToSkills,
  scollToExp,
  scollToEduc,
  scollToPro,
  scollToCont,
}) => {
  function clicked(i) {
    if (i === "Sobre mim") {
      scollToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    if (i === "Skills") {
      scollToSkills.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    if (i === "Experiência") {
      scollToExp.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    if (i === "Educação") {
      scollToEduc.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    if (i === "Projetos") {
      scollToPro.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    if (i === "Contato") {
      scollToCont.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <TextMobile
        onClick={() => {
          toggleOpen();
          clicked(i);
        }}
      >
        {i}
      </TextMobile>
    </motion.li>
  );
};
