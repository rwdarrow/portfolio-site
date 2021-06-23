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
  return (
    <S.Header>
      <S.HomePageLink to={home}>
        <span>&gt;rwd</span>
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
