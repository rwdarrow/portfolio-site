import { useRef } from "react";

import TypedText, {
  TypedTextRef,
} from "../../components/typed-text/typed-text.component";

import * as S from "./home.styles";

const HomePage = () => {
  const typedTextRef = useRef<TypedTextRef>(null);

  return (
    <div style={{ height: "100vh" }}>
      <S.HomePageStyle />
      <S.Content>
        <S.TextContainer>
          <TypedText
            ref={typedTextRef}
            text="Hi, I'm Robert Darrow"
            element="h1"
            elementStyles={{ margin: "0 0 1rem 0", fontSize: "3rem" }}
            cursorTimeout={1000}
            hideCursorOnAnimationFinished={true}
          />
          <TypedText
            text={[
              "Full Stack Software Engineer",
              "Musician",
              "Occasional Designer",
              "Scroll to learn more about me",
            ]}
            element="h3"
            elementStyles={{ margin: "0 0 0 0.2rem", fontSize: "1.5rem" }}
            startDelay={2000}
            multilineDelay={500}
            startTypingDelay={1000}
          />
        </S.TextContainer>
        <S.ArrowContainer
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: "0%",
            },
            visible: {
              opacity: 1,
              scale: "100%",
            },
          }}
          transition={{ delay: 13, duration: 1 }}
        >
          <S.GradientArrowThinDown size="3rem" x1="100%" x2="0%" />
        </S.ArrowContainer>
      </S.Content>
      <S.Border />
    </div>
  );
};

export default HomePage;
