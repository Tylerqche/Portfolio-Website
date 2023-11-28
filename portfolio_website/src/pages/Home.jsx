import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollArrow from "../components/ScrollArrow"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Home = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <motion.div
        className="basis-3/5 z-10 mt-48 md:mt-32 flex justify-center md:order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="src/assets/totoro.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="src/assets/totoro.png"
          />
        )}
      </motion.div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <motion.div
            className="flex justify-center md:justify-start absolute bottom-16 left-1/2 transform -translate-x-1/2"
            initial="hidden"
            whileInView="visible"
            onClick={() => setSelectedPage("experience")}
            viewport={{ amount: 0.5 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ScrollArrow />
          </motion.div>
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Tyler Cheng
          </p>

          <p className="mt-10 mb-5 text-base text-center md:text-start">
            I'm a current sophomore at Pennsylvania State University, double majoring in <span className="text-primary font-semibold"> Computer Science</span> and <span className="text-primary font-semibold"> Economics</span>, with an associate's degree in <span className="text-primary font-semibold"> Engineering</span>.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 border border-primary hover:bg-primary font-playfair hover:shadow-lg"
            href="https://drive.google.com/file/d/1nkc7YG44pwZZrA49XfmB86rX51kx_Ety/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            href="https://github.com/tylerqche"
            target="_blank"
            rel="noreferrer"
            className="mr-4"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="hover:text-accent transition duration-500"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tylerqcheng/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="hover:text-accent transition duration-500"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )

}

export default Home;