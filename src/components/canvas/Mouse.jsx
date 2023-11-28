import { Circle } from "@react-three/drei";
import { motion} from 'framer-motion'

import React from "react";

function Mouse( {mousePosition, mouseModes, cursoreMove} ) {

  return (
    <motion.div 
      variants={cursoreMove}
      animate={mouseModes}
      className={`h-20 w-20 pointer-events-none z-50 top-0 left-0 absolute bg-purple-500 opacity-[60%] rounded-full`}
    >
    </motion.div>
  );
}

export default Mouse;