import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const ScrollArrow = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      style={{ display: isAboveLarge ? 'block' : 'none' }}
    >
      <AnchorLink
        href="#experience"
        className="py-2 px-4 font-semibold hover:text-accent transition duration-500 opacity-50"
      >
        <FontAwesomeIcon icon={faChevronDown} size="lg" />
      </AnchorLink>
    </motion.div>
  );
};

export default ScrollArrow;