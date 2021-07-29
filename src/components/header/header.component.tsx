import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";

import { routes } from "../../routes";

import TypedText, { TypedTextRef } from "../typed-text/typed-text.component";

import useWindowDimensions from "../../hooks/use-window-dimensions.hook";

import * as S from "./header.styles";

const Header = () => {
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionLinks = Object.values(routes);
  const lastSection = sectionLinks[sectionLinks.length - 1];

  return (
    <S.Header>
      <S.LogoBorder
        onMouseEnter={() => type()}
        onMouseLeave={() => backspace()}
        onTouchStart={() => setIsAnimationSuppressed(true)}
      >
        <S.LogoBackground>
          <S.Logo onClick={() => scrollToSection(routes.home.id)}>
            <span>&gt;rwd</span>
            <TypedText
              ref={typedTextRef}
              onStart={false}
              text={"/home"}
              element="span"
              typeSpeed={80}
              backspaceSpeed={50}
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
              {sectionLinks.map((value) => {
                return (
                  <>
                    <S.OptionLink
                      key={value.id}
                      onClick={() => {
                        scrollToSection(value.id);
                        setIsNavbarOpen(!isNavbarOpen);
                      }}
                    >
                      {value.name}
                    </S.OptionLink>
                    {value !== lastSection && <S.Spacer>{"//"}</S.Spacer>}
                  </>
                );
              })}
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
