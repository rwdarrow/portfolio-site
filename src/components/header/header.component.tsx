import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import useWindowDimensions from "../../hooks/use-window-dimensions.hook";

import * as S from "./header.styles";
import {
  home,
  about,
  skills,
  experience,
  education,
  projects,
  contact,
} from "../../routes";

const Header = () => {
  const currentRoute = useLocation().pathname;
  const onHoverTextFull = "/home";
  const [onHoverText, setOnHoverText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowDimensions();

  const typeEffect = (string = "", currIndex = 0, text = onHoverTextFull) => {
    if (string.length < text.length) {
      const newString = string.concat(text.charAt(currIndex));
      setOnHoverText(newString);
      setTimeout(() => typeEffect(newString, currIndex + 1), 75);
    }
  };

  const backspaceEffect = (
    string = onHoverTextFull,
    currIndex = onHoverTextFull.length - 1
  ) => {
    if (string.length > 0) {
      const newString = string.substring(0, currIndex);
      setOnHoverText(newString);
      setTimeout(() => backspaceEffect(newString, currIndex - 1), 60);
    }
  };

  return (
    <S.Header>
      <S.LogoBorder
        onMouseEnter={() => typeEffect()}
        onMouseLeave={() => backspaceEffect()}
      >
        <S.LogoBackground>
          <S.Logo to={home.route}>
            <span>&gt;rwd{onHoverText}</span>
            <S.BlinkingCursor>_</S.BlinkingCursor>
          </S.Logo>
        </S.LogoBackground>
      </S.LogoBorder>
      <S.NavbarContainer>
        <AnimatePresence initial={false}>
          {isOpen && (
            <S.NavbarContent
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                  width: "auto",
                },
                closed: {
                  opacity: width > 768 ? 0 : 1,
                  width: 0,
                },
              }}
              transition={{
                duration: 1,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
            >
              <S.OptionLink
                selected={currentRoute === about.route}
                to={about.route}
                onClick={() => setIsOpen(!isOpen)}
              >
                {about.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === skills.route}
                to={skills.route}
                onClick={() => setIsOpen(!isOpen)}
              >
                {skills.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === experience.route}
                to={experience.route}
                onClick={() => setIsOpen(!isOpen)}
              >
                {experience.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === education.route}
                to={education.route}
                onClick={() => setIsOpen(!isOpen)}
              >
                {education.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === projects.route}
                to={projects.route}
                onClick={() => setIsOpen(!isOpen)}
              >
                {projects.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === contact.route}
                to={contact.route}
                onClick={() => setIsOpen(!isOpen)}
              >
                {contact.name}
              </S.OptionLink>
            </S.NavbarContent>
          )}
        </AnimatePresence>
        <S.NavMenuButton open={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div />
          <div />
          <div />
        </S.NavMenuButton>
      </S.NavbarContainer>
    </S.Header>
  );
};

export default Header;
