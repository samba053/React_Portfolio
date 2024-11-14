import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiMysql  } from "react-icons/si";
import { motion } from "framer-motion";
import { FaBrain } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import { SiNumpy } from 'react-icons/si';
import { SiPandas } from 'react-icons/si';





const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" /><h1 class="text-center text-sm mt-2 font-bold">React</h1>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-neutral-400" /><h1 class="text-center text-sm mt-2 font-bold">HTML</h1>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-7xl text-green-400" /><h1 class="text-center text-sm mt-2 font-bold">CSS</h1>

        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJs className="text-7xl text-red-700" /><h1 class="text-center text-sm mt-2 font-bold">Java Script</h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-green-500" /><h1 class="text-center text-sm mt-2 font-bold">Python</h1>
        </motion.div>
      
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql  className="text-7xl text-green-500" /><h1 class="text-center text-sm mt-2 font-bold">MySQL</h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBrain  className="text-7xl text-green-500" /><h1 class="text-center text-sm mt-2 font-bold">Machine Learning</h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDatabase  className="text-7xl text-green-500" /><h1 class="text-center text-sm mt-2 font-bold">JAVA</h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBeer className="text-7xl text-green-500" /><h1 class="text-center text-sm mt-2 font-bold">TailWind CSS</h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNumpy  className="text-7xl text-green-500" /><h1 class="text-center text-sm mt-2 font-bold">NumPy</h1>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPandas  className="text-7xl text-green-500" /><h1 class="text-center text-sm mt-2 font-bold">Pandas</h1>
        </motion.div>
       
       </motion.div>
      
    </div>
  );
};

export default Technologies;
