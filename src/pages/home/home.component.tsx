import { useState, useEffect, useRef } from "react";

import TypedText, {
  TypedTextRef,
} from "../../components/typed-text/typed-text.component";
import { palette } from "../../global.styles";

import * as S from "./home.styles";

const HomePage = () => {
  const typedTextRef = useRef<TypedTextRef>(null);

  return (
    <>
      <S.HomePageStyle />
      <S.BreakerBorder>
        <S.Breaker />
      </S.BreakerBorder>
      <S.BreakerContent>
        <TypedText
          ref={typedTextRef}
          text="Robert Darrow"
          element="h1"
          elementStyles={{ margin: 0, fontSize: "4rem" }}
          cursorTimeout={1500}
          hideCursorOnAnimationFinished={true}
        />
        <TypedText
          text={["Full Stack Software Engineer", "Person"]}
          element="h3"
          elementStyles={{ margin: "0.2rem", fontSize: "2rem" }}
          typeSpeed={50}
          loop={true}
          backspaceSpeed={25}
          startDelay={2000}
          startTypingDelay={1000}
        />
      </S.BreakerContent>
    </>
  );
};

export default HomePage;
