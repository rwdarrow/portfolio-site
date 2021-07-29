import * as S from "./about.styles"

import { routes } from "../../routes"

const About = () => {
  return (
    <S.AboutPageContainer id={routes.about.route.substring(2)}>
    </S.AboutPageContainer>
  );
};

export default About;
