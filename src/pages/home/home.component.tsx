import { useState, useEffect } from "react";

import * as S from "./home.styles";

const HomePage = () => {
  const headlineTextFull = "Robert Darrow";
  const [headlineText, setHeadlineText] = useState("");

  const typeEffect = (string = "", currIndex = 0, text = headlineTextFull) => {
    if (string.length < text.length) {
      const newString = string.concat(text.charAt(currIndex));
      setHeadlineText(newString);
      setTimeout(() => typeEffect(newString, currIndex + 1), 75);
    }
  };

  const backspaceEffect = (
    string = headlineTextFull,
    currIndex = headlineTextFull.length - 1
  ) => {
    if (string.length > 0) {
      const newString = string.substring(0, currIndex);
      setHeadlineText(newString);
      setTimeout(() => backspaceEffect(newString, currIndex - 1), 60);
    }
  };

  useEffect(() => {
    setTimeout(() => typeEffect(), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.HomePageStyle />
      <S.BreakerBorder>
        <S.Breaker />
      </S.BreakerBorder>
      <S.BreakerContent>
        <S.TypedText>
          <h1>{headlineText}</h1>
          <S.BlinkingCursor>|</S.BlinkingCursor>
        </S.TypedText>
        <h3 style={{ marginLeft: "0.2rem" }}>Full Stack Software Engineer</h3>
      </S.BreakerContent>
    </>
  );
};

export default HomePage;
