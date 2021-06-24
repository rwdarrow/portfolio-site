import { useState } from "react";
import { WindupChildren, useRewind, Pace } from "windups";

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
  const [triggerWindup, setTriggerWindup] = useState(false);

  // WindupChildren can only trigger rewind from a child component
  // render this dummy div that fills the Logo/home page button to
  // trigger rewind on mouse leave
  const WindupDummyDiv = () => {
    const rewind = useRewind();
    return (
      <S.WindupDummyDiv
        onMouseLeave={() => {
          rewind();
          setTriggerWindup(false);
        }}
      />
    );
  };

  return (
    <S.Header>
      <S.HomePageLink to={home} onMouseEnter={() => setTriggerWindup(true)}>
        <span>&gt;rwd</span>
        {triggerWindup && (
          <WindupChildren>
            <WindupDummyDiv />
            <Pace ms={50}>{"/home"}</Pace>
          </WindupChildren>
        )}
        <S.BlinkingCursor>_</S.BlinkingCursor>
      </S.HomePageLink>
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
