import { Image } from "./styles";

import { motion } from "framer-motion";

import astro from "../../assets/images/bit-astro.png";

export default function Astronaut() {
  return (
    <>
      <motion.div>
        <Image
          src={astro}
          as={motion.img}
          style={{
            position: "fixed",
            top: 100,
            left: 0,
          }}
          drag
          dragConstraints={{ top: 0, bottom: 300, left: 0, right: 1200 }}
          whileHover={{ opacity: 1 }}
          whileTap={{
            opacity: 1,
            scale: 1.05,
            cursor: "grabbing",
          }}
          whileDrag={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </>
  );
}
