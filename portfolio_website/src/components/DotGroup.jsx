import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-accent before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-accent before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${selectedPage === "home" ? selectedStyles : "bg-secondary"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#experience"
        className={`${selectedPage === "experience" ? selectedStyles : "bg-secondary"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("experience")}
      />

      <AnchorLink
        href="#skills"
        className={`${selectedPage === "skills" ? selectedStyles : "bg-secondary"
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      />
    </div>
  );
};

export default DotGroup;