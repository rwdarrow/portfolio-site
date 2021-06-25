import { useState } from "react";

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
  const onHoverTextFull = "/home";
  const [onHoverText, setOnHoverText] = useState("");

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
      <S.LogoBorder>
        <S.LogoBackground>
          <S.Logo
            to={home}
            onMouseEnter={() => typeEffect()}
            onMouseLeave={() => backspaceEffect()}
          >
            <span>&gt;rwd{onHoverText}</span>
            <S.BlinkingCursor>_</S.BlinkingCursor>
          </S.Logo>
        </S.LogoBackground>
      </S.LogoBorder>
      <S.OptionsContainer>
        <S.OptionLink to={about}>About</S.OptionLink>
        <S.Spacer>{"//"}</S.Spacer>
        <S.OptionLink to={skills}>Skills</S.OptionLink>
        <S.Spacer>{"//"}</S.Spacer>
        <S.OptionLink to={experience}>Experience</S.OptionLink>
        <S.Spacer>{"//"}</S.Spacer>
        <S.OptionLink to={education}>Education</S.OptionLink>
        <S.Spacer>{"//"}</S.Spacer>
        <S.OptionLink to={projects}>Projects</S.OptionLink>
        <S.Spacer>{"//"}</S.Spacer>
        <S.OptionLink to={contact}>Contact</S.OptionLink>
      </S.OptionsContainer>
    </S.Header>
  );
};

export default Header;
