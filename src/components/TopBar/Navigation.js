import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({
  toggleOpen,
  scollToRef,
  scollToSkills,
  scollToExp,
  scollToEduc,
  scollToPro,
  scollToCont,
}) => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem
        i={i}
        key={i}
        toggleOpen={toggleOpen}
        scollToRef={scollToRef}
        scollToSkills={scollToSkills}
        scollToExp={scollToExp}
        scollToEduc={scollToEduc}
        scollToPro={scollToPro}
        scollToCont={scollToCont}
      />
    ))}
  </motion.ul>
);

const itemIds = [
  "Sobre mim",
  "Skills",
  "Experiência",
  "Educação",
  "Projetos",
  "Contato",
];
