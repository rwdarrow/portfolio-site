import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import TypedText, { TypedTextRef } from "../typed-text/typed-text.component";

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

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isAnimationSuppressed, setIsAnimationSuppressed] = useState(false);

  const { width } = useWindowDimensions();

  const typedTextRef = useRef<TypedTextRef>(null);

  const type = () => {
    if (typedTextRef.current) {
      typedTextRef.current.type();
    }
  };

  const backspace = () => {
    if (typedTextRef.current) {
      typedTextRef.current.backspace();
    }
  };

  return (
    <S.Header>
      <S.LogoBorder
        onMouseEnter={() => type()}
        onMouseLeave={() => backspace()}
        onTouchStart={() => setIsAnimationSuppressed(true)}
      >
        <S.LogoBackground>
          <S.Logo to={home.route}>
            <span>&gt;rwd</span>
            <TypedText
              ref={typedTextRef}
              onStart={false}
              text={"/home"}
              element="span"
              cursorString="_"
              hasGradientText={true}
              suppressAnimation={isAnimationSuppressed}
              hideCursorBeforeAnimationStart={false}
              showCursorIfAnimationSuppressed={true}
            ></TypedText>
          </S.Logo>
        </S.LogoBackground>
      </S.LogoBorder>
      <S.NavbarContainer>
        <AnimatePresence initial={false}>
          {isNavbarOpen && (
            <S.NavbarContent
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                  x: "0%",
                },
                closed: {
                  opacity: width > 768 ? 0 : 1,
                  x: "100%",
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
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              >
                {about.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === skills.route}
                to={skills.route}
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              >
                {skills.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === experience.route}
                to={experience.route}
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              >
                {experience.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === education.route}
                to={education.route}
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              >
                {education.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === projects.route}
                to={projects.route}
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              >
                {projects.name}
              </S.OptionLink>
              <S.Spacer>{"//"}</S.Spacer>
              <S.OptionLink
                selected={currentRoute === contact.route}
                to={contact.route}
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              >
                {contact.name}
              </S.OptionLink>
            </S.NavbarContent>
          )}
        </AnimatePresence>
        <S.NavMenuButton
          open={isNavbarOpen}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <div />
          <div />
          <div />
        </S.NavMenuButton>
      </S.NavbarContainer>
    </S.Header>
  );
};

export default Header;
